import React from 'react';

import SideBar from './components/SideBar';
import styles from './layout.module.css';

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={styles.container}>
            <SideBar />
            <div className={styles.content}>{children}</div>
        </div>
    );
}
