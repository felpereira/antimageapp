import { getServerSession } from 'next-auth';
import Link from 'next/link';
import React, { useMemo } from 'react';

import { authOptions } from './api/auth/[...nextauth]/route';

export default async function Home() {
    const session = await useMemo(
        async () => await getServerSession(authOptions),
        []
    );
    const nomeUsuario = session?.user;

    return (
        <main>
            <Link href="/sing-up">Não tem uma conta? Registre-se.</Link>
            <br></br>
            <Link href="/sing-in">Entrar</Link>
            <br></br>
            <Link href="/forgot-password">Esqueceu a senha</Link>
            <br></br>
            {session && (
                <Link href={`/${nomeUsuario?.toString()}`}>Painel</Link>
            )}
        </main>
    );
}
