<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;

class EventController extends Controller
{
    // Return all events
    public function index()
    {
        // Include club info if needed
        $events = Event::with('club')->get();

        return response()->json($events);
    }

    // Return a single event by ID
    public function show($id)
    {
        $event = Event::with('club')->find($id);
        if ($event) {
            return response()->json($event);
        }
        return response()->json(['message' => 'Event not found'], 404);
    }
}
