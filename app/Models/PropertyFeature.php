<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PropertyFeature extends Model
{
    use HasFactory;

    protected $fillable = [
        'property_id',
        'feature_name',
        'feature_value',
    ];

    // Define the relationship with the Property model
    public function property()
    {
        return $this->belongsTo(Property::class);
    }
}
