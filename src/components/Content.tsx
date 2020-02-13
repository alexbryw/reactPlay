import React, {CSSProperties} from 'react';
import SectionItem from "./SectionItem";

export default function Content(){
    return(
        <div>
            <SectionItem 
                imgURL="https://upload.wikimedia.org/wikipedia/commons/c/c7/Boulton_and_Watt_centrifugal_governor-MJ.jpg"
                altText="A" />
            <SectionItem imgURL="B" altText="b"/>
            <SectionItem imgURL="C" altText="c"/>
        </div>
    )
}