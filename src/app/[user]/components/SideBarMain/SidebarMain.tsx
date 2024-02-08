import { getServerSession } from 'next-auth/next';
import React from 'react';

import { authOptions } from '../../../api/auth/[...nextauth]/route';
import SideBar from '../SideBar/SideBar';

export default async function SidebarMain() {
    const session = await getServerSession(authOptions);

    if (!session) {
        return;
    }

    const nomeUsuario = session?.user.toString();

    return <SideBar nomeUsuario={nomeUsuario} />;
}
