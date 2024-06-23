<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class PermissionController extends Controller
{
    function __construct()
    {
         $this->middleware('permission:permission-list|permission-create|permission-edit|permission-delete', ['only' => ['index','store']]);
         $this->middleware('permission:permission-create', ['only' => ['create','store']]);
         $this->middleware('permission:permission-edit', ['only' => ['edit','update']]);
         $this->middleware('permission:permission-delete', ['only' => ['destroy']]);
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $permissions = Permission::paginate(10); // Change 10 to the number of items per page you want
        return Inertia::render('Permissions/Index', [
            'permissions' => $permissions,
            'flash' => session()->get('flash') ?? []
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $roles = Role::get();
        return Inertia::render('Permissions/Create',compact('roles'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request->all());
        request()->validate([
            'name' => 'required|min:3',
        ]);

        $data = [];
        $data['name'] = $request->name;
        // $data['guard_name'] = $request->guard_name;
        $data['created_at'] = $request->created_at;
        $data['updated_at'] = $request->updated_at;

        Permission::create($data);

        return redirect()->route('permissions.index')
            ->with('success', 'Created successfully.');
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
        $permission = Permission::find($id);
        return Inertia::render('Permissions/Edit',compact('permission'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $permission = Permission::findOrFail($id);
        $permission->update($request->all());

        return redirect()->route('permissions.index')->with('success', 'Permission updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Permission $permission)
    {
        $permission->delete();
        return redirect()->route('permissions.index')
            ->with('success', ' Deleted successfully');
    }
    public function pertrash()
    {
        // $permissions = Permission::latest()->onlyTrashed()->paginate(15);
        $permissions = Permission::onlyTrashed()->latest()->paginate(15);
        // dd($permissions);
        return Inertia::render('Permissions/Trash', compact('permissions'));
    }

    public function restore($id)
    {
        $permission = Permission::onlyTrashed()->find($id);
        $permission->restore();
        return redirect()->route('permissions.index')->with('success', 'Data Restored Successfully');
        // $permission = Permission::onlyTrashed()->findOrFail($id);
        // $permission->restore();
        // return redirect()->route('permissions.index')->with('success', 'Data Restored Successfully');
    }

    public function delete($id)
    {
        $permission = Permission::onlyTrashed()->find($id);
        $permission->forceDelete();
        return redirect()->route('permissions.trash')->with('success', 'Data Deleted Successfully');
    }
}
