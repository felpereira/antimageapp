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
                const { nomeUsuario, senhaUsuario } = credentials;

                console.log('T');
                console.log(credentials);
                console.log(req);

                const usuario: UsuarioClass = {
                    user: senhaUsuario,
                    pass: senhaUsuario
                };

                const usuarioService = new UsuariosService();

                usuarioService.getAuthUserByUser(usuario);
                return null;
                // ou return user
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
