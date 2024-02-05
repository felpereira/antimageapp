'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';

import styles from './page.module.css';

export default function Home() {
    const { data: session } = useSession();
    const usuarioLogado = session?.user;
    return (
        <main className={styles.main}>
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
                    href={`/${usuarioLogado?.toString()}`}
                    className={styles.link}
                >
                    Painel
                </Link>
            )}
            {/* <Login /> */}
            {/* <CreateAccount /> */}
        </main>
    );
}
