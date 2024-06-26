<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Spatie\Permission\Models\Permission;

class HomeController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function index()
    {
        $user = auth()->user();
        // dd($user);
        $permission = Permission::get();

        if ($user->type === 0) {
            return Inertia::render('Dashboard',compact('user','permission'));
        }
        if ($user->type === 1) {
            return Inertia::render('Admin',compact('user','permission'));
        }

    }
    public function PassData()
    {
        // $user = auth()->user();
        // $notifications = DB::select('select * from notifications');
        // return Inertia::render('Constant/Global',compact('user','notifications'));
        Inertia::share('user', auth()->user());
        Inertia::share('notifications', DB::select('select * from notifications'));

        // Render your Inertia view
        return Inertia::render('Constant/Global');

    }

}
