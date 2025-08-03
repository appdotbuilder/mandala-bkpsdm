import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { 
    BarChart3, 
    BookOpen, 
    Database, 
    FileSpreadsheet, 
    HelpCircle, 
    Home, 
    LayoutGrid, 
    Settings, 
    Users, 
    Wrench 
} from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Home',
        href: '/',
        icon: Home,
    },
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: LayoutGrid,
    },
    {
        title: 'Data',
        href: '/data',
        icon: Database,
    },
    {
        title: 'Layanan',
        href: '/layanan',
        icon: Wrench,
    },
    {
        title: 'Laporan',
        href: '/laporan',
        icon: FileSpreadsheet,
    },
    {
        title: 'Bantuan',
        href: '/bantuan',
        icon: HelpCircle,
    },
];

const managementNavItems: NavItem[] = [
    {
        title: 'Aset',
        href: '/assets',
        icon: Settings,
    },
    {
        title: 'Peminjaman',
        href: '/asset-leases',
        icon: BarChart3,
    },
    {
        title: 'Pengguna',
        href: '/user-management',
        icon: Users,
    },
];

const footerNavItems: NavItem[] = [
    {
        title: 'Dokumentasi',
        href: '/bantuan',
        icon: BookOpen,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
                <NavMain items={managementNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <div className="px-2 py-2 text-xs text-muted-foreground border-t">
                    <div className="font-medium">Manajemen Data, Layanan dan Administrasi BKPSDM</div>
                    <div>© 2025 MANDALA BKPSDM. All rights reserved.</div>
                </div>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
