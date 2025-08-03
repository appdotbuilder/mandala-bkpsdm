import React from 'react';
import { Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { AppShell } from '@/components/app-shell';

interface Props {
    canLogin: boolean;
    canRegister: boolean;
    [key: string]: unknown;
}

export default function Welcome({ canLogin }: Props) {
    return (
        <AppShell>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
                {/* Hero Section */}
                <div className="relative overflow-hidden">
                    <div className="max-w-7xl mx-auto">
                        <div className="relative z-10 pb-8 bg-gradient-to-r from-blue-600 to-indigo-700 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                                <div className="sm:text-center lg:text-left">
                                    <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                                        <span className="block">🏛️ MANDALA</span>
                                        <span className="block text-blue-200">BKPSDM</span>
                                    </h1>
                                    <p className="mt-3 text-base text-blue-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                        Manajemen Data, Layanan dan Administrasi BKPSDM
                                    </p>
                                    <p className="mt-2 text-sm text-blue-200">
                                        Sistem informasi terintegrasi untuk pengelolaan aset, kegiatan, dan layanan BKPSDM
                                    </p>
                                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                        <div className="rounded-md shadow">
                                            {canLogin && (
                                                <Link href="/login">
                                                    <Button size="lg" className="w-full bg-white text-blue-600 hover:bg-blue-50">
                                                        🔐 Login
                                                    </Button>
                                                </Link>
                                            )}
                                        </div>
                                        <div className="mt-3 sm:mt-0 sm:ml-3">
                                            <Link href="/dashboard">
                                                <Button variant="outline" size="lg" className="w-full border-white text-white hover:bg-white hover:text-blue-600">
                                                    📊 Dashboard
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                        <div className="h-56 w-full bg-gradient-to-br from-indigo-500 to-purple-600 sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center">
                            <div className="text-center text-white">
                                <div className="text-8xl mb-4">🏢</div>
                                <h3 className="text-2xl font-bold">Sistem Terintegrasi</h3>
                                <p className="text-lg">BKPSDM Digital</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div className="py-12 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="lg:text-center">
                            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Fitur Utama</h2>
                            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                Kelola Semua dalam Satu Platform
                            </p>
                        </div>

                        <div className="mt-10">
                            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                                <div className="relative">
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                                        📊
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Dashboard Komprehensif</p>
                                    <dd className="mt-2 ml-16 text-base text-gray-500">
                                        Pantau statistik aset, kegiatan BKPSDM, dan peminjaman dalam satu tampilan
                                    </dd>
                                </div>

                                <div className="relative">
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                                        🏠
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Manajemen Aset</p>
                                    <dd className="mt-2 ml-16 text-base text-gray-500">
                                        Kelola data aset, kondisi, lokasi dan status ketersediaan secara real-time
                                    </dd>
                                </div>

                                <div className="relative">
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                                        📋
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Peminjaman Aset</p>
                                    <dd className="mt-2 ml-16 text-base text-gray-500">
                                        Sistem peminjaman aset dengan tracking waktu dan status pengembalian
                                    </dd>
                                </div>

                                <div className="relative">
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                                        📈
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Laporan & Export</p>
                                    <dd className="mt-2 ml-16 text-base text-gray-500">
                                        Generate laporan dalam format Excel untuk analisis dan dokumentasi
                                    </dd>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="bg-blue-600">
                    <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                                Dipercaya untuk Digitalisasi BKPSDM
                            </h2>
                            <p className="mt-3 text-xl text-blue-200 sm:mt-4">
                                Platform terintegrasi untuk efisiensi operasional
                            </p>
                        </div>

                        <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
                            <div className="flex flex-col">
                                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-blue-200">
                                    Level Akses
                                </dt>
                                <dd className="order-1 text-5xl font-extrabold text-white">3</dd>
                            </div>
                            <div className="flex flex-col mt-10 sm:mt-0">
                                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-blue-200">
                                    Modul Layanan
                                </dt>
                                <dd className="order-1 text-5xl font-extrabold text-white">5+</dd>
                            </div>
                            <div className="flex flex-col mt-10 sm:mt-0">
                                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-blue-200">
                                    Real-time Data
                                </dt>
                                <dd className="order-1 text-5xl font-extrabold text-white">24/7</dd>
                            </div>
                        </dl>
                    </div>
                </div>

                {/* Footer */}
                <footer className="bg-gray-800">
                    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                        <div className="text-center">
                            <p className="text-base text-gray-400">
                                © 2025 Manajemen Data, Layanan dan Administrasi BKPSDM. All rights reserved.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </AppShell>
    );
}