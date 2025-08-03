import React from 'react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Bantuan',
        href: '/bantuan',
    },
];

export default function Bantuan() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Bantuan" />
            <div className="space-y-6 p-6">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">❓ Pusat Bantuan MANDALA BKPSDM</h1>
                    <p className="text-lg text-gray-600 mb-8">Temukan bantuan dan panduan penggunaan sistem</p>
                </div>

                {/* FAQ Section */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                        <span className="mr-2">🙋‍♀️</span> Pertanyaan yang Sering Diajukan (FAQ)
                    </h2>
                    
                    <div className="space-y-4">
                        <div className="border border-gray-200 rounded-lg p-4">
                            <h3 className="font-semibold text-gray-900 mb-2">Bagaimana cara login ke sistem?</h3>
                            <p className="text-gray-600 text-sm">
                                Gunakan NIP dan password yang telah diberikan oleh administrator. 
                                Pastikan NIP minimal 3 karakter. Jika lupa password, hubungi administrator sistem.
                            </p>
                        </div>
                        
                        <div className="border border-gray-200 rounded-lg p-4">
                            <h3 className="font-semibold text-gray-900 mb-2">Bagaimana cara menambah aset baru?</h3>
                            <p className="text-gray-600 text-sm">
                                Buka menu Layanan → Assets Data → Tambah Aset Baru. 
                                Isi semua informasi yang diperlukan seperti nama, kategori, kondisi, dan lokasi aset.
                            </p>
                        </div>
                        
                        <div className="border border-gray-200 rounded-lg p-4">
                            <h3 className="font-semibold text-gray-900 mb-2">Bagaimana cara membuat peminjaman aset?</h3>
                            <p className="text-gray-600 text-sm">
                                Pilih menu Layanan → Assets Leasing → Buat Peminjaman Baru. 
                                Pilih aset yang tersedia, isi nama peminjam, tanggal pinjam, dan batas pengembalian.
                            </p>
                        </div>

                        <div className="border border-gray-200 rounded-lg p-4">
                            <h3 className="font-semibold text-gray-900 mb-2">Bagaimana cara export laporan ke Excel?</h3>
                            <p className="text-gray-600 text-sm">
                                Buka menu Laporan, pilih jenis laporan yang diinginkan (Aset, Kegiatan, atau Peminjaman), 
                                kemudian klik tombol "Download Excel". File akan otomatis terunduh.
                            </p>
                        </div>
                    </div>
                </div>

                {/* User Guide */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                            <span className="mr-2">📖</span> Panduan Pengguna
                        </h3>
                        
                        <div className="space-y-3">
                            <div className="flex items-start">
                                <div className="text-blue-500 mr-3 mt-1">1.</div>
                                <div>
                                    <h4 className="font-medium">Login ke Sistem</h4>
                                    <p className="text-sm text-gray-600">Masukkan NIP dan password</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="text-blue-500 mr-3 mt-1">2.</div>
                                <div>
                                    <h4 className="font-medium">Navigasi Dashboard</h4>
                                    <p className="text-sm text-gray-600">Lihat statistik dan tabel data</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="text-blue-500 mr-3 mt-1">3.</div>
                                <div>
                                    <h4 className="font-medium">Kelola Data</h4>
                                    <p className="text-sm text-gray-600">Tambah, edit, atau hapus data</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="text-blue-500 mr-3 mt-1">4.</div>
                                <div>
                                    <h4 className="font-medium">Export Laporan</h4>
                                    <p className="text-sm text-gray-600">Download data dalam format Excel</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                            <span className="mr-2">🔐</span> Level Pengguna
                        </h3>
                        
                        <div className="space-y-4">
                            <div className="border-l-4 border-red-500 pl-4">
                                <h4 className="font-medium text-red-700">Superadmin</h4>
                                <p className="text-sm text-gray-600">
                                    Akses penuh ke semua fitur termasuk manajemen pengguna
                                </p>
                            </div>
                            
                            <div className="border-l-4 border-orange-500 pl-4">
                                <h4 className="font-medium text-orange-700">Manager</h4>
                                <p className="text-sm text-gray-600">
                                    Dapat mengelola aset, peminjaman, dan melihat laporan
                                </p>
                            </div>
                            
                            <div className="border-l-4 border-blue-500 pl-4">
                                <h4 className="font-medium text-blue-700">User</h4>
                                <p className="text-sm text-gray-600">
                                    Akses terbatas untuk melihat dan membuat peminjaman
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Support */}
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
                    <div className="text-center">
                        <div className="text-4xl mb-4">💬</div>
                        <h3 className="text-xl font-bold mb-2">Butuh Bantuan Lebih Lanjut?</h3>
                        <p className="mb-6">
                            Tim support kami siap membantu Anda menyelesaikan masalah teknis atau pertanyaan terkait sistem
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-white/10 rounded-lg p-4">
                                <div className="text-2xl mb-2">📧</div>
                                <h4 className="font-medium">Email Support</h4>
                                <p className="text-sm opacity-90">support@bkpsdm.go.id</p>
                            </div>
                            
                            <div className="bg-white/10 rounded-lg p-4">
                                <div className="text-2xl mb-2">📞</div>
                                <h4 className="font-medium">Telepon</h4>
                                <p className="text-sm opacity-90">(021) 1234-5678</p>
                            </div>
                            
                            <div className="bg-white/10 rounded-lg p-4">
                                <div className="text-2xl mb-2">🕒</div>
                                <h4 className="font-medium">Jam Operasional</h4>
                                <p className="text-sm opacity-90">08:00 - 17:00 WIB</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Technical Requirements */}
                <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">⚙️ Persyaratan Teknis</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-medium text-gray-800 mb-2">Browser yang Didukung</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Google Chrome (Recommended)</li>
                                <li>• Mozilla Firefox</li>
                                <li>• Microsoft Edge</li>
                                <li>• Safari (macOS)</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-medium text-gray-800 mb-2">Persyaratan Sistem</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Koneksi internet stabil</li>
                                <li>• JavaScript diaktifkan</li>
                                <li>• Resolusi minimal 1024x768</li>
                                <li>• Cookie diizinkan</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}