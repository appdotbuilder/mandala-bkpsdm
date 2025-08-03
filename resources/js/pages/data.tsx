import React from 'react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Data',
        href: '/data',
    },
];

export default function Data() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Data" />
            <div className="space-y-6 p-6">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">📊 Pusat Data BKPSDM</h1>
                    <p className="text-lg text-gray-600 mb-8">Akses dan kelola semua data sistem informasi BKPSDM</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Assets Data */}
                    <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-blue-500">
                        <div className="text-center mb-4">
                            <div className="text-4xl mb-3">🏠</div>
                            <h3 className="text-lg font-bold text-gray-900">Data Aset</h3>
                            <p className="text-sm text-gray-600">Inventaris dan informasi aset</p>
                        </div>
                        
                        <div className="space-y-2 mb-4">
                            <div className="flex justify-between text-sm">
                                <span>Total Aset:</span>
                                <span className="font-semibold">-</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span>Tersedia:</span>
                                <span className="text-green-600 font-semibold">-</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span>Dipinjam:</span>
                                <span className="text-orange-600 font-semibold">-</span>
                            </div>
                        </div>

                        <Link href="/assets">
                            <Button className="w-full" size="sm">
                                Lihat Data Aset
                            </Button>
                        </Link>
                    </div>

                    {/* Activities Data */}
                    <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-green-500">
                        <div className="text-center mb-4">
                            <div className="text-4xl mb-3">📅</div>
                            <h3 className="text-lg font-bold text-gray-900">Data Kegiatan</h3>
                            <p className="text-sm text-gray-600">Aktivitas dan agenda BKPSDM</p>
                        </div>
                        
                        <div className="space-y-2 mb-4">
                            <div className="flex justify-between text-sm">
                                <span>Total Kegiatan:</span>
                                <span className="font-semibold">-</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span>Direncanakan:</span>
                                <span className="text-yellow-600 font-semibold">-</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span>Berlangsung:</span>
                                <span className="text-blue-600 font-semibold">-</span>
                            </div>
                        </div>

                        <Button className="w-full" size="sm" variant="outline">
                            Lihat Data Kegiatan
                        </Button>
                    </div>

                    {/* Users Data */}
                    <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-purple-500">
                        <div className="text-center mb-4">
                            <div className="text-4xl mb-3">👥</div>
                            <h3 className="text-lg font-bold text-gray-900">Data Pengguna</h3>
                            <p className="text-sm text-gray-600">Manajemen akun pengguna</p>
                        </div>
                        
                        <div className="space-y-2 mb-4">
                            <div className="flex justify-between text-sm">
                                <span>Total Pengguna:</span>
                                <span className="font-semibold">-</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span>Admin:</span>
                                <span className="text-red-600 font-semibold">-</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span>User:</span>
                                <span className="text-blue-600 font-semibold">-</span>
                            </div>
                        </div>

                        <Link href="/user-management">
                            <Button className="w-full" size="sm" variant="outline">
                                Kelola Pengguna
                            </Button>
                        </Link>
                    </div>

                    {/* Leases Data */}
                    <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-orange-500">
                        <div className="text-center mb-4">
                            <div className="text-4xl mb-3">📋</div>
                            <h3 className="text-lg font-bold text-gray-900">Data Peminjaman</h3>
                            <p className="text-sm text-gray-600">Riwayat peminjaman aset</p>
                        </div>
                        
                        <div className="space-y-2 mb-4">
                            <div className="flex justify-between text-sm">
                                <span>Total Peminjaman:</span>
                                <span className="font-semibold">-</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span>Aktif:</span>
                                <span className="text-blue-600 font-semibold">-</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span>Terlambat:</span>
                                <span className="text-red-600 font-semibold">-</span>
                            </div>
                        </div>

                        <Link href="/asset-leases">
                            <Button className="w-full" size="sm" variant="outline">
                                Lihat Peminjaman
                            </Button>
                        </Link>
                    </div>

                    {/* Reports Data */}
                    <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-indigo-500">
                        <div className="text-center mb-4">
                            <div className="text-4xl mb-3">📊</div>
                            <h3 className="text-lg font-bold text-gray-900">Laporan Data</h3>
                            <p className="text-sm text-gray-600">Export dan analisis data</p>
                        </div>
                        
                        <div className="space-y-2 mb-4">
                            <div className="flex justify-between text-sm">
                                <span>Format:</span>
                                <span className="font-semibold">Excel</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span>Jenis:</span>
                                <span className="text-blue-600 font-semibold">3 Tipe</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span>Update:</span>
                                <span className="text-green-600 font-semibold">Real-time</span>
                            </div>
                        </div>

                        <Link href="/laporan">
                            <Button className="w-full" size="sm" variant="outline">
                                Buat Laporan
                            </Button>
                        </Link>
                    </div>

                    {/* System Data */}
                    <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-red-500">
                        <div className="text-center mb-4">
                            <div className="text-4xl mb-3">⚙️</div>
                            <h3 className="text-lg font-bold text-gray-900">Data Sistem</h3>
                            <p className="text-sm text-gray-600">Konfigurasi dan pengaturan</p>
                        </div>
                        
                        <div className="space-y-2 mb-4">
                            <div className="flex justify-between text-sm">
                                <span>Status:</span>
                                <span className="text-green-600 font-semibold">Online</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span>Versi:</span>
                                <span className="font-semibold">1.0.0</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span>Database:</span>
                                <span className="text-blue-600 font-semibold">MySQL</span>
                            </div>
                        </div>

                        <Button className="w-full" size="sm" variant="outline" disabled>
                            Pengaturan Sistem
                        </Button>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">🚀 Aksi Cepat</h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <Link href="/assets/create">
                            <Button variant="outline" className="w-full">
                                ➕ Tambah Aset
                            </Button>
                        </Link>
                        <Link href="/asset-leases/create">
                            <Button variant="outline" className="w-full">
                                📝 Buat Peminjaman
                            </Button>
                        </Link>
                        <Link href="/laporan">
                            <Button variant="outline" className="w-full">
                                📊 Export Data
                            </Button>
                        </Link>
                        <Link href="/user-management/create">
                            <Button variant="outline" className="w-full">
                                👤 Tambah User
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Info Box */}
                <div className="bg-blue-50 rounded-lg p-6">
                    <div className="flex items-start">
                        <div className="text-blue-500 text-2xl mr-4">ℹ️</div>
                        <div>
                            <h4 className="font-semibold text-blue-900 mb-2">Informasi Data</h4>
                            <p className="text-blue-800 text-sm">
                                Semua data dalam sistem ini tersinkronisasi secara real-time. 
                                Perubahan yang dilakukan akan langsung tercermin di seluruh modul sistem. 
                                Untuk backup data atau export laporan, gunakan fitur yang tersedia di menu Laporan.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}