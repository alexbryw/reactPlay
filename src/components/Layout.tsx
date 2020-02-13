import React, { CSSProperties} from "react"

import Navbar from "../components/Navbar"

export default function Layout(){
    return (
        // html, body, body > div {
        //     height: 100%;
        //     margin: 0;
        // }
        // <div style={layout}>
        //     <h1 style={{backgroundColor:"blue"}}>height 100% funkar inte.</h1>
        // </div>
        <Navbar />
    )
};

const layout : CSSProperties = {
    backgroundColor: "green",
    height: "100%"
};