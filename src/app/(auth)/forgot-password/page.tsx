'use client';

import { api } from '@/lib/request/axios';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from 'C:\\Repositorios\\ancient-ui\\src\\components\\Button';
import { Input } from 'C:\\Repositorios\\ancient-ui\\src\\components\\Input';
import { Text } from 'C:\\Repositorios\\ancient-ui\\src\\components\\Text';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as zod from 'zod';

import styles from './page.module.css';

const AccountRecoveryDataSchema = zod.object({
    emailUsuario: zod
        .string()
        .min(1, 'Digite seu Email')
        .email('Email invalido')
});

type AccountRecoveryData = zod.infer<typeof AccountRecoveryDataSchema>;

export default function ForgotPassword() {
    const { push } = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<AccountRecoveryData>({
        resolver: zodResolver(AccountRecoveryDataSchema)
    });

    const handleRecoveryAccount = (data: AccountRecoveryData) => {};

    const handleCancelar = () => {

        push('/');
    };

    return (
        <>
            <div className={styles.title}>
                <Text
                    label={'Esqueceu a senha?'}
                    size={'1.5rem'}
                    weight={'900'}
                />
            </div>

            <form
                className={styles.inputContainer}
                onSubmit={handleSubmit(handleRecoveryAccount)}
            >
                <Input
                    label="Email"
                    maxLength={25}
                    {...register('emailUsuario')}
                    fieldError={errors.emailUsuario}
                />

                <div className={styles.criarConta}>
                    {'Digite o email para recuperar a senha'}
                </div>
                <div className={styles.buttonContainer}>
                    <Button
                        label="Cancelar"
                        onClick={handleCancelar}
                    />
                    <Button label="Enviar" />
                </div>
            </form>
        </>
    );
}
