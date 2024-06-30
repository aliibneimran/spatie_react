<?php

namespace App\Http\Controllers;

use App\Models\Package;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PackageController extends Controller
{
    function __construct()
    {
        $this->middleware(['permission:package-list|package-create|package-edit|package-delete'], ['only' => ['index', 'show']]);
        $this->middleware(['permission:package-create'], ['only' => ['create', 'store']]);
        $this->middleware(['permission:package-edit'], ['only' => ['edit', 'update']]);
        $this->middleware(['permission:package-delete'], ['only' => ['destroy']]);
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data['user'] = auth()->user();
        $data['packages'] = Package::paginate(10);
        return Inertia::render('Packages/Index', $data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $data['user'] = auth()->user();
        return Inertia::render('Packages/Create',$data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        request()->validate([
            'package_name' => 'required|min:3',
            'package_price' => 'required|min:5',
            'purchase_date' => 'date_format:Y-m-d',
        ]);

        $data = [];
        $data['package_name'] = $request->package_name;
        $data['package_price'] = $request->package_price;
        $myDate = $request->purchase_date;
        $data['purchase_date'] = $myDate;
        $myDate2 = $request->expire_date;
        $data['expire_date'] = $myDate2;
        $data['package_duration'] = $request->package_duration;
        $user = auth()->user()->getAuthIdentifier();
        $data['package_entry_by'] =  $user;
        $data['package_updated_by'] =  $user ?? NULL;

        Package::create($data);

        return redirect()->route('package.index')
            ->withInput()->with('success', 'Created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Package $package)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Package $package)
    {
        $data['user'] = auth()->user();
        $data['package'] = $package;
        return Inertia::render('Packages/Edit',$data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Package $package)
    {
        request()->validate([
            'package_name' => 'required|min:3',
            'package_price' => 'required|min:5',
            'purchase_date' => 'date_format:Y-m-d',
        ]);

        $data = [
            'package_name' => $request->package_name,
            'package_price' => $request->package_price,
            'package_duration' => $request->package_duration,
            'purchase_date' => $request->purchase_date,
            'expire_date' => $request->expire_date,
            'package_entry_by' => auth()->user()->getAuthIdentifier(),
            'package_updated_by' => auth()->user()->getAuthIdentifier(),
        ];

        $package->update($data);

        return redirect()->route('package.index')
            ->withInput()->with('success', 'Data updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Package $package)
    {
        $package->delete();
        return redirect()->route('package.index')
            ->with('success', ' Data Trashted successfully');
    }

    public function pkgtrash()
    {
        $data['user'] = auth()->user();
        $data['packages'] = Package::latest()->onlyTrashed()->paginate(15);
        return Inertia::render('Packages/Trash',$data);
    }

    public function restore($id)
    {
        $package = Package::onlyTrashed()->find($id);
        $package->restore();
        return redirect()->route('package.index')->with('success', 'Data Restored Successfully');
    }

    public function delete($id)
    {
        $package = Package::onlyTrashed()->find($id);
        $package->forceDelete();
        return redirect()->route('package.trash')->with('success', 'Data Deleted Successfully');
    }
}
