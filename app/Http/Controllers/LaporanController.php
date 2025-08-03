<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Activity;
use App\Models\Asset;
use App\Models\AssetLease;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LaporanController extends Controller
{
    /**
     * Display the laporan page.
     */
    public function index()
    {
        return Inertia::render('laporan');
    }

    /**
     * Export data to CSV.
     */
    public function store(Request $request)
    {
        $type = $request->get('type', 'assets');
        
        $data = [];
        $filename = 'export.csv';
        
        switch ($type) {
            case 'activities':
                $data = [['Judul Kegiatan', 'Tanggal', 'Lokasi', 'Status']];
                $activities = Activity::all();
                foreach ($activities as $activity) {
                    $data[] = [
                        $activity->title,
                        $activity->date->format('Y-m-d'),
                        $activity->location,
                        $activity->status,
                    ];
                }
                $filename = 'kegiatan-bkpsdm.csv';
                break;
                
            case 'asset_leases':
                $data = [['Nama Aset', 'Peminjam', 'Tanggal Pinjam', 'Batas Kembali', 'Status']];
                $assetLeases = AssetLease::with('asset')->get();
                foreach ($assetLeases as $lease) {
                    $data[] = [
                        $lease->asset->name,
                        $lease->borrower_name,
                        $lease->borrow_date->format('Y-m-d'),
                        $lease->return_deadline->format('Y-m-d'),
                        $lease->status,
                    ];
                }
                $filename = 'peminjaman-aset.csv';
                break;
                
            default:
                $data = [['Nama Aset', 'Kategori', 'Kondisi', 'Harga Beli', 'Lokasi', 'Status']];
                $assets = Asset::all();
                foreach ($assets as $asset) {
                    $data[] = [
                        $asset->name,
                        $asset->category,
                        $asset->condition,
                        $asset->purchase_price,
                        $asset->location,
                        $asset->status,
                    ];
                }
                $filename = 'data-aset.csv';
                break;
        }
        
        return response()->streamDownload(function() use ($data) {
            $handle = fopen('php://output', 'w');
            foreach ($data as $row) {
                fputcsv($handle, $row);
            }
            fclose($handle);
        }, $filename, [
            'Content-Type' => 'text/csv',
        ]);
    }
}