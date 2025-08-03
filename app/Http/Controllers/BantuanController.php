<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class BantuanController extends Controller
{
    /**
     * Display the bantuan page.
     */
    public function index()
    {
        return Inertia::render('bantuan');
    }
}