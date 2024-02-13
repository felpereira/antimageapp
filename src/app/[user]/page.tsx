'use client';

import { forEachEnum } from '@/lib/utils/utils';
import { usePathname, useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';
import React, { useMemo, useState } from 'react';

import { Button } from '../../../../ancient-ui/src/components/Button';
import { DiaDaSemana, obterDescricaoDiaDaSemana } from './calendario';
import { OpenSideMenu } from './components/SideBarMenuMobile/SideBarMenuMobile';
import Header from './components/header/header';
import style from './page.module.css';

export default function Painel() {
    const [mesAtual, setMesAtual] = useState(0);
    const [ano, setAno] = useState(2024);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [visibility, setVisibility] = useState(false);

    const { push } = useRouter();
    const pathname = usePathname();

    const handleMouseMove = throttle((event: React.MouseEvent) => {
        console.log(1);
        if (visibility) {
            return;
        }

        setPosition({ x: event.clientX - 83, y: event.clientY - 78 });
        setVisibility(true);
    }, 1000);

    const handleMouseLeave = () => {
        console.log('saiu');
        setVisibility(false);
    };

    const botaoCliqueCalendario = (dia: number) => {
        const dataEnviar = new Date(ano, mesAtual, dia)
            .toJSON()
            .substring(0, 10);

        console.log(pathname);

        push(`${pathname}/cadastraragenda?data=${dataEnviar}`);
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
            <Header titulo={'Calendário'} />

            <div className={style.calendario}>
                <div
                    style={{
                        display: 'flex',
                        paddingTop: '10px',
                        minWidth: '100%',
                        justifyContent: 'space-between',
                        paddingBottom: '10px'
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
                        style={{ fontSize: 'min(3.5vw, 1rem)' }}
                    />
                    <div
                        style={{
                            flex: 1,
                            whiteSpace: 'nowrap',
                            fontSize: 'min(3.5vw, 20px)',
                            alignSelf: 'center',
                            fontWeight: '700',
                            textAlign: 'center'
                        }}
                    >{`${mesesDoAno[mesAtual]} de ${ano}`}</div>

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
                        style={{ fontSize: 'min(3.5vw, 1rem)' }}
                    />
                </div>
                {forEachEnum(DiaDaSemana, ({ value, label }) => (
                    <div
                        className={style.diaSemanacalendario}
                        key={label}
                    >
                        {obterDescricaoDiaDaSemana(value)}
                    </div>
                ))}
                {/* dia fake */}
                {Array.from({ length: diasMesAnterior }, (_, chavinha) => {
                    return (
                        <div
                            className={style.diaCalendarioFake}
                            key={Math.floor(Math.random() * 99999999999)}
                        >
                            <div className={style.fakeDia}></div>
                        </div>
                    );
                })}

                {Array.from({ length: diasDoMes[mesAtual] }, (_, index) => {
                    return (
                        <div
                            className={style.diaCalendario}
                            key={index}
                        >
                            <button
                                className={style.celulaCalendario}
                                onClick={event =>
                                    botaoCliqueCalendario(index + 1)
                                }
                                onMouseEnter={handleMouseMove}
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
                    visibility: visibility ? 'visible' : 'hidden',
                    height: 'min-content',
                    width: 'min-content',
                    fontSize: '12px',
                    border: '1px solid #c9caca',
                    borderRadius: '1rem',
                    position: 'absolute',
                    display: 'inline-block',
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    textAlign: 'justify',
                    padding: '1rem',
                    wordWrap: 'break-word',
                    background: '#b4b4b4',
                    transition: 'all 0.3s linear',
                    pointerEvents: 'none'
                }}
            >
                Dia 12 tem 2 agendamentos
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

type CallbackFunction = (...args: any[]) => void;

function throttle(
    callback: CallbackFunction,
    delay: number = 1000
): CallbackFunction {
    let shouldWait: boolean = false;

    return (...args: any[]): void => {
        if (shouldWait) return;

        callback(...args);
        shouldWait = true;
        setTimeout(() => {
            shouldWait = false;
        }, delay);
    };
}
