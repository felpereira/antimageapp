'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from 'C:\\Repositorios\\ancient-ui\\src\\components\\Button';
import { CheckBox } from 'C:\\Repositorios\\ancient-ui\\src\\components\\CheckBox';
import { Input } from 'C:\\Repositorios\\ancient-ui\\src\\components\\Input';
import { Text } from 'C:\\Repositorios\\ancient-ui\\src\\components\\Text';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as zod from 'zod';

import styles from './page.module.css';

const AccountDataSchema = zod.object({
    nomeUsuario: zod.string().min(1, 'Digite seu Usuário'),
    senhaUsuario: zod.string().min(1, 'Digite sua senha')
});

type AccountData = zod.infer<typeof AccountDataSchema>;

export default function SingIn() {
    const [lembrar, setLembrar] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<AccountData>({
        resolver: zodResolver(AccountDataSchema)
    });

    const handleLembrar = () => {
        console.log(lembrar);
        setLembrar(!lembrar);
    };

    const handleSingIn = (data: AccountData) => {};

    return (
        <>
            <div className={styles.title}>
                <Text
                    label={'Login'}
                    size={'2rem'}
                    weight={'900'}
                />
            </div>
            <div className={styles.subtitle}>
                <Text
                    label={'Entrar para Continuar'}
                    weight={'300'}
                />
            </div>

            <form
                className={styles.inputContainer}
                onSubmit={handleSubmit(handleSingIn)}
            >
                <Input
                    label="Login"
                    maxLength={25}
                    {...register('nomeUsuario')}
                    fieldError={errors.nomeUsuario}
                />
                <Input
                    label="Senha"
                    maxLength={25}
                    password
                    {...register('senhaUsuario')}
                    fieldError={errors.senhaUsuario}
                />
                <div className={styles.subLogin}>
                    <CheckBox
                        isChecked={lembrar}
                        onClick={handleLembrar}
                        label={'Lembrar'}
                    />
                    <Link
                        href="/"
                        className={styles.link}
                    >
                        Esqueceu a Senha?
                    </Link>
                </div>
                <div className={styles.buttonContainer}>
                    <Button label="Entrar" />
                </div>
                <div className={styles.criarConta}>
                    <Link
                        href="/sing-up"
                        className={styles.link}
                    >
                        Não tem uma conta? Registre-se.
                    </Link>
                </div>
            </form>
        </>
    );
}
