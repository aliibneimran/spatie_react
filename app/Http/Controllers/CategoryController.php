<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
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
        return Inertia::render('Categories/Index', compact('categories'));
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
        $filename = $request->image;
        if ($request->hasFile('image')) {
            $filename = time() . '.' . $request->image->extension();
            $request->image->move('images/cat', $filename);
        }

        // Create new category instance
        $category = new Category();
        $category->cat_name = $request->cat_name;
        $category->image = $filename ?? null; // Assign image path if it exists
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
        return Inertia::render('Categories/Edit', compact('category'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Category $category)
    {
        dd($request->all());
        // Validate incoming request data
        // $request->validate([
        //     'cat_name' => 'required|string|min:3',
        //     'image' => 'nullable|image|mimes:jpeg,png,jpg|max:2048', // Example validation for image upload
        // ]);

        // Handle file upload if an image is provided
        if ($request->hasFile('image')) {
            $filename = time() . '.' . $request->image->getClientOriginalExtension();
            $request->image->move('images/cat', $filename);

            // Delete previous image if exists and update with new one
            // Assuming you have an 'image' field in your 'Category' model
            if ($category->image) {
                // Delete old image file if it exists
                Storage::delete('images/cat/' . $category->image);
            }

            // Update category data including the new image path
            $category->update([
                'cat_name' => $request->cat_name,
                'image' => $filename,
                'status' => $request->status ?? 1,
            ]);
        } else {
            // No new image uploaded, update only other fields
            $category->update([
                'cat_name' => $request->cat_name,
                'status' => $request->status ?? 1,
            ]);
        }

        return redirect()->route('category.index')->with('success', 'Category updated successfully.');
    }

    // public function update(Request $request, Category $category)
    // {

    //     // dd($request->all());
    //     // Validate the incoming request
    //     $request->validate([
    //         'cat_name' => 'string|min:3',
    //         'image' => 'image|mimes:jpeg,png,jpg|max:2048', // Example validation for image upload
    //     ]);

    //      // Handle file upload if an image is provided
    //      if ($request->hasFile('image')) {
    //         $filename = time() . '.' . $request->image->getClientOriginalExtension();
    //         $request->image->move('images/cat', $filename);
    //     } else {
    //         $filename = $category->image; // If no new image uploaded, retain the existing one
    //     }

    //     // $filename = $request->image;
    //     // if ($request->hasFile('image')) {
    //     //     $filename = time() . '.' . $request->image->extension();
    //     //     $request->image->move('images/cat', $filename);
    //     // }
    //     // else {
    //     //     $filename = 'uploads/default_image.jpg';
    //     // }
    //     $data = [
    //         'cat_name' => $request->cat_name,
    //         'image' => $filename,
    //     ];
    //     // Save the updated category

    //     $category->update($data);

    //     return redirect()->route('category.index')->with('success', 'Category updated successfully.');
    // }

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
        return Inertia::render('Categories/Trash', compact('category'));
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
