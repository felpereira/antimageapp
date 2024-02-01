import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import {
    UsuarioClass,
    UsuariosService
} from '../../../../../services/usuarios.service';

export const authOptions: NextAuthOptions = {
    secret: 'mQ46qpFwfE1BHuqMC+qlm19qBAD9fVPgh28werwe3ASFlAfnKjM=',
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
                if (!credentials?.senhaUsuario) return null;

                const user: UsuarioClass = {
                    id: '1',
                    user: credentials.nomeUsuario,
                    pass: credentials.senhaUsuario
                };
                const usuariosService = new UsuariosService();

                return await usuariosService.getAuthUserByUser(user);
            }
        })
    ]
    // callbacks: {
    //     async jwt({ token, user }) {
    //         user && (token.user = user);
    //         return token;
    //     },
    //     async session({ session, token }) {
    //         session = token.user as any;
    //         return session;
    //     }
    // }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
