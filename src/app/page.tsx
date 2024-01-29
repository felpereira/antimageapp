import Link from 'next/link';

import styles from './page.module.css';

export default function Home() {
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
            {/* <Login /> */}
            {/* <CreateAccount /> */}
        </main>
    );
}
