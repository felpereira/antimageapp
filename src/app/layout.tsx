import { aileronFonts } from '@/lib/theme/font';
import type { Metadata } from 'next';

import { AlertCard } from '../../../ancient-ui/src/components/AlertCard';
import { Button } from '../../../ancient-ui/src/components/Button';
import { AlertProvider } from '../contexts/AlertProviderContext';
import './globals.css';
import styles from './layout.module.css';

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
