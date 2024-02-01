'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { BaseSyntheticEvent, SyntheticEvent, useState } from 'react';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as zod from 'zod';

import { Button } from '../../../../../ancient-ui/src/components/Button';
import { CheckBox } from '../../../../../ancient-ui/src/components/CheckBox';
import { Input } from '../../../../../ancient-ui/src/components/Input';
import { Text } from '../../../../../ancient-ui/src/components/Text';
import styles from './page.module.css';

const AccountDataSchema = zod.object({
    nomeUsuario: zod.string().min(1, 'Digite seu Usuário'),
    senhaUsuario: zod.string().min(1, 'Digite sua senha'),
    chkLembrarConta: zod.boolean()
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
        setLembrar(!lembrar);
    };

    const handleSingInAsync = async (data: AccountData) => {
        console.log(data);
        try {
            const result = await signIn('Credentials', {
                nomeUsuario: data.nomeUsuario,
                senhaUsuario: data.senhaUsuario,
                redirect: false
            });

            console.log(result);
        } catch (error) {
            console.log(error);
            // Lida com erros, se necessário.
        }
    };

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
                onSubmit={handleSubmit(handleSingInAsync)}
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
                        {...register('chkLembrarConta')}
                        fieldError={errors.senhaUsuario}
                    />
                    <Link
                        href="/"
                        className={styles.link}
                    >
                        Esqueceu a Senha?
                    </Link>
                </div>
                <div className={styles.buttonContainer}>
                    <Button
                        label="Entrar"
                        type={'submit'}
                    />
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
