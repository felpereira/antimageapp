'use client';

import { LayoutContext } from '@/lib/providers/LayoutProvider';
import { TAMANHO_MINIMO_SIDEBAR_VISIVEL } from '@/shared/constantes';
import React, { useContext, useEffect } from 'react';

import { SideBarInforUser } from '../SideBarInforUser/SideBarInfoUser';
import SidebarProperties, {
    SideMenuLogo
} from '../SideBarMenuItens/SideBarMenuItens';
import styled from './SideBar.module.css';

interface SideBarProps {
    nomeUsuario: string;
}

export default function SideBar({ nomeUsuario }: Readonly<SideBarProps>) {
    const { openSideMenu } = useContext(LayoutContext);

    const classNameSidebar = openSideMenu
        ? `${styled.sidebar} ${styled.exibirSidebarProCima}`
        : `${styled.sidebar}`;

    return (
        <div className={classNameSidebar}>
            <SideMenuLogo />
            <SideBarInforUser usuario={nomeUsuario} />
            <SidebarProperties usuario={nomeUsuario} />
        </div>
    );
}
