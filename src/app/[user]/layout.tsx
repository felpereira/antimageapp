import Link from 'next/link';

import { SideBar } from './components/SideBar';
import { generateSideBar } from './components/sidebarProperties';
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
