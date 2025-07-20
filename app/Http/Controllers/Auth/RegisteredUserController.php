<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
  public function store(Request $request): RedirectResponse
{
    $request->validate([
        'firstname' => 'required|string|max:255',
        'lastname' => 'required|string|max:255',
        'phone' => [
            'required',
            'string',
            'regex:/^09\d{9}$/',
            'unique:' . User::class,
        ],
        'region' => 'required|string|max:255',
        'province' => 'required|string|max:255',
        'city' => 'required|string|max:255',
        'barangay' => 'required|string|max:255',
        'age' => 'required|integer|min:0|max:120',
        'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
        'password' => ['required', 'confirmed', \Illuminate\Validation\Rules\Password::defaults()],
    ]);

    $user = User::create([
        'firstname' => $request->firstname,
        'lastname' => $request->lastname,
        'phone' => $request->phone,
        'region' => $request->region,
        'province' => $request->province,
        'city' => $request->city,
        'barangay' => $request->barangay,
        'age' => $request->age,
        'email' => $request->email,
        'password' => \Illuminate\Support\Facades\Hash::make($request->password),
    ]);

    event(new \Illuminate\Auth\Events\Registered($user));

    \Illuminate\Support\Facades\Auth::login($user);

    return redirect()->intended(route('dashboard'));
}

 
public function checkEmail(Request $request)
{
    $email = $request->query('email');

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        return response()->json(['exists' => false], 400); 
    }

    $exists = User::where('email', $email)->exists();

    return response()->json(['exists' => $exists]);
}

}
