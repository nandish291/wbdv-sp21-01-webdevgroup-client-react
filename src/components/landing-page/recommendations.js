import React,{useEffect} from "react";
import {connect} from "react-redux";
import recommendedActions from "../../actions/recommendation-action"
import {Grid} from "@material-ui/core";
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
const Recommendations=(props)=>{
    const classes = useStyles();
    useEffect(()=> {
        recommendations()
    },[props.location])
    const recommendations=()=>{
        if(props.location.length>1) {
            props.findRecommendedOnLocation(props.location);
        }
        else {
            props.findRecommended()
        }
    }

    return(

        <div>
            {
                !props.location&&
                <h1>recommendations</h1>
            }
            {
                props.location&&
                <h1>Events Around {props.location}</h1>
            }
            <div className={classes.root}>
                <Grid container direction='row' spacing={3} >
                    {
                        props.recommendedEvents &&
                        props.recommendedEvents.map(eve=>{
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

const stmp=(state)=>({
    recommendedEvents: state.recommended.recommendedEvents,
    location: state.navBarReducer.location
})

const dtmp=(dispatch)=>({
    findRecommended: ()=> recommendedActions.findRecommended(dispatch),
    findRecommendedOnLocation: (location) => recommendedActions.findRecommendedonLocation(dispatch,location)
})

export default connect(stmp,dtmp)(Recommendations);