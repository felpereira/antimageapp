import { signOut } from 'next-auth/react';

export interface SideBarLink {
    redirect: string;
    onClick?: () => void;
    name: string;
}

export const generateSideBar = (user: string): SideBarLink[] => {
    const sidebarLinks: SideBarLink[] = [
        { redirect: `/${user}`, name: 'Inicio' },
        { redirect: `/`, name: 'Site' },
        { redirect: '', onClick: () => signOut(), name: 'Sair' }
    ];

    return sidebarLinks;
};
