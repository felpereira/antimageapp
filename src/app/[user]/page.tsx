'use client';

import { forEachEnum } from '@/lib/utils/utils';
import React, { useMemo, useState } from 'react';

import { Button } from '../../../../ancient-ui/src/components/Button';
import { DiaDaSemana, obterDescricaoDiaDaSemana } from './calendario';
import { OpenSideMenu } from './components/SideBarMenuMobile/SideBarMenuMobile';
import style from './page.module.css';

// tirar

export default function Painel() {
    const [mesAtual, setMesAtual] = useState(0);
    const [ano, setAno] = useState(2024);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [visibility, setVisibility] = useState(false);

    let timeoutId: NodeJS.Timeout | null = null;

    const handleMouseMove = debounce((event: React.MouseEvent) => {
        setPosition({ x: event.clientX, y: event.clientY });
        setVisibility(true);
    }, 50);

    const handleMouseLeave = () => {
        setVisibility(false);
    };

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

    const primeiroDoAnoComecaEm = 0; // segunda feira

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
    const ehJaneiro = mesAtual == JANEIRO;
    const ehDezembro = mesAtual == DEZEMBRO;

    const diasMesAnterior = new Date(ano, mesAtual, 1).getDay() - 1;
    return (
        <div>
            <OpenSideMenu />
            <h1>Agendar</h1>

            <h2>{`${mesesDoAno[mesAtual]} de ${ano}`}</h2>

            <div
                style={{
                    paddingTop: '30px',
                    width: '35rem'
                }}
            >
                <div style={{ display: 'inline-flex' }}>
                    {forEachEnum(DiaDaSemana, ({ value, label }) => (
                        <div
                            className={style.diaSemanacalendario}
                            key={label}
                        >
                            {obterDescricaoDiaDaSemana(value)}
                        </div>
                    ))}
                </div>

                {Array.from({ length: diasMesAnterior }, (_, chavinha) => {
                    return (
                        <div
                            style={{
                                display: 'inline-flex'
                            }}
                            key={Math.floor(Math.random() * 99999999999)}
                        >
                            <div className={style.fakeDia}></div>
                        </div>
                    );
                })}

                {Array.from({ length: diasDoMes[mesAtual] }, (_, index) => {
                    return (
                        <div
                            style={{
                                display: 'inline-flex',
                                pointerEvents: 'auto'
                            }}
                            key={index}
                        >
                            <button
                                className={style.celulaCalendario}
                                onClick={event =>
                                    botaoCliqueCalendario(index + 1)
                                }
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                                style={{ pointerEvents: 'auto' }}
                            >
                                {`${index + 1}`}
                            </button>
                        </div>
                    );
                })}
            </div>
            <div
                style={{
                    display: 'inline-flex',
                    paddingTop: '10px',
                    width: '35rem',
                    justifyContent: 'flex-end',
                    paddingRight: '40px'
                }}
            >
                <Button
                    onClick={() => {
                        if (ehJaneiro) {
                            setAno(state => state - 1);
                            setMesAtual(11);
                        } else {
                            setMesAtual(state => state - 1);
                        }
                    }}
                    label={'Anterior'}
                />
                <Button
                    onClick={() => {
                        if (ehDezembro) {
                            setAno(state => state + 1);
                            setMesAtual(0);
                        } else {
                            setMesAtual(state => state + 1);
                        }
                    }}
                    label={'Próximo'}
                />
            </div>
            <div
                style={{
                    visibility: visibility ? 'visible' : 'hidden',
                    height: '5rem',
                    width: '5rem',
                    border: '1px solid blue',
                    position: 'absolute',
                    display: 'inline-block',
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    textAlign: 'justify',
                    padding: '5px',
                    wordWrap: 'break-word',
                    background: 'red',
                    transition: 'all 0.5s linear'
                    // pointerEvents: 'none'
                }}
            >
                3 Agendamentos
            </div>
        </div>
    );
}

type DebouncedFunction<T extends (...args: any[]) => void> = (
    ...args: Parameters<T>
) => void;

function debounce<T extends (...args: any[]) => void>(
    fn: T,
    delay: number
): DebouncedFunction<T> {
    let timeoutId: NodeJS.Timeout;

    return (...args: Parameters<T>) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
    };
}
