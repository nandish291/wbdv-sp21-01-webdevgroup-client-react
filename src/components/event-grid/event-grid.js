import React from 'react'
import EventCard from "./event-card";

import {makeStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {Link, Route} from "react-router-dom";
import LogIn from "../../login";
import Search from "../search";

// import tileData from './tileData';

class EventGrid
    extends React.Component {

    state = {
        events: [],
    }

    render() {

        return (
            <div>
                <h2>Upcoming Events</h2>

                <Route path="/events/search" exact={true}>
                    <Search/>
                </Route>

                <Link to="events/login">
                    <i className="fas fa-2x fa-sign-in-alt"/>
                </Link>

                <br/>

                <Link to="events/search">
                    <i className="fas fa-2x fa-search"/>
                </Link>

            </div>
        )

    }
}

export default EventGrid