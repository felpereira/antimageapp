'use client';

// import { LayoutContext } from '@/lib/providers/LayoutProvider';
import { TAMANHO_MINIMO_SIDEBAR_LOGO_VISIVEL } from '@/shared/constantes';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';

interface SideBarLink {
    redirect: string;
    onClick?: () => void;
    name: string;
}

interface SideBarMenuItensProps {
    usuario: string;
}

const generateSideBar = (user: string): SideBarLink[] => {
    const sidebarLinks: SideBarLink[] = [
        { redirect: `/${user}`, name: 'Inicio' },
        { redirect: `/`, name: 'Site' },
        { redirect: '', onClick: () => signOut(), name: 'Sair' }
    ];

    return sidebarLinks;
};

export default function SideBarMenuItens({
    usuario
}: Readonly<SideBarMenuItensProps>) {
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
    // const { windowSize } = useContext(LayoutContext);

    // if (
    //     windowSize.width < TAMANHO_MINIMO_SIDEBAR_LOGO_VISIVEL &&
    //     windowSize.width != 0
    // ) {
    //     return null;
    // }

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
