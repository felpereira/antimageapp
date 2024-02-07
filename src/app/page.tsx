import { getServerSession } from 'next-auth';
import Link from 'next/link';
import React from 'react';

import SideBar from './[user]/components/SideBar';
import { authOptions } from './api/auth/[...nextauth]/route';
import styles from './page.module.css';

export default async function Home() {
    const session = await getServerSession(authOptions);
    const nomeUsuario = session?.user;

    return (
        <main className={styles.main}>
            <SideBar />
            <Link
                href="/sing-up"
                className={styles.link}
            >
                Não tem uma conta? Registre-se.
            </Link>
            <br></br>
            <Link
                href="/sing-in"
                className={styles.link}
            >
                Entrar
            </Link>
            <br></br>
            <Link
                href="/forgot-password"
                className={styles.link}
            >
                Esqueceu a senha
            </Link>
            <br></br>
            {session && (
                <Link
                    href={`/${nomeUsuario?.toString()}`}
                    className={styles.link}
                >
                    Painel
                </Link>
            )}
        </main>
    );
}
