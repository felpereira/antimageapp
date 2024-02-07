'use client';

import { LayoutContext } from '@/lib/providers/LayoutProvider';
import { useContext, useEffect } from 'react';

export interface Janela {
    width: number;
    height: number;
}

export const useWindowSize = () => {
    const { setWindowSize } = useContext(LayoutContext);

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }

        window.addEventListener('resize', handleResize);

        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, [setWindowSize]);
};
