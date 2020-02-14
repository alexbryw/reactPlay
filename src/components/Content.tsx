import React, {CSSProperties} from 'react';
import SectionItem from "./SectionItem";

export default function Content(){
    return(
        <div className="contentHolder" style={contentStyle}>
            <SectionItem 
                // imgURL="https://upload.wikimedia.org/wikipedia/commons/c/c7/Boulton_and_Watt_centrifugal_governor-MJ.jpg"
                imgURL="../assets/img/forest1920.jpg"
                altText="A" />
            <SectionItem 
                // imgURL="https://upload.wikimedia.org/wikipedia/commons/3/3d/Le_Rhone_9C.jpg"
                imgURL="../assets/img/sky1920.jpg"
                altText="b"/>
            <SectionItem 
                // imgURL="https://upload.wikimedia.org/wikipedia/commons/5/56/J85_ge_17a_turbojet_engine.jpg"
                imgURL="../assets/img/desert1920.jpg"
                altText="c"/>
        </div>
    )
}

const contentStyle: CSSProperties = {
    display: "grid",
    height: "100%",
    gridAutoRows: "0.32fr"
    // flexDirection: "column",
    // flex: "1"
    
}