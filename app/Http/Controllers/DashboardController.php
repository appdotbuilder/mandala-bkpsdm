<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Activity;
use App\Models\Asset;
use App\Models\AssetLease;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Display the dashboard.
     */
    public function index()
    {
        $stats = [
            'assets_count' => Asset::count(),
            'activities_count' => Activity::count(),
            'asset_leases_count' => AssetLease::count(),
        ];

        $activities = Activity::with([])
            ->latest('date')
            ->limit(10)
            ->get();

        $assetLeases = AssetLease::with(['asset', 'user'])
            ->latest()
            ->limit(10)
            ->get();

        return Inertia::render('dashboard', [
            'stats' => $stats,
            'activities' => $activities,
            'assetLeases' => $assetLeases,
        ]);
    }
}