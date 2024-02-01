import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

import { authOptions } from '../api/auth/[...nextauth]/route';

interface PrivateLayoutProps {
    children: ReactNode;
}

export default async function PrivateLayout({
    children
}: Readonly<PrivateLayoutProps>) {
    const session = await getServerSession(authOptions);
    console.log(session);
    if (!session) {
        redirect('/');
    }

    return <>{children}</>;
}
