<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class LayananController extends Controller
{
    /**
     * Display the layanan page.
     */
    public function index()
    {
        return Inertia::render('layanan');
    }
}