<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Subcategory extends Model
{
    use HasFactory, SoftDeletes;

    protected $guarded  = [''];

    public function category(){
        return $this->belongsTo(Category::class,'cat_id');
    }
    public function childcat(){
        return $this->hasMany(Childcat::class,'subcat_id');
    }
}
