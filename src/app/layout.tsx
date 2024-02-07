import type { Metadata } from 'next';
import React from 'react';

import { aileronFonts } from '../lib/theme/font';
import './globals.css';
import { AlertProvider } from './providers/AlertProviderContext';

export const metadata: Metadata = {
    title: 'Appli - M',
    description: 'Appli - M'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="pt-br"
            className={aileronFonts.className}
        >
            <body>
                <AlertProvider>{children}</AlertProvider>
            </body>
        </html>
    );
}
