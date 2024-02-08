'use client';

import { Janela } from '@/lib/providers/LayoutProvider';
import { useEffect } from 'react';

export const useWindowSize = (
    setWindowSize: React.Dispatch<React.SetStateAction<Janela>>
) => {
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
