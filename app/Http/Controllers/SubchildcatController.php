<?php

namespace App\Http\Controllers;

use App\Models\Subchildcat;
use App\Models\Childcat;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SubchildcatController extends Controller
{

    function __construct()
    {
        $this->middleware(['permission:subchildcat-list|subchildcat-create|subchildcat-edit|subchildcat-delete'], ['only' => ['index', 'show']]);
        $this->middleware(['permission:subchildcat-create'], ['only' => ['create', 'store']]);
        $this->middleware(['permission:subchildcat-edit'], ['only' => ['edit', 'update']]);
        $this->middleware(['permission:subchildcat-delete'], ['only' => ['destroy']]);
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data['user'] = auth()->user();
        $data['subchildcats'] = Subchildcat::with('childcategory')->paginate(10);
        return Inertia::render('SubChildCats/Index',$data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $data['user'] = auth()->user();
        $data['childcats'] = Childcat::get();
        return Inertia::render('SubChildCats/Create',$data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        request()->validate([
            'sub_child_cat_name' => 'required',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:4096',
        ]);

        $data = [];
        $data['childcat_id'] = $request->childcat_id;
        $data['sub_child_cat_name'] = $request->sub_child_cat_name;

        if ($request->file('image')) {

            $rand = rand(10, 100);
            $imageName = time() . $rand . '.' . $request->image->extension();
            $request->image->move(public_path('/images/subchildcat/'), $imageName);
            $data['image'] = $imageName;
        } else {
            unset($data['image']);
        }

        Subchildcat::create($data);

        return redirect()->route('subchildcat.index')
            ->withInput()->with('success', 'Created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Subchildcat $subchildcat)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Subchildcat $subchildcat)
    {
        $data['user'] = auth()->user();
        $data['childcats'] = Childcat::get();
        $data['subchildcat'] = $subchildcat;
        return Inertia::render('SubChildCats/Edit',$data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Subchildcat $subchildcat)
    {
        request()->validate([
            'sub_child_cat_name' => 'required|min:3',
            'image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:4096',
        ]);

        $data = [];
        $data['childcat_id'] = $request->childcat_id;
        $data['sub_child_cat_name'] = $request->sub_child_cat_name;

        if ($request->file('image')) {
            $rand = rand(10, 100);
            $imageName = time() . $rand . '.' . $request->image->extension();
            $request->image->move(public_path('/images/subchildcat/'), $imageName);
            $data['image'] = $imageName;
        } else {
            unset($data['image']);
        }

        $subchildcat->update($data);

        return redirect()->route('subchildcat.index')
            ->withInput()->with('success', 'Updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Subchildcat $subchildcat)
    {
        $subchildcat->delete();
        return redirect()->route('subchildcat.index')
            ->with('success', ' Trashted successfully');
    }

    public function subchildtrash()
    {
        $data['user'] = auth()->user();
        $data['subchildcats'] = Subchildcat::with('childcategory')->latest()->onlyTrashed()->paginate(15);
        return Inertia::render('SubChildCats/Trash',$data);
    }

    public function restore($id)
    {
        $subchildcat = Subchildcat::onlyTrashed()->find($id);
        $subchildcat->restore();
        return redirect()->route('subchildcat.index')->with('success', 'Data Restored Successfully');
    }

    public function delete($id)
    {
        $subchildcat = Subchildcat::onlyTrashed()->find($id);
        $subchildcat->forceDelete();
        return redirect()->route('subchildcat.trash')->with('success', 'Data Deleted Successfully');
    }
}
