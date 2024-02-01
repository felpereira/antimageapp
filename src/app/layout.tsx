import { aileronFonts } from '@/lib/theme/font';
import type { Metadata } from 'next';

import { AlertProvider } from '../contexts/AlertProviderContext';
import './globals.css';
import NextAuthSessionProvider from './providers/sessionProvider';

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
                <NextAuthSessionProvider>
                    <AlertProvider>{children}</AlertProvider>
                </NextAuthSessionProvider>
            </body>
        </html>
    );
}
