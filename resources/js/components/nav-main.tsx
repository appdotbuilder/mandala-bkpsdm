import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';

export function NavMain({ items = [], label }: { items: NavItem[]; label?: string }) {
    const page = usePage();
    
    // Determine group label based on first item or provided label
    let groupLabel = label;
    if (!groupLabel && items.length > 0) {
        if (items.some(item => ['/', '/dashboard', '/data', '/layanan', '/laporan', '/bantuan'].includes(item.href))) {
            groupLabel = 'MANDALA BKPSDM';
        } else {
            groupLabel = 'Manajemen';
        }
    }
    
    return (
        <SidebarGroup className="px-2 py-0">
            {groupLabel && <SidebarGroupLabel>{groupLabel}</SidebarGroupLabel>}
            <SidebarMenu>
                {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild isActive={page.url.startsWith(item.href)} tooltip={{ children: item.title }}>
                            <Link href={item.href} prefetch>
                                {item.icon && <item.icon />}
                                <span>{item.title}</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    );
}
