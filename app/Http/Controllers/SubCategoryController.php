<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Subcategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SubcategoryController extends Controller
{

    function __construct()
   {
       $this->middleware(['permission:subcategory-list|subcategory-create|subcategory-edit|subcategory-delete'], ['only' => ['index', 'show']]);
       $this->middleware(['permission:subcategory-create'], ['only' => ['create', 'store']]);
       $this->middleware(['permission:subcategory-edit'], ['only' => ['edit', 'update']]);
       $this->middleware(['permission:subcategory-delete'], ['only' => ['destroy']]);
   }


    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data['user'] = auth()->user();
        $data['subcats'] = Subcategory::with('category')->paginate(10);
        return Inertia::render('SubCats/Index',$data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $data['user'] = auth()->user();
        $data['cats'] = Category::get();
        return Inertia::render('SubCats/Create', $data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        request()->validate([
            'sub_cat_name' => 'required',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:4096',
        ]);

        $data = [];
        $data['cat_id'] = $request->cat_id;
        $data['sub_cat_name'] = $request->sub_cat_name;

        if ($request->file('image')) {

            $rand = rand(10, 100);
            $imageName = time() . $rand . '.' . $request->image->extension();
            $request->image->move(public_path('/images/subcat/'), $imageName);
            $data['image'] = $imageName;
        } else {
            unset($data['image']);
        }

        Subcategory::create($data);

        return redirect()->route('subcategory.index')
            ->withInput()->with('success', 'Created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Subcategory $subcategory)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Subcategory $subcategory)
    {
        $data['user'] = auth()->user();
        $data['cats'] = Category::get();
        $data['subcategory'] = $subcategory;
        return Inertia::render('SubCats/Edit',$data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Subcategory $subcategory)
    {
        // dd($request->all());
        request()->validate([
            'sub_cat_name' => 'required|min:3',
            'image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:4096',
        ]);

        $data = [];
        $data['cat_id'] = $request->cat_id;
        $data['sub_cat_name'] = $request->sub_cat_name;

        if ($request->file('image')) {
            $rand = rand(10, 100);
            $imageName = time() . $rand . '.' . $request->image->extension();
            $request->image->move(public_path('/images/subcat/'), $imageName);
            $data['image'] = $imageName;
        } else {
            unset($data['image']);
        }

        // dd($request->all());
        $subcategory->update($data);

        return redirect()->route('subcategory.index')
            ->withInput()->with('success', 'Updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Subcategory $subcategory)
    {
        $subcategory->delete();
        return redirect()->route('subcategory.index')
            ->with('success', ' Trashted successfully');
    }

    public function subtrash()
    {
        $data['user'] = auth()->user();
        $data['subcats'] = Subcategory::with('category')->latest()->onlyTrashed()->paginate(15);
        return Inertia::render('SubCats/Trash', $data);
    }

    public function restore($id)
    {
        $subcat = Subcategory::onlyTrashed()->find($id);
        $subcat->restore();
        return redirect()->route('subcategory.index')->with('success', 'Data Restored Successfully');
    }

    public function delete($id)
    {
        $subcat = Subcategory::onlyTrashed()->find($id);
        $subcat->forceDelete();
        return redirect()->route('subcategory.trash')->with('success', 'Data Deleted Successfully');
    }
}
