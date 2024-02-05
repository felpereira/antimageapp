'use client';

import React, { ReactNode, createContext, useMemo, useState } from 'react';

import { AlertCard } from '../../../../ancient-ui/src/components/AlertCard';

export interface AlertCardPropsContext {
    message: string;
    onClickAgree?: AlertButtonPropsContext;
    onClickRecuse?: AlertButtonPropsContext;
}

interface AlertButtonPropsContext {
    label?: string;
    onClick?: () => void;
}

interface AlertContextProps {
    handleExibirAlerta: (props: AlertCardPropsContext) => void;
}

export const AlertContext = createContext<AlertContextProps>({
    handleExibirAlerta: () => {}
});

export const AlertProvider: React.FC<{ children: ReactNode }> = ({
    children
}) => {
    const [buttonAgree, setButtonAgree] = useState<AlertButtonPropsContext>({
        label: 'OK'
    });

    const [buttonRecuse, setButtonRecuse] = useState<
        AlertButtonPropsContext | undefined
    >(undefined);

    const [textMessage, setTextMessage] = useState<string | undefined>(
        undefined
    );

    const handleExibirAlerta = (props: AlertCardPropsContext) => {
        setTextMessage(props.message);

        if (props.onClickAgree) {
            setButtonAgree(props.onClickAgree);
        }
        if (props.onClickRecuse) {
            setButtonRecuse(props.onClickRecuse);
        }
    };

    const handleRecuse = () => {
        setTextMessage(undefined);

        if (buttonAgree.onClick) {
            buttonAgree.onClick();
        }
    };

    const handleAgree = () => {
        setTextMessage(undefined);

        if (buttonRecuse?.onClick) {
            buttonRecuse.onClick();
        }
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
                onClickAgree={handleAgree}
                labelAgree={buttonAgree.label}
                labelRecuse={buttonRecuse?.label}
                onClickRecuse={handleRecuse}
            />
            {children}
        </AlertContext.Provider>
    );
};
