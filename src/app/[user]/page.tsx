import React from 'react';

import { OpenSideMenu } from './components/SideBarMenuMobile/SideBarMenuMobile';

export default function Painel() {
    return (
        <div className="w-full max-w-screen-xl h-screen flex flex-col justify-center items-center">
            <OpenSideMenu />
            <h1>CALENDÁRIO</h1>
        </div>
    );
}
