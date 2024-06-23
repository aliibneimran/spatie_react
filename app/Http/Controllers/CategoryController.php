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
        $categories = Category::paginate(10);
        return Inertia::render('Categories/Index',compact('categories'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Categories/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validate the incoming request
        $request->validate([
            'cat_name' => 'required|string|min:3',
            'image' => 'nullable|image|mimes:jpeg,png,jpg|max:2048', // Example validation for image upload
        ]);

        // Initialize image path variable
        $imagePath = null;

        // Handle file upload if an image is provided
        if ($request->hasFile('image')) {
            $imageName = time() . '_' . $request->file('image')->getClientOriginalName();

            // Move the uploaded file to public/images/cat/ directory
            $request->file('image')->move(public_path('/images/cat/'), $imageName);

            // Set image path for database storage
            $imagePath = '/images/cat/' . $imageName;
        }

        // Create new category instance
        $category = new Category();
        $category->cat_name = $request->cat_name;
        $category->image = $imagePath ?? null; // Assign image path if it exists
        $category->status = $request->status ?? 1; // Default status if not provided
        $category->save();

        return redirect()->route('category.index')->with('success', 'Category created successfully.');
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
        return Inertia::render('Categories/Edit',compact('category'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Category $category)
    {

        // Validate the incoming request
        $request->validate([
            'cat_name' => 'required|min:3',
            'image' => 'nullable|image|mimes:jpeg,png,jpg|max:2048', // Example validation for image upload
        ]);

        $data = [];
        $data['cat_name'] = $request->cat_name;

        if ($request->file('image')) {
            $rand = rand(10, 100);
            $imageName = time() . $rand . '.' . $request->image->extension();
            $request->image->move(public_path('/images/cat/'), $imageName);
            $data['image'] = $imageName;
        } else {
            unset($data['image']);
        }

        // Save the updated category
        $category->update();

        return redirect()->route('category.index')->with('success', 'Category updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        $category->delete();
        return redirect()->route('category.index')
            ->with('success', ' Deleted successfully');
    }

    public function trash()
    {
        $category = Category::onlyTrashed()->latest()->paginate(10);
        return Inertia::render('Categories/Trash',compact('category'));
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
