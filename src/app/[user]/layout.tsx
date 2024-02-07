import React from 'react';

import SidebarMain from './components/SideBarMain/SidebarMain';
import styles from './layout.module.css';

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={styles.container}>
            <SidebarMain />
            <div className={styles.content}>{children}</div>
        </div>
    );
}
