'use client';

import React, { ReactNode, createContext, useMemo, useState } from 'react';

export interface AlertCardPropsContext {
    message: string;
}

interface LayoutContextProps {
    openSideMenu: boolean;
}

export const LayoutContext = createContext<LayoutContextProps>({
    openSideMenu: false
});

export const LayoutProvider: React.FC<{ children: ReactNode }> = ({
    children
}) => {
    const [openSideMenu, setOpenSideMenu] = useState(false);

    const context = useMemo(
        () => ({
            openSideMenu,
            setOpenSideMenu
        }),
        [openSideMenu]
    );

    return (
        <LayoutContext.Provider value={context}>
            {children}
        </LayoutContext.Provider>
    );
};
