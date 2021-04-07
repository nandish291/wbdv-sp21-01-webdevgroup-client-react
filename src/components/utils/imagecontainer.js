import React from "react";

const ImageContainer=({src,height,width,padding})=>{
    const style={height,width,padding}
    return(
        <img src={src} style={style} alt="Event"/>
    )
}

export default ImageContainer;