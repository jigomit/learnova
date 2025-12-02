<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Home
Route::get('/', fn() => Inertia::render('Home'))->name('home');

// About
Route::get('/about', fn() => Inertia::render('About'))->name('about');

// Programs
Route::get('/programs', fn() => Inertia::render('Programs/Index'))->name('programs.index');
Route::get('/programs/free-schooling', fn() => Inertia::render('Programs/FreeSchooling'))->name('programs.free-schooling');
Route::get('/programs/e-learning', fn() => Inertia::render('Programs/ELearning'))->name('programs.e-learning');
Route::get('/programs/scholarships', fn() => Inertia::render('Programs/Scholarships'))->name('programs.scholarships');

// Volunteer
Route::get('/volunteer', fn() => Inertia::render('Volunteer'))->name('volunteer');

// Contact
Route::get('/contact', fn() => Inertia::render('Contact'))->name('contact');

// Blog
Route::get('/blog', fn() => Inertia::render('Blog/Index'))->name('blog.index');
Route::get('/blog/{slug}', fn(string $slug) => Inertia::render('Blog/Show', ['slug' => $slug]))->name('blog.show');
