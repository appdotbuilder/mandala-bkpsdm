import React from 'react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

interface Activity {
    id: number;
    title: string;
    date: string;
    location: string;
    status: 'direncanakan' | 'berlangsung' | 'selesai';
}

interface AssetLease {
    id: number;
    borrower_name: string;
    borrow_date: string;
    return_deadline: string;
    status: 'aktif' | 'dikembalikan' | 'terlambat';
    asset: {
        name: string;
    };
}

interface Stats {
    assets_count: number;
    activities_count: number;
    asset_leases_count: number;
}

interface Props {
    stats: Stats;
    activities: Activity[];
    assetLeases: AssetLease[];
    [key: string]: unknown;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

const getStatusBadge = (status: string) => {
    const baseClasses = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium";
    
    switch (status) {
        case 'direncanakan':
            return `${baseClasses} bg-yellow-100 text-yellow-800`;
        case 'berlangsung':
            return `${baseClasses} bg-blue-100 text-blue-800`;
        case 'selesai':
            return `${baseClasses} bg-green-100 text-green-800`;
        case 'aktif':
            return `${baseClasses} bg-blue-100 text-blue-800`;
        case 'dikembalikan':
            return `${baseClasses} bg-green-100 text-green-800`;
        case 'terlambat':
            return `${baseClasses} bg-red-100 text-red-800`;
        default:
            return `${baseClasses} bg-gray-100 text-gray-800`;
    }
};

export default function Dashboard({ stats, activities, assetLeases }: Props) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="space-y-6 p-6">
                {/* Image Carousel Placeholder */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg h-64 flex items-center justify-center text-white text-center">
                    <div>
                        <div className="text-6xl mb-4">🏛️</div>
                        <h2 className="text-2xl font-bold">Selamat Datang di MANDALA BKPSDM</h2>
                        <p className="text-lg opacity-90">Manajemen Data, Layanan dan Administrasi</p>
                    </div>
                </div>

                {/* Key Statistics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-500">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <div className="text-3xl">🏠</div>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-500">Total Aset</p>
                                <p className="text-2xl font-semibold text-gray-900">{stats.assets_count}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow border-l-4 border-green-500">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <div className="text-3xl">📅</div>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-500">Total Kegiatan</p>
                                <p className="text-2xl font-semibold text-gray-900">{stats.activities_count}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow border-l-4 border-purple-500">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <div className="text-3xl">📋</div>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-500">Peminjaman Aset</p>
                                <p className="text-2xl font-semibold text-gray-900">{stats.asset_leases_count}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Data Tables */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Kegiatan BKPSDM Table */}
                    <div className="bg-white rounded-lg shadow">
                        <div className="px-6 py-4 border-b border-gray-200">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-medium text-gray-900">📅 Kegiatan BKPSDM</h3>
                                <Link href="/activities">
                                    <Button variant="outline" size="sm">Lihat Semua</Button>
                                </Link>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Judul Kegiatan
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Tanggal
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Lokasi
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {activities.map((activity) => (
                                        <tr key={activity.id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {activity.title}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {new Date(activity.date).toLocaleDateString('id-ID')}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {activity.location}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={getStatusBadge(activity.status)}>
                                                    {activity.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Peminjaman Aset Table */}
                    <div className="bg-white rounded-lg shadow">
                        <div className="px-6 py-4 border-b border-gray-200">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-medium text-gray-900">📋 Peminjaman Aset</h3>
                                <Link href="/asset-leases">
                                    <Button variant="outline" size="sm">Lihat Semua</Button>
                                </Link>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Nama Aset
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Peminjam
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Tanggal Pinjam
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Batas Kembali
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {assetLeases.map((lease) => (
                                        <tr key={lease.id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {lease.asset.name}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {lease.borrower_name}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {new Date(lease.borrow_date).toLocaleDateString('id-ID')}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {new Date(lease.return_deadline).toLocaleDateString('id-ID')}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={getStatusBadge(lease.status)}>
                                                    {lease.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}