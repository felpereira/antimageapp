'use client';

import { TAMANHO_MINIMO_SIDEBAR_VISIBEL } from '@/shared/constantes';
import Image from 'next/image';
import React from 'react';

import { useWindowSize } from '../../../../hooks/useWindowSize';

export function OpenSideMenu() {
    const size = useWindowSize();

    if (size.width > TAMANHO_MINIMO_SIDEBAR_VISIBEL || size.width == 0) {
        return null;
    }

    return (
        <div style={{ height: 'min-content' }}>
            <Image
                src="/menusButton.svg"
                width={32}
                height={32}
                alt="Picture of the author"
                style={{ paddingBottom: '10px', width: '2rem', height: 'auto' }}
                priority
                onClick={() => console.log('teste')}
            />
        </div>
    );
}
