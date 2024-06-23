<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class SubChildCategory extends Model
{
    use HasFactory, SoftDeletes;
    protected $guarded  = [''];

    public function childcategory(){
        return $this->belongsTo(ChildCategory::class,'childcat_id');
    }
}
