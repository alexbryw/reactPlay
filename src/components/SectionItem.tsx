import React, {CSSProperties} from 'react';

export default function SectionItem(props:secItemsIn){
    return(
        <div className="itemHolder" style={sectionItemDivStyle}>
            {/* <h1>From Section: {props.imgURL} and {props.altText}</h1> */}
            <img style={imgStyle} src={props.imgURL} alt=""/>
        </div>
    )
};

const sectionItemDivStyle: CSSProperties = {
    // height: "20em",
    // display: "flex",
    // flex: "1",
    width: "100%",
    backgroundColor: "grey",
    margin: "0.5rem 0",
    overflow: "hidden",
};

const imgStyle: CSSProperties = {
    width: "100%",
    // height: "auto"
    // maxWidth: "100%",
    // objectFit: "",
    // height: "10rem"
    // objectPosition: "50%"
    // : "center center"
    // objectPosition: "center"

}

interface secItemsIn{
    imgURL: string
    altText: string
};