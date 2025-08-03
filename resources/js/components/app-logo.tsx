

export default function AppLogo() {
    return (
        <>
            <div className="flex aspect-square size-8 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground">
                <div className="text-white dark:text-black text-lg">🏛️</div>
            </div>
            <div className="ml-1 grid flex-1 text-left text-sm">
                <span className="mb-0.5 truncate leading-tight font-semibold">MANDALA</span>
                <span className="truncate text-xs text-muted-foreground">BKPSDM</span>
            </div>
        </>
    );
}
