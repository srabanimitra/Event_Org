<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    protected $fillable = [
        'club_id',
        'title',
        'description',
        'location',
        'datetime',
        'attendees',
    ];

    // Optional: to fetch club info with the event
    public function club() {
        return $this->belongsTo(Club::class);
    }
}
