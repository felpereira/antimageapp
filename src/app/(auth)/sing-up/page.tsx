'use client';

import { api } from '@/lib/request/axios';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from 'C:\\Repositorios\\ancient-ui\\src\\components\\Button';
import { Input } from 'C:\\Repositorios\\ancient-ui\\src\\components\\Input';
import { Text } from 'C:\\Repositorios\\ancient-ui\\src\\components\\Text';
import { AxiosError } from 'axios';
import { redirect, useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as zod from 'zod';

import styles from './page.module.css';

const CreateAccountDataSchema = zod
    .object({
        nomeUsuario: zod.string().min(1, 'Digite seu Usuário'),
        emailUsuario: zod
            .string()
            .min(1, 'Digite seu Email')
            .email('Email invalido'),
        senhaUsuario: zod.string().min(1, 'Digite sua senha'),
        senhaConfirmaUsuario: zod.string().min(1, 'Confirme sua senha')
    })
    .refine(data => data.senhaUsuario === data.senhaConfirmaUsuario, {
        message: 'As senhas não coincidem.',
        path: ['senhaConfirmaUsuario'] // path of error
    });

// refine

type CreateAccountData = zod.infer<typeof CreateAccountDataSchema>;

export default function SingUp() {
    const { push } = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError
    } = useForm<CreateAccountData>({
        resolver: zodResolver(CreateAccountDataSchema)
    });

    const handleCreateAccount = async (data: CreateAccountData) => {
        console.log(data);
        try {
            const response = await api.post(
                '/users',
                {
                    nomeUsuario: data.nomeUsuario,
                    emailUsuario: data.emailUsuario,
                    senha: data.senhaConfirmaUsuario,
                    confirmSenha: data.senhaConfirmaUsuario
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );

            console.log(response);
        } catch (error) {
            if (error instanceof AxiosError) {
                if (error.response?.status == 400) {
                    setError(error.response.data.campo, {
                        message: error.response.data.message
                    });
                    return;
                }
            }

            console.error('Erro ao criar conta:', error);
        }
    };

    const handleCancelar = () => {
        console.log('teste');
        push('/');
    };

    return (
        <>
            <div className={styles.title}>
                <Text
                    label={'Criar Conta'}
                    size={'2rem'}
                    weight={'900'}
                />
            </div>
            <form
                className={styles.inputContainer}
                onSubmit={handleSubmit(handleCreateAccount)}
            >
                <Input
                    label="Nome de Usuário"
                    maxLength={25}
                    {...register('nomeUsuario')}
                    fieldError={errors.nomeUsuario}
                />

                <Input
                    label="Email"
                    maxLength={25}
                    {...register('emailUsuario')}
                    fieldError={errors.emailUsuario}
                />

                <Input
                    label="Senha"
                    maxLength={25}
                    password
                    {...register('senhaUsuario')}
                    fieldError={errors.senhaUsuario}
                />

                <Input
                    label="Confirmar Senha"
                    maxLength={25}
                    password
                    {...register('senhaConfirmaUsuario')}
                    fieldError={errors.senhaConfirmaUsuario}
                />
                <div className={styles.buttonContainerCreateAccount}>
                    <Button
                        label="Cancelar"
                        onClick={handleCancelar}
                    />
                    <Button
                        label="Criar Conta"
                        type={'submit'}
                    />
                </div>
            </form>
        </>
    );
}