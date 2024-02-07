'use client';

import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { useWindowSize } from './components/useSideBar';

export function OpenSideMenu() {
    const size = useWindowSize();

    if (size.width < 900) {
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
