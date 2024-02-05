export interface SideBarLink {
    redirect: string;
    name: string;
}

export const generateSideBar = (user: string): SideBarLink[] => {
    const sidebarLinks: SideBarLink[] = [
        { redirect: `/${user}`, name: 'Inicio' },
        { redirect: `/`, name: 'Site' }
    ];

    return sidebarLinks;
};
