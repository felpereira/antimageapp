import { LayoutProvider } from '@/lib/providers/LayoutProvider';
import type { Metadata } from 'next';
import React from 'react';

import { AlertProvider } from '../lib/providers/AlertProviderContext';
import { aileronFonts } from '../lib/theme/font';
import './globals.css';

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
                <LayoutProvider>
                    <AlertProvider>{children}</AlertProvider>
                </LayoutProvider>
            </body>
        </html>
    );
}
