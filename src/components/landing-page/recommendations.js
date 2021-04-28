import React,{useEffect} from "react";
import {connect} from "react-redux";
import recommendedActions from "../../actions/recommendation-action"
import {Grid, Typography} from "@material-ui/core";
import ImgMediaCard from "../utils/imageCard";
import {makeStyles} from "@material-ui/core/styles";
import Spinner from "../utils/spinner";

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
        props.findRecommended()
    }

    const userRecommendations=()=>{

        if(props.recommendedEvents.eventIds.eventIds){
            if (props.recommendedEvents.eventIds.eventIds[0])
                props.findEventsByEvent(props.recommendedEvents.eventIds.eventIds[0])
            if (props.recommendedEvents.eventIds.eventIds[1])
                props.findEventByPerformer(props.recommendedEvents.eventIds.eventIds[1])
        }
    }

    const getEventIds=async ()=>{
        await props.findEventsForUser(props.session.user.id)
    }

    useEffect(()=>{
        if(props.session.userLoggedin)
            getEventIds()
        else
            props.clearRecommendations()

    },[props.session.userLoggedin])

    useEffect(()=>{
        userRecommendations()
    },[props.recommendedEvents.eventIds])

    return(
        <div>{

            !props.loading&&
            <>
                <div style={{margin: '2em'}}>
                    {
                        props.recommendedEvents.eventsByPerformer.length > 0 &&
                        <Typography variant='h3'>More events like {props.recommendedEvents.eventIds.eventNames[1]} </Typography>
                    }
                    <div className={classes.root}>
                        <Grid container direction='row' spacing={3}>
                            {
                                props.recommendedEvents.eventsByPerformer.length > 0 &&
                                props.recommendedEvents.eventsByPerformer.map(eve => {
                                    return (
                                        <Grid key={eve.id} item className={classes.paper}>
                                            <ImgMediaCard event={eve}/>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </div>
                </div>
                <div style={{margin: '2em'}}>
                    {
                        props.recommendedEvents.eventsByEvent.length>0&&
                        <Typography variant='h3'>More events like {props.recommendedEvents.eventIds.eventNames[0]} </Typography>
                    }
                    <div className={classes.root}>
                        <Grid container direction='row' spacing={3} >
                            {
                                props.recommendedEvents.eventsByEvent.length>0 &&
                                props.recommendedEvents.eventsByEvent.map(eve=>{
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
                <div style={{margin: '2em'}}>
                    {
                        props.location&&
                        <Typography variant='h3'>Events Around {props.location}</Typography>
                    }
                    <div className={classes.root}>
                        <Grid container direction='row' spacing={3} >
                            {
                                props.recommendedEvents.recommendedEvents &&
                                props.recommendedEvents.recommendedEvents.map(eve=>{
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
                <div style={{margin: '2em'}}>
                    {
                        <Typography variant='h3'>Recommendations</Typography>
                    }
                    <div className={classes.root}>
                        <Grid container direction='row' spacing={3} >
                            {
                                props.recommendedEvents.events &&
                                props.recommendedEvents.events.map(eve=>{
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
            </>}
            {
                props.loading&&
                    <div style={{margin: '2em'}}>
                    <Typography variant='h3'>Recommendations</Typography>
                        <Spinner/>
                    </div>
            }
        </div>
    )
}

const stmp=(state)=>({
    recommendedEvents: state.recommended,
    location: state.navBarReducer.location,
    session: state.sessionReducer,
    loading: state.navBarReducer.loading

})

const dtmp=(dispatch)=>({
    findRecommended: ()=> recommendedActions.findRecommended(dispatch),
    findRecommendedOnLocation: (location) => recommendedActions.findRecommendedonLocation(dispatch,location),
    findEventsForUser: (userId) => recommendedActions.findEventsforUserId(dispatch,userId),
    findEventsByEvent: (eventId) => recommendedActions.findRecommendedByEvent(dispatch,eventId),
    findEventByPerformer: (pid)=> recommendedActions.findRecommendedByPerformer(dispatch,pid),
    clearRecommendations: ()=> recommendedActions.clearRecommendations(dispatch)
})

export default connect(stmp,dtmp)(Recommendations);