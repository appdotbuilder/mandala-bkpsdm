import React from 'react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Laporan',
        href: '/laporan',
    },
];

const handleExport = (type: string) => {
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = '/laporan/export';
    
    const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
    if (csrfToken) {
        const csrfInput = document.createElement('input');
        csrfInput.type = 'hidden';
        csrfInput.name = '_token';
        csrfInput.value = csrfToken;
        form.appendChild(csrfInput);
    }
    
    const typeInput = document.createElement('input');
    typeInput.type = 'hidden';
    typeInput.name = 'type';
    typeInput.value = type;
    form.appendChild(typeInput);
    
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
};

export default function Laporan() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Laporan" />
            <div className="space-y-6 p-6">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">📊 Laporan MANDALA BKPSDM</h1>
                    <p className="text-lg text-gray-600 mb-8">Export data dalam format Excel untuk analisis dan dokumentasi</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Assets Report */}
                    <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-blue-500">
                        <div className="text-center mb-6">
                            <div className="text-5xl mb-4">🏠</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Laporan Data Aset</h3>
                            <p className="text-gray-600">Export data lengkap aset BKPSDM</p>
                        </div>
                        
                        <div className="space-y-3 mb-6">
                            <div className="flex items-center justify-between text-sm">
                                <span>Nama Aset</span>
                                <span className="text-green-600">✓</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span>Kategori</span>
                                <span className="text-green-600">✓</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span>Kondisi</span>
                                <span className="text-green-600">✓</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span>Harga Beli</span>
                                <span className="text-green-600">✓</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span>Lokasi</span>
                                <span className="text-green-600">✓</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span>Status</span>
                                <span className="text-green-600">✓</span>
                            </div>
                        </div>

                        <Button 
                            className="w-full" 
                            onClick={() => handleExport('assets')}
                            size="lg"
                        >
                            📥 Download Excel
                        </Button>
                    </div>

                    {/* Activities Report */}
                    <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-green-500">
                        <div className="text-center mb-6">
                            <div className="text-5xl mb-4">📅</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Laporan Kegiatan BKPSDM</h3>
                            <p className="text-gray-600">Export data kegiatan dan aktivitas</p>
                        </div>
                        
                        <div className="space-y-3 mb-6">
                            <div className="flex items-center justify-between text-sm">
                                <span>Judul Kegiatan</span>
                                <span className="text-green-600">✓</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span>Tanggal</span>
                                <span className="text-green-600">✓</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span>Lokasi</span>
                                <span className="text-green-600">✓</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span>Status</span>
                                <span className="text-green-600">✓</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span>Deskripsi</span>
                                <span className="text-green-600">✓</span>
                            </div>
                        </div>

                        <Button 
                            className="w-full" 
                            onClick={() => handleExport('activities')}
                            size="lg"
                        >
                            📥 Download Excel
                        </Button>
                    </div>

                    {/* Asset Leases Report */}
                    <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-purple-500">
                        <div className="text-center mb-6">
                            <div className="text-5xl mb-4">📋</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Laporan Peminjaman Aset</h3>
                            <p className="text-gray-600">Export data peminjaman dan pengembalian</p>
                        </div>
                        
                        <div className="space-y-3 mb-6">
                            <div className="flex items-center justify-between text-sm">
                                <span>Nama Aset</span>
                                <span className="text-green-600">✓</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span>Peminjam</span>
                                <span className="text-green-600">✓</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span>Tanggal Pinjam</span>
                                <span className="text-green-600">✓</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span>Batas Kembali</span>
                                <span className="text-green-600">✓</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span>Status</span>
                                <span className="text-green-600">✓</span>
                            </div>
                        </div>

                        <Button 
                            className="w-full" 
                            onClick={() => handleExport('asset_leases')}
                            size="lg"
                        >
                            📥 Download Excel
                        </Button>
                    </div>
                </div>

                {/* Instructions */}
                <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-4">📋 Panduan Export Laporan</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-medium text-blue-800 mb-2">Format File</h4>
                            <ul className="text-sm text-blue-700 space-y-1">
                                <li>• Format: Microsoft Excel (.xlsx)</li>
                                <li>• Data real-time dari database</li>
                                <li>• Siap untuk analisis dan presentasi</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-medium text-blue-800 mb-2">Cara Menggunakan</h4>
                            <ul className="text-sm text-blue-700 space-y-1">
                                <li>• Pilih jenis laporan yang diinginkan</li>
                                <li>• Klik tombol "Download Excel"</li>
                                <li>• File akan otomatis terunduh</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Statistics */}
                <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">📈 Ringkasan Data</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div>
                            <div className="text-3xl font-bold text-blue-600">🏠</div>
                            <div className="text-sm text-gray-600 mt-2">Total Aset Terdaftar</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-green-600">📅</div>
                            <div className="text-sm text-gray-600 mt-2">Kegiatan Aktif</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-purple-600">📋</div>
                            <div className="text-sm text-gray-600 mt-2">Peminjaman Berlangsung</div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}