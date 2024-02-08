import * as jose from 'jose';
import { cookies } from 'next/headers';

export const sessionValid = async () => {
    const sessionCookie = cookies().get('session');

    if (sessionCookie) {
        const { value } = sessionCookie;
        const { exp } = await openSessionToken(value);
        const currentDate = new Date().getTime();

        return (exp as number) * 1000 > currentDate;
    }

    return false;
};

export const openSessionToken = async (token: string) => {
    const secret = new TextEncoder().encode(process.env.AUTH_SECRET);
    const { payload } = await jose.jwtVerify(token, secret);

    return payload;
};
