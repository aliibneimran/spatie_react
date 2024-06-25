<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
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

}
