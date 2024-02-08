'use client';

import React from 'react';

import { OpenSideMenu } from './components/SideBarMenuMobile/SideBarMenuMobile';
import style from './page.module.css';

// tirar

export default function Painel() {
    const mesesDoAno = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ];
    const diasDoMes = [
        31, // Janeiro
        29, // Fevereiro (considerando um ano bissexto, ajuste conforme necessário)
        31, // Março
        30, // Abril
        31, // Maio
        30, // Junho
        31, // Julho
        31, // Agosto
        30, // Setembro
        31, // Outubro
        30, // Novembro
        31 // Dezembro
    ];
    return (
        <div className="w-full max-w-screen-xl h-screen flex flex-col justify-center items-center">
            <OpenSideMenu />
            <h1>Agendar</h1>

            {mesesDoAno.map((x, i) => {
                return (
                    <>
                        <h2 key={x}>{`${x}`}</h2>
                        <div
                            style={{
                                width: '35rem'
                            }}
                        >
                            {Array.from(
                                { length: diasDoMes[i] },
                                (_, index) => {
                                    const i = index + 1;
                                    const quadrado: number = i ** 2;

                                    return (
                                        <div
                                            style={{
                                                display: 'inline-flex'
                                            }}
                                            key={index}
                                        >
                                            <div
                                                className={
                                                    style.celulaCalendario
                                                }
                                                key={index}
                                                style={{
                                                    width: '4rem',
                                                    height: '4rem',
                                                    border: '2px solid #b1a7a6',
                                                    borderRadius: '5px',
                                                    margin: '5px',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    fontSize: '2rem',
                                                    fontWeight: 600,
                                                    background: '#c9caca'
                                                }}
                                            >
                                                {`${index + 1}`}
                                            </div>
                                        </div>
                                    );
                                }
                            )}
                        </div>
                    </>
                );
            })}
        </div>
    );
}
