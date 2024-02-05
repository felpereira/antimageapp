'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

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

    return (
        <div
            className={styled.sidebar}
            id={'sideBar'}
        >
            <ul>
                {generateSideBar((session?.user ?? '').toString()).map(x => {
                    return (
                        <li key={x.name}>
                            <Link href={x.redirect}>{x.name}</Link>
                        </li>
                    );
                })}
            </ul>
            <button
                onClick={() => {
                    let sidebar = document.getElementById('sideBar');
                    console.log(sidebar);
                    if (!sidebar) return;
                    console.log('t');

                    sidebar.style.marginLeft = '-300px';
                }}
            >
                FECHAR
            </button>
        </div>
    );
};
