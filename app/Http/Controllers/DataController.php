<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class DataController extends Controller
{
    /**
     * Display the data page.
     */
    public function index()
    {
        return Inertia::render('data');
    }
}