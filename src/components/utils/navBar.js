import React,{useState,useEffect} from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import RoomIcon from '@material-ui/icons/Room';
import {Link, useHistory} from "react-router-dom";
import {connect} from "react-redux";
import searchActions from "../../actions/search-actions";
import {findLocation} from "../../actions/navBar-actions";
import {logOut} from "../../services/user-service";
import userActions from "../../actions/user-actions"

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

const PrimarySearchAppBar=(props)=> {
    const sessionCheck=()=>{
        if(!props.session.user.userLoggedin)
            props.checkLogin()
    }

    useEffect(()=>
        sessionCheck(),[props.session.user.userLoggedin]
    )

    const[search,setSearch]=useState("")
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = (event) => {

        setAnchorEl(event.currentTarget);
    };

    const getLocation=async()=>{
        if('geolocation' in navigator)
        {
            navigator.geolocation.getCurrentPosition(response=> props.findUserLocation(response.coords));

        }
    }

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const history = useHistory()

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
           <Link style={{textDecoration:'none',color:'black'}}
                 to="/login">
               <MenuItem onClick={handleMenuClose}>Log In</MenuItem>
           </Link>
           <Link style={{textDecoration:'none',color:'black'}}
                 to="/profile">
               <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
           </Link>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
           <Link style={{textDecoration:'none',color:'black'}}>
               <MenuItem onClick={() => {
                   logOut()
                   history.push("/")
               }}
               >
                   Log Out
               </MenuItem>
           </Link>
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <Link to="/" style={{ color: 'white' }}>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <HomeIcon/>
                    </IconButton>
                    </Link>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Event Tracker
                    </Typography>
                    <div className={classes.search}>

                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={event => {
                                setSearch(event.target.value)
                            }}
                            value={search}
                        />
                    </div>
                    <Link to={`/search?name=${search}`}  style={{ color: 'white' }}>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                        onClick={()=> {
                            props.searchUpdate(search)
                            props.searchfunction(search)
                        }}
                    >
                        <SearchIcon/>
                    </IconButton>
                    </Link>

                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                        onClick={getLocation}
                    >
                        <RoomIcon/>
                        <Typography variant="subtitle1" className={classes.title}>
                            {props.location}
                        </Typography>
                    </IconButton>

                    <div className={classes.grow} />
                    <div >
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMenu}
        </div>
    );
}

const mtsp=(state)=>({
    searchText: state.search.searchText,
    location: state.navBarReducer.location,
    session: state.sessionReducer
})

const dtsp=(dispatch)=>({
    searchfunction:(text)=> searchActions.findEventsByName(dispatch,text),
    searchUpdate: (text) => searchActions.searchTextUpdate(dispatch,text),
    findUserLocation: (location)=> findLocation(dispatch,location),
    checkLogin:()=> userActions.checkLogin(dispatch)
})

export default connect(mtsp,dtsp)(PrimarySearchAppBar);
