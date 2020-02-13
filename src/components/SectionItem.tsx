import React, {CSSProperties} from 'react';

export default function SectionItem(props:secItemsIn){
    return(
        <div style={sectionItemDivStyle}>
            <h1>From Section: {props.imgURL} and {props.altText}</h1>
            <img style={sectionItemDivStyle} src={props.imgURL} alt=""/>
        </div>
    )
};

const sectionItemDivStyle: CSSProperties = {
    height: "20em",
    backgroundColor: "grey"
};

interface secItemsIn{
    imgURL: string
    altText: string
};