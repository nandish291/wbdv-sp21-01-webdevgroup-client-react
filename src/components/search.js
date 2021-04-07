// jose’s code in working state and it does actual search not just london

import React, {useState, useEffect} from 'react'
import eventService from '../services/event-service'
import {Link, useParams, useHistory, Route} from "react-router-dom";


import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import EventCard from "./event-grid/event-card";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import {makeStyles} from "@material-ui/core/styles";
import LogIn from "../login";

const Search = () => {

    const {title} = useParams();
    const [searchTitle, setSearchTitle] = useState("");
    const [results, setResults] = useState({Search: []});
    const [events, setEvents] = useState([])
    const history = useHistory();

    useEffect(() => {
        setSearchTitle(title)
        if (title) {
            eventService.findEventByTitle(title)
                .then(results => setResults(results))
            console.log(results)
        }
    }, [title])

    const search = (searchTitle) => {
        eventService.findEventByTitle(searchTitle)
            .then(events => {
                events = events.events
                console.log(events)
                setEvents(events)
            })
    }

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


            <Route path={["/login"]}
                   exact={true}
                   render={() =>
                       <LogIn/>}>
            </Route>

            <button>
                <Link to="/login">Login</Link>
            </button>

            <h1>Event Search</h1>
            <input
                onChange={(event) => {
                    setSearchTitle(event.target.value)
                }}
                className="form-control"
                value={searchTitle}/>
            <button
                onClick={() => {
                    // history.push(`/search/${searchTitle}`)
                    search(searchTitle)

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
                                    <EventCard title={event.title}
                                               id={event.id}
                                    />
                                    <GridListTileBar
                                        classes={{
                                            root: classes.titleBar,
                                            title: classes.title,
                                        }}
                                        actionIcon={
                                            <IconButton aria-label={`star ${event.title}`}>
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


            <div className="container">
                <div className="col-md-6">
                    <h3>Login</h3>
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Your Email *" value=""/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Your Password *" value=""/>
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btnSubmit" value="Sign In"/>
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btnSubmit" value="Sign In With Social"/>
                        </div>
                        <div className="form-group">
                            <a href="#" className="ForgetPwd">Forget Password?</a>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Search
