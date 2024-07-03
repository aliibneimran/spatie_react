<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleController extends Controller
{

    function __construct()
    {
         $this->middleware('permission:role-list|role-create|role-edit|role-delete', ['only' => ['index','store']]);
         $this->middleware('permission:role-create', ['only' => ['create','store']]);
         $this->middleware('permission:role-edit', ['only' => ['edit','update']]);
         $this->middleware('permission:role-delete', ['only' => ['destroy']]);
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data['user'] = auth()->user();
        $data['roles'] = Role::paginate(10);
        // $data['allpermissions'] = Permission::all();
        return Inertia::render('Roles/Index',$data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $data['user'] = auth()->user();
        $data['permissions'] = Permission::get();
        return Inertia::render('Roles/Create',$data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'permissions' => 'array',
            'permissions.*' => 'string|exists:permissions,name',
        ]);

        $role = Role::create(['name' => $request->name]);
        $permissions = Permission::whereIn('name', $request->permissions)->get();
        $role->permissions()->sync($permissions);

        return redirect()->route('roles.index')->with('success', 'Created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $user = auth()->user();
        $role = Role::findOrFail($id);
        $permissions = Permission::join("role_has_permissions","role_has_permissions.permission_id","=","permissions.id")
        ->where("role_has_permissions.role_id",$id)
        ->get();
        return Inertia::render('Roles/Show',compact('role','permissions','user'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $data['user'] = auth()->user();
        $data['role'] = Role::with('permissions')->findOrFail($id);
        $data['permissions'] = Permission::all();
        return Inertia::render('Roles/Edit', $data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $role = Role::findOrFail($id);

        $request->validate([
            'name' => 'required|string|max:255',
            'permissions' => 'array',
            'permissions.*' => 'string|exists:permissions,name',
        ]);

        $role->update(['name' => $request->name]);
        $permissions = Permission::whereIn('name', $request->permissions)->get();
        $role->permissions()->sync($permissions);

        return redirect()->route('roles.index')->with('success', 'Data updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Role::find($id)->delete();
        return redirect()->route('roles.index')
            ->with('success', 'Data Trashted successfully');
    }
    public function trash()
    {
        $data['user'] = auth()->user();
        $data['role'] = Role::latest()->onlyTrashed()->paginate(10);
        return Inertia::render('Roles/Trash', $data);
    }

    public function restore($id)
    {
        $role = Role::onlyTrashed()->find($id);
        $role->restore();
        return redirect()->route('roles.index')->with('success', 'Data Restored Successfully');
    }

    public function delete($id)
    {
        $role = Role::onlyTrashed()->find($id);
        $role->forceDelete();

        // $dataDelete = "role Deleted.";
        // role::find(Auth::role()->id)->notify(new NewNotification($dataDelete));

        return redirect()->route('roles.trash')->with('success', 'Data Deleted Successfully');
    }
}
