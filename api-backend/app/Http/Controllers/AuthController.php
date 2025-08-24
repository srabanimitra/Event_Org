<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function signup(Request $request)
{
    // Validate input
    $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|email|unique:users,email',
        'password' => 'required|string|min:6',
        'mobile' => 'nullable|string|max:15',
        'address' => 'nullable|string|max:255',
        'interests' => 'nullable|string',
    ]);

    // Create user
    $user = User::create([
        'name' => $request->name,
        'email' => $request->email,
        'password' => Hash::make($request->password),
        'mobile' => $request->mobile,
        'address' => $request->address,
        'interests' => $request->interests,
    ]);

    return response()->json([
        'message' => 'User registered successfully',
        'user' => $user
    ], 201);
}


    public function login(Request $request)
    {
        // Validate request
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);

        // Find user by email
        $user = User::where('email', $request->email)->first();

        if (!$user) {
            return response()->json([
                'message' => 'User not found'
            ], 404);
        }

        // Check password
        if (!Hash::check($request->password, $user->password)) {
            return response()->json([
                'message' => 'Incorrect password'
            ], 401);
        }

        // Login successful
        return response()->json([
            'message' => 'Login successful',
            'user' => $user
        ]);
    }
    public function getAllUsers()
{
    $users = User::all();
    return response()->json($users);
}

public function deleteUser($id)
{
    $user = User::find($id);

    if (!$user) {
        return response()->json(['message' => 'User not found'], 404);
    }

    $user->delete();

    return response()->json(['message' => 'User deleted successfully']);
}
public function updateProfile(Request $request, $id)
{
    $user = User::find($id);

    if (!$user) {
        return response()->json(['message' => 'User not found'], 404);
    }

    // Validate inputs
    $request->validate([
        'name' => 'required|string|max:255',
        'mobile' => 'nullable|string|max:15',
        'address' => 'nullable|string|max:255',
        'interests' => 'nullable|string',
    ]);

    $user->update([
        'name' => $request->name,
        'mobile' => $request->mobile,
        'address' => $request->address,
        'interests' => $request->interests,
    ]);

    return response()->json([
        'message' => 'Profile updated successfully',
        'user' => $user
    ]);
}


}
