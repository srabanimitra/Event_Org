<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Admin;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    public function login(Request $request)
    {
        $admin = Admin::where('register_id', $request->register_id)->first();

        if ($admin && Hash::check($request->password, $admin->password)) {
            return response()->json(['success' => true, 'message' => 'Login successful']);
        }

        return response()->json(['success' => false, 'message' => 'Invalid credentials']);
    }
}
