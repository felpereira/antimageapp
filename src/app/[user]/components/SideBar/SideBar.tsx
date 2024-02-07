'use client';

import { LayoutContext } from '@/lib/providers/LayoutProvider';
import { TAMANHO_MINIMO_SIDEBAR_VISIVEL } from '@/shared/constantes';
import React, { useContext } from 'react';

import { SideBarInforUser } from '../SideBarInforUser/SideBarInfoUser';
import SidebarProperties, {
    SideMenuLogo
} from '../SideBarMenuItens/SideBarMenuItens';
import styled from './SideBar.module.css';

interface SideBarProps {
    nomeUsuario: string;
}

export default function SideBar({ nomeUsuario }: Readonly<SideBarProps>) {
    const { openSideMenu, windowSize } = useContext(LayoutContext);

    const exibirSideMenu =
        windowSize.width < TAMANHO_MINIMO_SIDEBAR_VISIVEL &&
        windowSize.width != 0;

    let styleSideBar = {};

    if (exibirSideMenu) {
        styleSideBar = {
            visibility: exibirSideMenu ? 'hidden' : 'visible',
            width: exibirSideMenu ? '0px' : '15vw',
            margin: exibirSideMenu ? '0px' : ' 5px 5px 5px 10px',
            padding: exibirSideMenu ? '0px' : '1rem'
        };
    }

    if (openSideMenu && exibirSideMenu) {
        styleSideBar = {
            position: 'absolute',
            width: '50vw',
            margin: ' 5px 5px 5px 5px'
        };
    }

    return (
        <div
            style={styleSideBar}
            className={styled.sidebar}
        >
            <SideMenuLogo />
            <SideBarInforUser usuario={nomeUsuario} />
            <SidebarProperties usuario={nomeUsuario} />
        </div>
    );
}
