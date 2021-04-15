import React,{useEffect} from "react";
import PrimarySearchAppBar from "./utils/navBar";
import {connect} from "react-redux";
import searchActions from "../actions/search-actions";
import queryString from "querystring";
import _ from "lodash";
import ImgMediaCard from "./utils/imageCard";
import {Grid} from "@material-ui/core";
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

const SearchResults=({location,search,events,searchValue})=>{
    const classes = useStyles();
    useEffect(()=>comppnentDidMount(),[])

    const comppnentDidMount=(async)=>{
        const searchText=queryString.parse(_.trimStart(location.search,'?'));
        search(searchText.name);
    }

    return(<div>
        <PrimarySearchAppBar/>
        <div>
            <h1>Search Results</h1>
            <div className={classes.root}>
            <Grid container direction='row' spacing={3}>
            {
                events &&
                events.map(eve=>{
                    return(
                        <Grid key={eve.id} item  className={classes.paper}>
                            <ImgMediaCard event={eve}/>
                            </Grid>
                       )
                })
            }
            </Grid>
            </div>
            {
                (!events || events.length===0) &&
                    <h2>Sorry, No events found</h2>
            }
        </div>
    </div>)
}

const mstp=(state)=>({
    events: state.search.events,
    searchValue: state.search.searchText
})

const dstp=(dispatch)=>({
    search:(searchText)=> searchActions.findEventsByName(dispatch,searchText)
})


export default connect(mstp,dstp)(SearchResults);