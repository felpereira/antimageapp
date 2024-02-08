'use client';

import { LayoutContext } from '@/lib/providers/LayoutProvider';
import { TAMANHO_MINIMO_SIDEBAR_VISIVEL } from '@/shared/constantes';
import Image from 'next/image';
import React, { useContext } from 'react';

export function OpenSideMenu() {
    const { openSideMenu, setOpenSideMenu, windowSize } =
        useContext(LayoutContext);

    if (
        windowSize.width > TAMANHO_MINIMO_SIDEBAR_VISIVEL ||
        windowSize.width == 0
    ) {
        return null;
    }

    return (
        <div style={{ height: 'min-content', textAlign: 'right' }}>
            <Image
                src="/menusButton.svg"
                width={32}
                height={32}
                alt="Picture of the author"
                style={{ paddingBottom: '10px', width: '2rem', height: 'auto' }}
                priority
                onClick={() => setOpenSideMenu(!openSideMenu)}
            />
        </div>
    );
}
