'use client';

import { signOut } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

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

export default function SidebarProperties() {
    return (
        <ul>
            {generateSideBar('').map(x => {
                return (
                    <li key={x.name}>
                        <Link
                            href={x.redirect}
                            onClick={x.onClick}
                        >
                            {x.name}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}
