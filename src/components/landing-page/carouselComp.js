import React,{useEffect} from "react";
import{connect} from "react-redux";
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

import ImageContainer from "../utils/imagecontainer";
import {Carousel} from "react-responsive-carousel";
import carouselActions from "../../actions/carousel-actions";
import {Grid, Typography} from "@material-ui/core";
import ImgMediaCard from "../utils/imageCard";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const CarouselComp=(
    props
)=>{
    const classes=useStyles();
    useEffect(()=>
        props.findTrending(),[]
    )
    return(
            <div style={{margin: '2em'}}>
                <Typography variant='h3'>Trending events</Typography>
                <div className={classes.root}>
                    <Grid container direction='row' spacing={3} >
                        {
                            props.events &&
                            props.events.map(eve=>{
                                return(
                                    <Grid key={eve.id} item className={classes.paper}>
                                        <ImgMediaCard event={eve}/>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </div>
            </div>
    )
}

const stmp= (state)=>({
    events: state.carousel.events
})

const dtmp=(dispatch)=>({
    findTrending:()=> carouselActions.findTrending(dispatch)
})

export default connect(stmp,dtmp)(CarouselComp);