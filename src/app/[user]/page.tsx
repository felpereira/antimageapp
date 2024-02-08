'use client';

import React, { useState } from 'react';

import { OpenSideMenu } from './components/SideBarMenuMobile/SideBarMenuMobile';
import style from './page.module.css';

// tirar

export default function Painel() {
    const [mesAtual, setMesAtual] = useState(0);

    const botaoCliqueCalendario = (dia: number) => {
        console.log(dia);
    };

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

    const JANEIRO = 0;
    const DEZEMBRO = 11;
    const disabledAnterior = mesAtual == JANEIRO;
    const disabledProximo = mesAtual == DEZEMBRO;

    return (
        <div>
            <OpenSideMenu />
            <h1>Agendar</h1>

            <h2>{`${mesesDoAno[mesAtual]}`}</h2>
            <button
                onClick={() => setMesAtual(state => state - 1)}
                disabled={disabledAnterior}
            >
                Anterior
            </button>
            <p>{mesAtual + 1}</p>
            <button
                onClick={() => setMesAtual(state => state + 1)}
                disabled={disabledProximo}
            >
                Proximo
            </button>
            <div
                style={{
                    width: '35rem'
                }}
            >
                <div style={{ display: 'inline-flex' }}>
                    <div
                        style={{
                            width: '4rem',
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center'
                        }}
                    >
                        Segunda
                    </div>
                    <div
                        style={{
                            width: '4rem',
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center'
                        }}
                    >
                        Terça
                    </div>
                    <div
                        style={{
                            width: '4rem',
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center'
                        }}
                    >
                        Quarta
                    </div>
                    <div
                        style={{
                            width: '4rem',
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center'
                        }}
                    >
                        Quinta
                    </div>
                    <div
                        style={{
                            width: '4rem',
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center'
                        }}
                    >
                        Sexta
                    </div>
                    <div
                        style={{
                            width: '4rem',
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center'
                        }}
                    >
                        Sábado
                    </div>
                    <div
                        style={{
                            width: '4rem',
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center'
                        }}
                    >
                        Domingo
                    </div>
                </div>

                {Array.from({ length: diasDoMes[mesAtual] }, (_, index) => {
                    return (
                        <div
                            style={{
                                display: 'inline-flex'
                            }}
                            key={index}
                        >
                            <button
                                className={style.celulaCalendario}
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
                                    background: '#c9caca',
                                    cursor: 'pointer'
                                }}
                                onClick={event =>
                                    botaoCliqueCalendario(index + 1)
                                }
                            >
                                {`${index + 1}`}
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
