<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Spatie\Permission\Models\Permission;
use HasRoles;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Rules\MatchOldPassword;
use Illuminate\Support\Facades\Log;

class HomeController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function userData()
    {
        // $user = auth()->user();
        // $type = auth()->user()->type;
        // if (!$user) {
        //     return response()->json(['error' => 'Unauthorized'], 401);
        // }
        // $haspermissions = DB::table('role_has_permissions')
        // ->join('model_has_roles', 'role_has_permissions.role_id', '=', 'model_has_roles.role_id')
        // ->join('permissions', 'role_has_permissions.permission_id', '=', 'permissions.id')
        // ->where('model_has_roles.model_id', $user->id)
        // // ->where('model_has_roles.model_id', 2)
        // ->where('model_has_roles.model_type', 'App\\Models\\User')
        // ->select('permissions.*')
        // ->get();
        // Fetch user's permissions using Spatie methods
        // $permissions = $user->permissions;
        $haspermissions = DB::table('role_has_permissions')->get();

        return response()->json($haspermissions);
        // if ( $type === 1 ) {
        //     return Inertia::render('Admin', $permissions);
        // }
    }

    public function index()
    {
        $user = auth()->user();
        $data['user'] = $user;
        $type = auth()->user()->type;

        // Example: Set session data
        session()->put('key', 'value');

        // Fetch notifications using Eloquent
        $data['notifications'] = DB::table('notifications')->get();

        // Fetch user's permissions using raw SQL with joins
        $data['haspermissions'] = DB::table('role_has_permissions')
            ->join('model_has_roles', 'role_has_permissions.role_id', '=', 'model_has_roles.role_id')
            ->join('permissions', 'role_has_permissions.permission_id', '=', 'permissions.id')
            ->where('model_has_roles.model_id', $user->id)
            // ->where('model_has_roles.model_id', 2)
            ->where('model_has_roles.model_type', 'App\\Models\\User')
            ->select('permissions.*')
            ->get();
        // dd($data['haspermissions']);
        // Fetch unread and read notifications
        $data['unreadNotifications'] = $user->unreadNotifications;
        $data['readNotifications'] = $user->readNotifications;

        // Render view based on user type
        if ( $type === 0 ) {
            return Inertia::render('Dashboard', $data);
        }
        if ( $type === 1 ) {
            return Inertia::render('Admin', $data);
        }
        if ( $type === 2 ) {
            return Inertia::render('User', $data);
        }

    }
    public function profileUpdateShow()
    {
        $data['user'] = auth()->user();
        return Inertia::render('Profile/ProfileManage',$data);
    }
    public function profileUpdate(Request $request)
    {
        //validation rules

        $request->validate([
            'name' => 'required|min:4|string|max:255',
            // 'email'=>'required|email|string|max:255'
        ]);
        $user = Auth::user();
        $user->name = $request['name'];
        // $user->email = $request['email'];
        $user->save();

        return back()->with('success', 'Profile Updated');
    }

    // password change

    public function passwordChangeindex()
    {
        return view('profile.password-change');
    }

    public function passwordChangeStore(Request $request)
    {
        $request->validate([
            'current_password' => ['required', new MatchOldPassword],
            'new_password' => ['required'],
            'new_confirm_password' => ['same:new_password'],
        ]);

        User::find(auth()->user()->id)->update(['password' => Hash::make($request->new_password)]);

        // dd('Password chanzge successfully.');
        return back()->with('message', 'Password change successfully.');
    }

}
