'use client';

import { useWindowSize } from '@/hooks/useWindowSize';
import React, { ReactNode, createContext, useMemo, useState } from 'react';

export interface AlertCardPropsContext {
    message: string;
}

export interface Janela {
    width: number;
    height: number;
}

interface LayoutContextProps {
    openSideMenu: boolean;
    setOpenSideMenu: React.Dispatch<React.SetStateAction<boolean>>;
    windowSize: Janela;
    setWindowSize: React.Dispatch<React.SetStateAction<Janela>>;
}

export const LayoutContext = createContext<LayoutContextProps>({
    openSideMenu: false,
    setOpenSideMenu: () => {},
    setWindowSize: () => {},
    windowSize: {
        width: 0,
        height: 0
    }
});

export const LayoutProvider: React.FC<{ children: ReactNode }> = ({
    children
}) => {
    useWindowSize();

    const [openSideMenu, setOpenSideMenu] = useState(false);
    const [windowSize, setWindowSize] = useState<Janela>({
        width: 0,
        height: 0
    });

    const context = useMemo(
        () => ({
            openSideMenu,
            setOpenSideMenu,
            windowSize,
            setWindowSize
        }),
        [openSideMenu, windowSize]
    );

    return (
        <LayoutContext.Provider value={context}>
            {children}
        </LayoutContext.Provider>
    );
};
