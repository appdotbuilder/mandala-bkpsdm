import React from 'react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Layanan',
        href: '/layanan',
    },
];

export default function Layanan() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Layanan" />
            <div className="space-y-6 p-6">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">🛠️ Layanan BKPSDM</h1>
                    <p className="text-lg text-gray-600 mb-8">Service Desk untuk pengelolaan aset dan layanan administrasi</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Assets Data Service */}
                    <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-blue-500">
                        <div className="text-center mb-6">
                            <div className="text-6xl mb-4">🏠</div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Assets Data</h2>
                            <p className="text-gray-600">Kelola data aset BKPSDM secara komprehensif</p>
                        </div>
                        
                        <div className="space-y-4 mb-6">
                            <div className="flex items-center">
                                <div className="text-green-500 mr-3">✓</div>
                                <span>Tambah data aset baru</span>
                            </div>
                            <div className="flex items-center">
                                <div className="text-green-500 mr-3">✓</div>
                                <span>Edit informasi aset</span>
                            </div>
                            <div className="flex items-center">
                                <div className="text-green-500 mr-3">✓</div>
                                <span>Lihat detail lengkap aset</span>
                            </div>
                            <div className="flex items-center">
                                <div className="text-green-500 mr-3">✓</div>
                                <span>Monitor kondisi dan lokasi</span>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <Link href="/assets" className="block">
                                <Button className="w-full" size="lg">
                                    📋 Kelola Data Aset
                                </Button>
                            </Link>
                            <Link href="/assets/create" className="block">
                                <Button variant="outline" className="w-full" size="lg">
                                    ➕ Tambah Aset Baru
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Assets Leasing Service */}
                    <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-purple-500">
                        <div className="text-center mb-6">
                            <div className="text-6xl mb-4">📋</div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Assets Leasing</h2>
                            <p className="text-gray-600">Manajemen peminjaman dan tracking aset</p>
                        </div>
                        
                        <div className="space-y-4 mb-6">
                            <div className="flex items-center">
                                <div className="text-green-500 mr-3">✓</div>
                                <span>Buat permintaan peminjaman</span>
                            </div>
                            <div className="flex items-center">
                                <div className="text-green-500 mr-3">✓</div>
                                <span>Tracking ketersediaan aset</span>
                            </div>
                            <div className="flex items-center">
                                <div className="text-green-500 mr-3">✓</div>
                                <span>Monitor batas waktu pengembalian</span>
                            </div>
                            <div className="flex items-center">
                                <div className="text-green-500 mr-3">✓</div>
                                <span>Update status peminjaman</span>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <Link href="/asset-leases" className="block">
                                <Button className="w-full" size="lg">
                                    📊 Kelola Peminjaman
                                </Button>
                            </Link>
                            <Link href="/asset-leases/create" className="block">
                                <Button variant="outline" className="w-full" size="lg">
                                    📝 Buat Peminjaman Baru
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Additional Services */}
                <div className="bg-gray-50 rounded-lg p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">📞 Bantuan & Dukungan</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="text-3xl mb-2">📋</div>
                            <h4 className="font-semibold mb-2">Panduan Pengguna</h4>
                            <p className="text-sm text-gray-600">Akses panduan lengkap penggunaan sistem</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl mb-2">🎯</div>
                            <h4 className="font-semibold mb-2">Laporan Masalah</h4>
                            <p className="text-sm text-gray-600">Laporkan kendala atau bug yang ditemukan</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl mb-2">💬</div>
                            <h4 className="font-semibold mb-2">Kontak Admin</h4>
                            <p className="text-sm text-gray-600">Hubungi administrator untuk bantuan</p>
                        </div>
                    </div>
                    <div className="text-center mt-6">
                        <Link href="/bantuan">
                            <Button variant="outline">Pelajari Lebih Lanjut</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}