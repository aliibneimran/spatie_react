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
        $this->middleware('auth');

        $this->middleware('permission:user-list|user-create|user-edit|user-delete', ['only' => ['index', 'store']]);
        $this->middleware('permission:user-create', ['only' => ['create', 'store']]);
        $this->middleware('permission:user-edit', ['only' => ['edit', 'update']]);
        $this->middleware('permission:user-delete', ['only' => ['destroy']]);
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = auth()->user();
        $type = auth()->user()->type;
        $status = auth()->user()->status;
        if ($type === 0) {
            $id = auth()->user()->id;
            // $data = User::orderBy('id', 'DESC')->paginate(10);
            $users = User::with('role', 'package')->where('client_id', $id)->orderBy('id', 'DESC')->paginate(10);
            return Inertia::render('Users/Index', compact('users', 'user', 'status'));
        }

        if ($type === 1) {
            $id = auth()->user()->id;
            $users = User::with('role')->where('client_id', $id)->orderBy('id', 'DESC')->paginate(10);
            return Inertia::render('Users/Index', compact('users', 'user', 'status'));
        }
        // if ($type === 2) {
        //     $id = auth()->user()->id;
        //     $users = User::with('role')->where('client_id', $id )->orderBy('id', 'DESC')->paginate(10);
        //     return Inertia::render('Users/Index', compact('users','user'));
        // }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $user = auth()->user();
        $roles = Role::get();
        $packages = Package::all();
        return Inertia::render('Users/Create', compact('roles', 'packages', 'user'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request->all());
        // Validate the request
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
            'roles' => 'required|array',
        ]);

        // Prepare input data
        $input = $request->all();
        $input['password'] = Hash::make($input['password']);
        $input['type'] = $request->type ?? 2;
        $input['client_id'] = auth()->user()->id;
        $input['child_client_id'] = $input['client_id'] . rand(11, 999);
        $input['package_id'] = $request->package ?? NULL;
        $input['business_name'] = $request->business_name ?? NULL;
        $input['client_address'] = $request->client_address ?? NULL;
        $input['client_mobile'] = $request->client_mobile ?? NULL;
        $input['registration_date'] = $request->registration_date ?? NULL;
        $input['expire_date'] = $request->expire_date ?? NULL;

        // Create the user
        $user = User::create($input);

        // Fetch role names based on the IDs provided
        // $user->assignRole($request->input('roles'));
        $roleNames = Role::whereIn('id', $request->input('roles'))->pluck('name')->toArray();

        // Assign roles to the user
        $user->assignRole($roleNames);

        // Send welcome email
        $urlLink = $request->root();
        $user = [
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password,
            'link' => $urlLink,
        ];
        Mail::to($request->email)->send(new WelcomeMail($user));

        // Send notification
        $datas = $request->email;
        User::find(Auth::user()->id)->notify(new NewNotification($datas));

        // Redirect with success message
        return redirect()->route('users.index')
            ->with('success', 'User created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // $user = User::find($id);
        // return view('components.users.show', compact('user'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $data['user'] = auth()->user();
        $data['user'] = User::find($id);
        $data['roles'] = Role::all();
        $data['userRole'] = $data['user']->roles->pluck('name', 'name')->all();
        $packages = Package::all();
        return Inertia::render('Users/Edit', $data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email,' . $id,
            'password' => 'required|string|min:8|confirmed',
            'roles' => '',
        ]);
        // dd($request->all());



        $input = $request->all();
        if (!empty($input['password'])) {
            $input['password'] = Hash::make($input['password']);
        } else {
            $input = Arr::except($input, array('password'));
        }


        $input['package_id'] = $request->package_id ?? NULL;
        $input['business_name'] = $request->business_name ?? NULL;
        $input['client_address'] = $request->client_address ?? NULL;
        $input['client_mobile'] = $request->client_mobile ?? NULL;
        $registration_date = $request->registration_date;
        $input['registration_date'] = $registration_date ?? NULL;
        $expire_date = $request->expire_date;
        $input['expire_date'] = $expire_date ?? NULL;

        // dd($input);
        $user = User::find($id);
        $user->update($input);
        DB::table('model_has_roles')->where('model_id', $id)->delete();

        $user->assignRole($request->input('roles'));

        return redirect()->route('users.index')
            ->with('success', 'User updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        User::find($id)->delete();
        return redirect()->route('users.index')
            ->with('success', 'User Trashted successfully');
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
    // public function changeStatus(Request $request, $id)
    // {
    //     dd($request->all());
    //     $input['status'] = $request->status ? $request->status : 0;
    //     $user = User::find($id);
    //     $user->update($input);
    //     return redirect()->route('users.index')
    //         ->with('success', 'Update Successfully');
    // }
    public function changeStatus(Request $request, $id)
    {
        // dd($request->all());
        // $user = User::find($id);

        // if ($user) {
        //     $user->status = $request->status ? 1 : 0;
        //     $user->save();

        //     return redirect()->route('users.index')
        //         ->with('success', 'Status updated successfully');
        // }

        // return redirect()->route('users.index')
        //     ->with('error', 'User not found');
        $user = User::find($id);
        $user->status = $request->input('status');
        $user->save();

        return response()->json(['success' => 'Status updated successfully']);
        // return redirect()->back()->with('success', 'Status updated successfully');
    }

    // notification

    public function markAsRead()
    {
        Auth::user()->unreadNotifications->markAsRead();
        return redirect()->back();
    }
}
