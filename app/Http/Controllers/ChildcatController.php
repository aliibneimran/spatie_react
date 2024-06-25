<?php

namespace App\Http\Controllers;

use App\Models\Childcat;
use App\Models\Subcategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ChildcatController extends Controller
{

    function __construct()
    {
        $this->middleware(['permission:childcat-list|childcat-create|childcat-edit|childcat-delete'], ['only' => ['index', 'show']]);
        $this->middleware(['permission:childcat-create'], ['only' => ['create', 'store']]);
        $this->middleware(['permission:childcat-edit'], ['only' => ['edit', 'update']]);
        $this->middleware(['permission:childcat-delete'], ['only' => ['destroy']]);
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $childcats = Childcat::with('subcategory')->paginate(10);
        return Inertia::render('ChildCats/Index',compact('childcats'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $subcats = Subcategory::get();
        return Inertia::render('ChildCats/Create',compact('subcats'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        request()->validate([
            'child_cat_name' => 'required',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:4096',
        ]);

        $data = [];
        $data['subcat_id'] = $request->subcat_id;
        $data['child_cat_name'] = $request->child_cat_name;

        if ($request->file('image')) {

            $rand = rand(10, 100);
            $imageName = time() . $rand . '.' . $request->image->extension();
            $request->image->move(public_path('/images/childcat/'), $imageName);
            $data['image'] = $imageName;
        } else {
            unset($data['image']);
        }

        Childcat::create($data);

        return redirect()->route('childcat.index')
            ->withInput()->with('success', 'Created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Childcat $childcat)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Childcat $childcat)
    {
        $subcats = Subcategory::get();
        return Inertia::render('ChildCats/Edit',compact('childcat','subcats'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Childcat $childcat)
    {
        $request->validate([
            'child_cat_name' => 'required|min:3',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:4096',
        ]);

        $data = [
            'subcat_id' => $request->subcat_id,
            'child_cat_name' => $request->child_cat_name,
        ];

        if ($request->file('image')) {
            $rand = rand(10, 100);
            $imageName = time() . $rand . '.' . $request->image->extension();
            $request->image->move(public_path('/images/childcat/'), $imageName);
            $data['image'] = $imageName;
        } else {
            $data['image'] = $childcat->image; // Retain the existing image if no new image is uploaded
        }

        $childcat->update($data);

        return redirect()->route('childcat.index')
            ->with('success', 'Updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Childcat $childcat)
    {
        $childcat->delete();
        return redirect()->route('childcat.index')
            ->with('success', ' Deleted successfully');
    }

    public function childtrash()
    {
        $childcats = Childcat::with('subcategory')->latest()->onlyTrashed()->paginate(15);
        return Inertia::render('ChildCats/Trash',compact('childcats'));
    }

    public function restore($id)
    {
        $childcat = Childcat::onlyTrashed()->find($id);
        $childcat->restore();
        return redirect()->route('childcat.index')->with('success', 'Data Restored Successfully');
    }

    public function delete($id)
    {
        $childcat = Childcat::onlyTrashed()->find($id);
        $childcat->forceDelete();
        return redirect()->route('childcat.trash')->with('success', 'Data Deleted Successfully');
    }
}
