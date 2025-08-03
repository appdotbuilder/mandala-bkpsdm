<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreAssetLeaseRequest;
use App\Http\Requests\UpdateAssetLeaseRequest;
use App\Models\Asset;
use App\Models\AssetLease;
use Inertia\Inertia;

class AssetLeaseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $assetLeases = AssetLease::with(['asset', 'user'])
            ->latest()
            ->paginate(15);
        
        return Inertia::render('asset-leases/index', [
            'assetLeases' => $assetLeases
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $assets = Asset::where('status', 'tersedia')->get();
        
        return Inertia::render('asset-leases/create', [
            'assets' => $assets
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAssetLeaseRequest $request)
    {
        $assetLease = AssetLease::create(array_merge(
            $request->validated(),
            ['user_id' => auth()->id()]
        ));

        // Update asset status
        Asset::find($request->asset_id)->update(['status' => 'dipinjam']);

        return redirect()->route('asset-leases.index')
            ->with('success', 'Asset lease created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(AssetLease $assetLease)
    {
        $assetLease->load(['asset', 'user']);
        
        return Inertia::render('asset-leases/show', [
            'assetLease' => $assetLease
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(AssetLease $assetLease)
    {
        $assets = Asset::all();
        $assetLease->load(['asset', 'user']);
        
        return Inertia::render('asset-leases/edit', [
            'assetLease' => $assetLease,
            'assets' => $assets
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAssetLeaseRequest $request, AssetLease $assetLease)
    {
        $assetLease->update($request->validated());

        return redirect()->route('asset-leases.index')
            ->with('success', 'Asset lease updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(AssetLease $assetLease)
    {
        // Update asset status back to available
        $assetLease->asset()->update(['status' => 'tersedia']);
        
        $assetLease->delete();

        return redirect()->route('asset-leases.index')
            ->with('success', 'Asset lease deleted successfully.');
    }
}