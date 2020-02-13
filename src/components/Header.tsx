import React, { CSSProperties } from 'react';

export function Header() {
    return(
        <div style={header}>
            <h1 style={headerItem}>React Play!</h1>
        </div>
    )
};

const header: CSSProperties = {
    height: '4em',
    background: 'black',
    color: '#E1E1E1',
    display: 'flex',
    alignItems: 'streach',
    padding: '0 1em'
};

const headerItem: CSSProperties = {
    display: 'flex',
    alignItems: 'center'
};