import { prisma } from '@/lib/database/prisma';
import bcrypt from 'bcrypt';

export interface UsuarioClass {
    id: string;
    user: string;
    pass: string;
}

export class UsuariosService {
    async getAuthUserByUser(usuario: UsuarioClass) {
        const usuarioBanco = await prisma.user.findUnique({
            where: {
                username: usuario.user
            }
        });

        if (usuarioBanco) {
            const senhaConfere = await bcrypt.compare(
                usuario.pass,
                usuarioBanco.password
            );

            if (!senhaConfere) {
                throw new Error('Email or password is invalid.');
            }

            return {
                id: usuarioBanco.id.toString(),
                user: usuarioBanco.username,
                pass: usuarioBanco.password
            } as UsuarioClass;
        }

        throw new Error('Email or password is invalid.');
    }
}
