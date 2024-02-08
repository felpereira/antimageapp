interface SideBarInforUserProps {
    usuario: string;
}

export function SideBarInforUser({ usuario }: Readonly<SideBarInforUserProps>) {
    return (
        <div
            style={{
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
            <div style={{ textAlign: 'center' }}>{`Usuario: ${usuario}`}</div>
            <div style={{ textAlign: 'center' }}>{`Ultimo Login: 05/11`}</div>
        </div>
    );
}
