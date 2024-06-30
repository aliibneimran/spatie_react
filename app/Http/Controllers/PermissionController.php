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
        $data['user'] = auth()->user();
        $data['permissions'] = Permission::paginate(10); // Change 10 to the number of items per page you want
        return Inertia::render('Permissions/Index', $data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $data['user'] = auth()->user();
        $data['roles'] = Role::get();
        return Inertia::render('Permissions/Create',$data);
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

        return redirect()->route('permissions.index')->with('success', 'Created successfully.');
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
        $data['user'] = auth()->user();
        $data['permission'] = Permission::find($id);
        return Inertia::render('Permissions/Edit',$data);
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

        return redirect()->route('permissions.index')->with('success', 'Data updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Permission $permission)
    {
        $permission->delete();
        return redirect()->route('permissions.index')
            ->with('success', ' Trashted successfully');
    }
    public function pertrash()
    {
        $data['user'] = auth()->user();
        $data['permissions'] = Permission::latest()->onlyTrashed()->paginate(10);
        return Inertia::render('Permissions/Trash', $data);
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
