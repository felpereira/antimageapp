'use client';

import { useWindowSize } from '@/hooks/useWindowSize';
import React, { ReactNode, createContext, useMemo, useState } from 'react';

export interface Janela {
    width: number;
    height: number;
}

interface LayoutProviderProps {
    setWindowSize: React.Dispatch<React.SetStateAction<Janela>>;
    setOpenSideMenu: React.Dispatch<React.SetStateAction<boolean>>;
    windowSize: Janela;
    openSideMenu: boolean;
}

export const LayoutContext = createContext<LayoutProviderProps>({
    setWindowSize: (_janela: React.SetStateAction<Janela>) => {},
    setOpenSideMenu: (_novoValor: React.SetStateAction<boolean>) => {},
    windowSize: { width: 0, height: 0 },
    openSideMenu: false
});

export const LayoutProvider: React.FC<{ children: ReactNode }> = ({
    children
}) => {
    const [windowSize, setWindowSize] = useState<Janela>({
        height: 0,
        width: 0
    });
    const [openSideMenu, setOpenSideMenu] = useState<boolean>(false);

    const context = useMemo(
        () => ({
            windowSize,
            setWindowSize,
            openSideMenu,
            setOpenSideMenu
        }),
        [openSideMenu, windowSize]
    );

    // Preciso enviar a função por que o Provider só funciona dentro do tag LayoutContext
    useWindowSize(setWindowSize);
    return (
        <LayoutContext.Provider value={context}>
            {children}
        </LayoutContext.Provider>
    );
};
