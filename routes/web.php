<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('Landing', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('page.landing');

Route::get('/shop', function () {
    return Inertia::render('Shop');
})->name('page.shop');

Route::get('/shopDetail', function () {
    return Inertia::render('ShopDetail');
})->name('page.shop.detail');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('page.contact');

Route::get('/cart', function () {
    return Inertia::render('Cart');
})->name('page.cart');

Route::get('/checkout', function () {
    return Inertia::render('Checkout');
})->name('page.checkout');

Route::get('/testimonial', function () {
    return Inertia::render('Testimonial');
})->name('page.testimonial');

// End of guest pages

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth'])->name('dashboard');    

Route::get('/User', function () {
    return Inertia::render('User');
})->middleware(['auth'])->name('page.user');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
