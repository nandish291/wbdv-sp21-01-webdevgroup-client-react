import React from 'react'
import EventCard from "./event-card";

import {makeStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
// import tileData from './tileData';

const EventGrid = (
    {
        events
    }
) => {

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
        <>
            <div>
                <h2>Upcoming Events</h2>
            </div>
            {/*<div className={classes.root}>*/}
            {/*    <GridList cellHeight={300} className={classes.gridList} cols={2.5}>*/}
            {/*        {events.map((event) => (*/}
            {/*            <GridListTile key={event.id}>*/}
            {/*                <EventCard title={event.title}*/}
            {/*                           event={event}*/}
            {/*                           venue={event.venue}*/}
            {/*                           location={event.location}/>*/}
            {/*                <GridListTileBar*/}
            {/*                    // title={event.title}*/}
            {/*                    classes={{*/}
            {/*                        root: classes.titleBar,*/}
            {/*                        title: classes.title,*/}
            {/*                    }}*/}
            {/*                    actionIcon={*/}
            {/*                        <IconButton aria-label={`star ${event.title}`}>*/}
            {/*                            <StarBorderIcon className={classes.title}/>*/}
            {/*                        </IconButton>*/}
            {/*                    }*/}
            {/*                />*/}
            {/*            </GridListTile>*/}
            {/*        ))}*/}


            {/*    </GridList>*/}
            {/*</div>*/}
        </>
    )


    // <div>
    //     <div className="row">
    //         {
    //             events.map(event =>
    //                 <div className="col-2">
    //                 </div>
    //             )
    //         }
    //     </div>
    // </div>
}

export default EventGrid