import { getServerSession } from 'next-auth/next';
import React from 'react';

import { authOptions } from '../../api/auth/[...nextauth]/route';
import styled from './SideBar.module.css';
import SidebarProperties, { SideMenuLogo } from './sidebarProperties';

export default async function SideBar() {
    const session = await getServerSession(authOptions);

    const nomeUsuario = session?.user.toString() ?? '';

    if (!session) {
        return;
    }

    return (
        <div
            className={styled.sidebar}
            id={'sideBar'}
        >
            <div style={{ height: 'min-content', textAlign: 'center' }}>
                <SideMenuLogo />
            </div>
            {session ? (
                <div
                    style={{
                        // border: '1px solid black',
                        height: '100px',
                        marginBottom: '10px',
                        padding: '5px',
                        verticalAlign: 'middle',
                        justifyContent: 'space-around',
                        display: 'flex',
                        flexDirection: 'column',
                        flexGrow: '1',
                        maxHeight: 'min-content',
                        overflow: 'hidden'
                    }}
                >
                    <div
                        style={{ textAlign: 'center' }}
                    >{`Usuario: ${nomeUsuario}`}</div>
                    <div
                        style={{ textAlign: 'center' }}
                    >{`Ultimo Login: 05/11`}</div>
                </div>
            ) : null}
            <SidebarProperties usuario={nomeUsuario} />
        </div>
    );
}
