import React, { CSSProperties} from "react";

import Navbar from "../components/Navbar";
import Content from "../components/Content";

export default function Layout(){
    return (
        <div className="layoutHolder" style={layout}>
            <Navbar />
            <Content />
        </div>
    )
};

const layout : CSSProperties = {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    backgroundColor: "#303030"
};