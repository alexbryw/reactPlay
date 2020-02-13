import React, {CSSProperties} from 'react';

export default function Navbar(){
    return (
        <div style={navStyle}>
            <h1 >React Play</h1>
        </div>
    )
};

const navStyle: CSSProperties = {
    backgroundColor: "black",
    color: "white",
    display: "flex",
    justifyContent: "center"
};