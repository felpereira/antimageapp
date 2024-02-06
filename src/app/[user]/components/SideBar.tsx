'use client';

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';

import styled from './SideBar.module.css';
import { generateSideBar } from './sidebarProperties';

interface SideBarProps {
    text?: string;
    labelAgree?: string;
    labelRecuse?: string;
    onClickAgree?: () => void;
    onClickRecuse?: () => void;
}

export const SideBar = ({
    onClickAgree,
    onClickRecuse,
    labelRecuse,
    labelAgree = 'Sim',
    text = undefined
}: SideBarProps) => {
    const { data: session } = useSession();
    const nomeUsuario = session?.user.toString();

    // todo o que fazer aqui ?
    if (!nomeUsuario) return;

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
            <ul>
                {generateSideBar(nomeUsuario).map(x => {
                    return (
                        <li key={x.name}>
                            <Link
                                href={x.redirect}
                                onClick={x.onClick}
                            >
                                {x.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
