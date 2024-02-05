import NextAuth, { NextAuthOptions, Session } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import {
    UsuarioClass,
    UsuariosService
} from '../../../../../services/usuarios.service';

export const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/sing-in'
        // signOut: '/auth/signout',
        // error: '/auth/error',
        // verifyRequest: '/auth/verify-request',
        // newUser: '/auth/new-user'
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                nomeUsuario: {
                    label: 'nomeUsuario',
                    type: 'text'
                },
                senhaUsuario: { label: 'senhaUsuario', type: 'password' }
            },
            async authorize(credentials, req) {
                try {
                    if (!credentials?.senhaUsuario) return null;

                    const user: UsuarioClass = {
                        id: '1',
                        user: credentials.nomeUsuario,
                        pass: credentials.senhaUsuario
                    };
                    const usuariosService = new UsuariosService();
                    const finalUser =
                        await usuariosService.getAuthUserByUser(user);
                    return finalUser;
                } catch (error) {
                    return null;
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            user && (token.user = user);
            return token;
        },
        async session({ session, token }) {
            return token.user as Session;
        }
    }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
