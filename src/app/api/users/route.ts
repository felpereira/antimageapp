import { prisma } from '@/lib/database/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

// In this file, we can define any type of request as follows:
// export async function GET(Request) {}
// export async function HEAD(Request) {}
// export async function POST(Request) {}
// export async function PUT(Request) {}
// export async function DELETE(Request) {}
//  A simple GET Example

export async function GET(Request: NextApiRequest) {
    return new Response('This is a new API route');
}

export async function POST(request: Request, response: NextApiResponse) {
    const { nomeUsuario, emailUsuario, senha, confirmSenha } =
        await request.json();

    const emailExists = await prisma.user.findUnique({
        where: {
            email: emailUsuario
        },
        select: { email: true }
    });

    console.log(emailExists);

    if (emailExists) {
        return RetornarError('emailUsuario', 'O email já está cadastrado');
    }

    const usuarioExists = await prisma.user.findUnique({
        where: {
            username: nomeUsuario
        },
        select: { username: true }
    });

    if (usuarioExists) {
        return RetornarError(
            'emailUsuario',
            'O Nome de Usuário já está cadastrado'
        );
    }

    const userId = await prisma.user.create({
        data: { email: emailUsuario, password: senha, username: nomeUsuario },
        select: { id: true }
    });

    return new Response(JSON.stringify({ usuarioId: userId }));
}

const RetornarError = (campo: string, message: string) =>
    new Response(
        JSON.stringify({
            campo: campo,
            message: message
        }),
        {
            status: 400
        }
    );
