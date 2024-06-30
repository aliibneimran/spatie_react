<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    function __construct()
    {
        $this->middleware(['permission:category-list'], ['only' => ['index', 'show']]);
        $this->middleware(['permission:category-create'], ['only' => ['create', 'store']]);
        $this->middleware(['permission:category-edit'], ['only' => ['edit', 'update']]);
        $this->middleware(['permission:category-delete'], ['only' => ['destroy']]);
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data['user'] = auth()->user();
        $data['categories'] = Category::paginate(10);
        return Inertia::render('Categories/Index', $data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $data['user'] = auth()->user();
        return Inertia::render('Categories/Create',$data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request->all());
        // Validate the incoming request
        $request->validate([
            'cat_name' => 'required|string|min:3',
            'image' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
        ]);
        $data = [
            'cat_name' => $request->cat_name,
        ];

        if ($request->hasFile('image')) {
            $filename = time() . '.' . $request->image->extension();
            $request->image->move('images/cat', $filename);
            $data['image'] = $filename;
        }

        Category::create($data);

        return redirect()->route('category.index')->with('success', 'Data created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Category $category)
    {
        $data['user'] = auth()->user();
        $data['category'] = $category;
        return Inertia::render('Categories/Edit', $data);
    }

    /**
     * Update the specified resource in storage.
     */

    public function update(Request $request, Category $category)
    {
        // dd($request->all());
        // Validate the incoming request
        $request->validate([
            'cat_name' => 'required|string|min:3',
            'image' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
        ]);
        $data = [
            'cat_name' => $request->cat_name,
        ];
        if ($request->hasFile('image')) {
            $filename = time() . '.' . $request->image->extension();
            $request->image->move('images/cat', $filename);
            $data['image'] = $filename;
        }

        $category->update($data);

        return redirect()->route('category.index')->with('success', 'Data Updated successfully.');
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        $category->delete();
        return redirect()->route('category.index')
            ->with('success', ' Data Trashted successfully');
    }

    public function trash()
    {
        $data['user'] = auth()->user();
        $data['category'] = Category::onlyTrashed()->latest()->paginate(10);
        return Inertia::render('Categories/Trash', $data);
    }

    public function restore($id)
    {
        $category = Category::onlyTrashed()->find($id);
        $category->restore();
        return redirect()->route('category.index')->with('success', 'Data Restored Successfully');
    }

    public function delete($id)
    {
        $category = Category::onlyTrashed()->find($id);
        $category->forceDelete();
        return redirect()->route('category.trash')->with('success', 'Data Deleted Successfully');
    }
}
