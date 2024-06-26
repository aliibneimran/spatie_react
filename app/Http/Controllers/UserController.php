<?php

namespace App\Http\Controllers;

use App\Mail\WelcomeMail;
use App\Models\Package;
use App\Models\User;
use App\Notifications\NewNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;

class UserController extends Controller

{
    function __construct()
    {
         $this->middleware('permission:user-list|user-create|user-edit|user-delete', ['only' => ['index','store']]);
         $this->middleware('permission:user-create', ['only' => ['create','store']]);
         $this->middleware('permission:user-edit', ['only' => ['edit','update']]);
         $this->middleware('permission:user-delete', ['only' => ['destroy']]);
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::paginate(10);
        return Inertia::render('Users/Index',compact('users'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $roles = Role::get();
        $packages = Package::all();
        return Inertia::render('Users/Create',compact('roles','packages'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
            'role' => 'required|integer',
        ]);

        $input = $request->all();
        $input['password'] = Hash::make($input['password']);
        $input['type'] = $request->type ?? 2;
        $input['client_id'] = auth()->user()->id;
        $input['child_client_id'] = $input['client_id'] . rand(11, 999);
        $input['package_id'] = $request->package_id ?? NULL;
        $input['business_name'] = $request->business_name ?? NULL;
        $input['client_address'] = $request->client_address ?? NULL;
        $input['client_mobile'] = $request->client_mobile ?? NULL;
        $registration_date = $request->registration_date;
        $input['registration_date'] = $registration_date ?? NULL;
        $expire_date = $request->expire_date;
        $input['expire_date'] = $expire_date ?? NULL;

        // dd($input);

        $user = User::create($input);
        $user->assignRole($request->input('roles'));

        // send mail
        $urlLink = $request->root();
        $user = [
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password,
            'link' => $urlLink,
        ];
        $email = $request->email;
        Mail::to($email)->send(new WelcomeMail($user));

        // Notification
        $datas = $request->email;
        User::find(Auth::user()->id)->notify(new NewNotification($datas));

        return redirect()->route('users.index')->with('success', 'User created successfully.');
        // return Inertia::render('Users/Create',compact('roles','packages'));
    }
    
    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $user = User::findOrFail($id);
        $roles = Role::pluck('name', 'id')->all();
        return Inertia::render('Users/Edit', compact('user', 'roles'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users,email,' . $id,
            'password' => 'nullable|string|min:8|confirmed',
            'roles' => 'required|array',
        ]);

        $user = User::findOrFail($id);
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        if ($request->filled('password')) {
            $user->password = Hash::make($request->input('password'));
        }
        $user->save();

        $user->syncRoles($request->input('roles'));

        return redirect()->route('users.index')->with('success', 'User updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        User::find($id)->delete();
        return redirect()->route('users.index')
            ->with('success', 'User deleted successfully');
    }
    public function usertrash()
    {
        $user = User::onlyTrashed()->latest()->paginate(10);
        return Inertia::render('Users/Trash', compact('user'));
    }

    public function restore($id)
    {
        $user = User::onlyTrashed()->find($id);
        $user->restore();
        return redirect()->route('users.index')->with('success', 'Data Restored Successfully');
    }

    public function delete($id)
    {
        $user = User::onlyTrashed()->find($id);
        $user->forceDelete();

        // $dataDelete = "User Deleted.";
        // User::find(Auth::user()->id)->notify(new NewNotification($dataDelete));

        return redirect()->route('users.trash')->with('success', 'Data Deleted Successfully');
    }

    // Active, deactive

    public function changeStatus(Request $request, $id)
    {

        $input['status'] = $request->status ? $request->status : 0;
        $user = User::find($id);
        $user->update($input);
        return redirect()->route('users.index')
            ->with('success', 'Update Successfully');
    }

    // notification

    public function markAsRead()
    {
        Auth::user()->unreadNotifications->markAsRead();
        return redirect()->back();
    }
}
