import { prisma } from '@/lib/database/prisma';
import bcrypt from 'bcrypt';

export interface UsuarioClass {
    user: string;
    pass: string;
}

export class UsuariosService {
    async getAuthUserByUser(usuario: Usuario) {
        const emailExists = await prisma.user.findUnique({
            where: {
                username: usuario.nomeUsuario
            },
            select: { password: true }
        });

        if (emailExists) {
            const isPasswordMatch = await bcrypt.compare(
                emailExists.password,
                usuario.senhaUsuario
            );

            if (!isPasswordMatch) {
                throw new Error('Email or password is invalid.');
            }

            return usuario;
        }

        throw new Error('Email or password is invalid.');
    }
}
