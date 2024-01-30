'use client';

import React, { ReactNode, createContext, useMemo, useState } from 'react';

import { AlertCard } from '../../../ancient-ui/src/components/AlertCard';

interface AlertContextProps {
    handleExibirAlerta: (
        valor: string,
        callback: (() => void) | undefined
    ) => void;
}

export const AlertContext = createContext<AlertContextProps>({
    handleExibirAlerta: () => {}
});

export const AlertProvider: React.FC<{ children: ReactNode }> = ({
    children
}) => {
    const [textMessage, setTextMessage] = useState<string | undefined>('');

    const handleExibirAlerta = (
        text: string,
        callback: (() => void) | undefined = undefined
    ) => {
        setTextMessage(text);

        if (callback) {
            callback();
        }
    };

    const handleFecharAlerta = () => {
        setTextMessage(undefined);
    };

    const context = useMemo(
        () => ({
            handleExibirAlerta
        }),
        []
    );

    return (
        <AlertContext.Provider value={context}>
            <AlertCard
                text={textMessage}
                onClickRecuse={handleFecharAlerta}
            />
            {children}
        </AlertContext.Provider>
    );
};
