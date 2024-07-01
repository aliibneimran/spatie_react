<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class TestController extends Controller
{
    public function index()
    {
        return Category::all();
        // return response()->json($item);
            // return response([
            //     'message' => ['These credentials do not match our records.']
            // ], 404);
    }

    public function store(Request $request)
    {
        $request->validate([
            'cat_name' => 'required|string',
            // Add other validation rules as needed
        ]);

        $category = Category::create([
            'cat_name' => $request->cat_name,
            // Add other fields as needed
        ]);

        return response()->json($category, 201);
    }

    public function show($id)
    {
        return Category::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $category = Category::findOrFail($id);

        $request->validate([
            'cat_name' => 'required|string',
            // Add other validation rules as needed
        ]);

        $category->update([
            'cat_name' => $request->cat_name,
            // Update other fields as needed
        ]);

        return response()->json($category, 200);
    }

    public function destroy($id)
    {
        $category = Category::findOrFail($id);
        $category->delete();

        return response()->json(null, 204);
    }
}
