'use client';

import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { useWindowSize } from './useSideBar';

export interface SideBarLink {
    redirect: string;
    onClick?: () => void;
    name: string;
}

export interface PropsSideBarLink {
    usuario: string;
}

export const generateSideBar = (user: string): SideBarLink[] => {
    const sidebarLinks: SideBarLink[] = [
        { redirect: `/${user}`, name: 'Inicio' },
        { redirect: `/`, name: 'Site' },
        { redirect: '', onClick: () => signOut(), name: 'Sair' }
    ];

    return sidebarLinks;
};

export default function SidebarProperties({
    usuario
}: Readonly<PropsSideBarLink>) {
    return (
        <ul>
            {generateSideBar(usuario).map(x => {
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

export function SideMenuLogo() {
    const size = useWindowSize();

    console.log(size.width < 900);

    if (size.width < 900) {
        return null;
    }

    return (
        <div style={{ height: 'min-content', textAlign: 'center' }}>
            <Image
                src="/logotipo.svg"
                width={100}
                height={100}
                alt="Picture of the author"
                style={{ paddingBottom: '10px' }}
                priority
            />
        </div>
    );
}
