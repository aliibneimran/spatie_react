<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Spatie\Permission\Models\Permission;
use HasRoles;
use Spatie\Permission\Models\Role;

class HomeController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function index()
    {
        $user = auth()->user();
        $data['user'] = $user;

        // Example: Set session data
        session()->put('key', 'value');

        // Fetch all permissions (if needed)
        $data['permissions'] = Permission::all();

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
        return Inertia::render('Dashboard', $data);

    }

}
