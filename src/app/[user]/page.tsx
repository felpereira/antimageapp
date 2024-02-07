import Image from 'next/image';
import React from 'react';

export default function Painel() {
    return (
        <div className="w-full max-w-screen-xl h-screen flex flex-col justify-center items-center">
            <Image
                src="/botaoAbrirMenu.svg"
                width={32}
                height={32}
                alt="Picture of the author"
                style={{ paddingBottom: '10px', width: '2rem', height: '2rem' }}
                priority
            />
            <h1>CALENDÁRIO</h1>
        </div>
    );
}
