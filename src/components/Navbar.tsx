import React, {CSSProperties} from 'react';

export default function Navbar(){
    return (
        <div className="navbarHolder" style={navStyle}>
            <h1 >React Play</h1>
        </div>
    )
};

const navStyle: CSSProperties = {
    backgroundColor: "black",
    color: "white",
    display: "flex",
    justifyContent: "center",
    margin: "0 0 0.5rem 0"
};