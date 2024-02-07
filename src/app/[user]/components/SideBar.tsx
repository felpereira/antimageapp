import { getServerSession } from 'next-auth/next';
import Image from 'next/image';
import React from 'react';

import { authOptions } from '../../api/auth/[...nextauth]/route';
import styled from './SideBar.module.css';
import SidebarProperties from './sidebarProperties';

// browser side,
export default async function SideBar() {
    const session = await getServerSession(authOptions);
    const nomeUsuario = session?.user;

    return (
        <div
            className={styled.sidebar}
            id={'sideBar'}
        >
            <div style={{ height: 'min-content', textAlign: 'center' }}>
                <Image
                    src="/logotipo.svg"
                    width={100}
                    height={100}
                    alt="Picture of the author"
                    style={{ paddingBottom: '10px' }}
                    priority
                />
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
                    >{`Nome: ${nomeUsuario}`}</div>
                    <div
                        style={{ textAlign: 'center' }}
                    >{`Ultimo Login: 05/11`}</div>
                </div>
            ) : null}
            <SidebarProperties />
        </div>
    );
}
