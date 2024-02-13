import { OpenSideMenu } from "../SideBarMenuMobile/SideBarMenuMobile";

interface HeaderProps {
    titulo: string;
}

export default function Header({ titulo }: Readonly<HeaderProps>) {
    return (
        <div>
            <OpenSideMenu />
            <div
                style={{
                    fontSize: 'min(10vw, 2rem)',
                    fontWeight: '700',
                    minHeight: '75px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                {titulo}
            </div>
        </div>
    );
}
