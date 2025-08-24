<?php

// app/Http/Controllers/ParticipantController.php
namespace App\Http\Controllers;

use App\Models\Participant;
use Illuminate\Http\Request;

class ParticipantController extends Controller {
    public function store(Request $request) {
        $validated = $request->validate([
            'event_id' => 'required|exists:events,id',
            'name' => 'required|string',
            'email' => 'required|email'
        ]);

        $participant = Participant::create($validated);
        return response()->json($participant, 201);
    }

    public function index($eventId) {
        return Participant::where('event_id', $eventId)->get();
    }
}
