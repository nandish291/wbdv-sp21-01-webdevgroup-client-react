import React from "react";
import {Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
    imageText:{
        position: 'relative',
        bottom: '8em',
        color: 'white',
        fontFamily: 'Georgia, serif',
        textAlign: "left",
        fontSize: 'x-large',
        paddingLeft: '1em'
    }
}));


const ImageContainer=({src,eve,height,width,padding,recommendation=false})=>{
    const classes = useStyles();
    const style={height,width,padding}
    // console.log("category: ",eve)
    return(
        <Link to={`event/${eve.id}`}>
            <Box component="span">
                <img src={src} style={style} alt="Event"/>
                {
                    eve!==undefined && !recommendation &&
                    <p className="legend">{eve.name}</p>}
                {/*{*/}
                {/*    recommendation &&*/}
                {/*    <p>{eve.name}</p>}*/}
            </Box>
        </Link>
    )
}

export default ImageContainer;