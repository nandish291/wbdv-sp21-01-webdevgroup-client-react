import React, {useState, useEffect} from 'react'
import eventService from '../services/event-service'
import {useParams, useHistory} from "react-router-dom";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import EventCard from "./event-grid/event-card";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import {makeStyles} from "@material-ui/core/styles";

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const Search = () => {


    // export default function FullWidthGrid() {
    //     const classes = useStyles();
    //
    //     return (
    //         <div className={classes.root}>
    //             <Grid container spacing={3}>
    //                 <Grid item xs={12}>
    //                     <Paper className={classes.paper}>xs=12</Paper>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6}>
    //                     <Paper className={classes.paper}>xs=12 sm=6</Paper>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6}>
    //                     <Paper className={classes.paper}>xs=12 sm=6</Paper>
    //                 </Grid>
    //                 <Grid item xs={6} sm={3}>
    //                     <Paper className={classes.paper}>xs=6 sm=3</Paper>
    //                 </Grid>
    //                 <Grid item xs={6} sm={3}>
    //                     <Paper className={classes.paper}>xs=6 sm=3</Paper>
    //                 </Grid>
    //                 <Grid item xs={6} sm={3}>
    //                     <Paper className={classes.paper}>xs=6 sm=3</Paper>
    //                 </Grid>
    //                 <Grid item xs={6} sm={3}>
    //                     <Paper className={classes.paper}>xs=6 sm=3</Paper>
    //                 </Grid>
    //             </Grid>
    //         </div>
    //     );
    // }

    const {name} = useParams();
    const [searchName, setSearchName] = useState("");
    const [results, setResults] = useState({Search: []});
    const [events, setEvents] = useState([])
    const history = useHistory();
    useEffect(() => {
        setSearchName(name)
        if (name) {
            eventService.findEventByTitle(name)
                .then(results => setResults(results))
            console.log(results)
        }
    }, [name])

    const search = (searchName) => {

        eventService.findEventByTitle(searchName)
            .then(events => {
                events = events.events
                console.log(events)
                setEvents(events)
            })
    }

    // const useStyles = makeStyles((theme) => ({
    //     root: {
    //         flexGrow: 1,
    //     },
    //     paper: {
    //         padding: theme.spacing(2),
    //         textAlign: 'center',
    //         color: theme.palette.text.secondary,
    //     },
    // }));

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
        },
        gridList: {
            flexWrap: 'nowrap',
            // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
            transform: 'translateZ(0)',
            // height: 450,
        },
        title: {
            color: theme.palette.primary.light,
        },
        titleBar: {
            background:
                'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0) 100%)',
        },
    }));

    const classes = useStyles();

    return (

        <div>

            <h1>Event Search</h1>
            <input
                onChange={(event) => {
                    setSearchName(event.target.value)
                }}
                className="form-control"
                value={searchName}/>
            <button
                onClick={() => {
                    // history.push(`/search/${searchName}`)
                    search(searchName)

                }}
                className="btn btn-primary btn-block">
                Search
            </button>
            <div className={classes.root}>

                <ul className="list-group">
                    {
                        <GridList cellHeight={300} className={classes.gridList} cols={2.5}>
                            {events.map((event) => (

                                <GridListTile key={event.id}>
                                    <EventCard name={event.name}
                                               id={event.id}
                                    />
                                    <GridListTileBar
                                        classes={{
                                            root: classes.titleBar,
                                            title: classes.title,
                                        }}
                                        actionIcon={
                                            <IconButton aria-label={`star ${event.name}`}>
                                                <StarBorderIcon className={classes.title}/>
                                            </IconButton>
                                        }
                                    />
                                </GridListTile>
                            ))}
                        </GridList>
                    }
                </ul>
            </div>
        </div>
    )
}

export default Search
