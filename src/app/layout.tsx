import type { Metadata } from 'next';
import './globals.css';

import { aileronFonts } from '@/lib/theme/font';

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
        <html lang="pt-br" className={aileronFonts.className}>
            <body>{children}</body>
        </html>
    );
}
