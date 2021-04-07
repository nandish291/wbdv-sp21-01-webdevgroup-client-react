import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import img from "./1_wjfSFGr3OzwP4I6nQ12EvQ.png"

// card imports
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const EventCard = (
    {
        id,
        name,
        venue,
        location

    }
) => {

    const useStyles = makeStyles({
        root: {
            maxWidth: 345,
        },
        media: {
            height: 140,
        },

    });

    const classes = useStyles();

    return (

            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={img}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        View Event
                    </Button>
                    <Button size="small" color="primary">
                        I'm going
                    </Button>
                </CardActions>
            </Card>
    );
}

export default EventCard