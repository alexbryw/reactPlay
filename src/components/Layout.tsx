import React, { CSSProperties} from "react";

import Navbar from "../components/Navbar";
import Content from "../components/Content";

export default function Layout(){
    return (
        <div>
            <Navbar />
            <Content />
        </div>
    )
};

const layout : CSSProperties = {
    backgroundColor: "green",
    height: "100%"
};