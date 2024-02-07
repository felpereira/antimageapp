import Image from 'next/image';
import React from 'react';

import styles from './layout.module.css';

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.content}>
                        <div className={styles.logo}>
                            <Image
                                src="/logotipo.svg"
                                width={100}
                                height={100}
                                alt="Picture of the author"
                                priority
                            />
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
