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
        $data['user'] = auth()->user();
        // dd($user);
        $data['permissions'] = Permission::all();
        $data['notifications'] = DB::select('select * from notifications');

        if ($data['user']->type === 0) {
            return Inertia::render('Dashboard',$data);
        }
        if ($data['user']->type === 1) {
            return Inertia::render('Admin',$data);
        }

    }

}
