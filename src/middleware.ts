import { getToken } from 'next-auth/jwt';
import { NextRequestWithAuth, withAuth } from 'next-auth/middleware';

const rotasPublicas = [
    '/',
    'forgot-password',
    'sing-in',
    'sing-up',
    '/logotipo.svg'
];

//todo verificar rotas autorizadas do lado da api, verificar se o token é valido

export default withAuth(
    async function middleware(req: NextRequestWithAuth) {
        const token = await getToken({ req });
        console.log(req.nextUrl.pathname, token);
    },
    {
        pages: {
            signIn: '/sing-in'
        },
        callbacks: {
            authorized: ({ req, token }) => {
                return rotasPublicas.includes(req.nextUrl.pathname);
            }
        }
    }
);
