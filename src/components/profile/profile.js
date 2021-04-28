import React, {useEffect, useState} from 'react';
import './profile-style.css'
import BasicInfo from './basic-info.js'
import PrimarySearchAppBar from "../utils/navBar";
import {Link, useParams} from "react-router-dom";
import userService from "../../services/user-service";
import {connect} from "react-redux";
import Event from "./event";
import {Typography} from "@material-ui/core";
import {SET_LOADING} from "../../actions/navBar-actions";
import Spinner from "../utils/spinner";

const Profile = (
    {
        user,
        findUserById,
        updateUser,
        session,
        loading
    }
) => {

    const {uid} = useParams();
    const [isInfoTab, setIsInfoTab] = useState(true)
    const [anonymous,setAnonymous]=useState(true)

    useEffect(() => {
        if(uid)
            findUserById(uid)
        else if(session.userLoggedin) {
            findUserById(session.user.id)
            setAnonymous(false)
        }
        if(uid==session.user.id)
        {
            setAnonymous(false)
        }

    }, [session.userLoggedin])

    return (
        <>
            <PrimarySearchAppBar/>
            {
                !loading &&
                <div className='container' style={{marginBottom: '2em'}}>
                    <br/>
                    <h1>Profile</h1>
                    <br/>
                    <div className="row">

                        <div className="card col-sm-3">
                            <br/>


                            <div className="text-center">
                                <img
                                    src="https://st.depositphotos.com/2218212/2938/i/950/depositphotos_29387653-stock-photo-facebook-profile.jpg"
                                    className="card-img-top profile-pic"/>
                            </div>

                            <div className="card-body">
                                <h5 className="card-title text-center">{user.firstName} {user.lastName}</h5>
                            </div>

                        </div>

                        <div className="col-sm">

                            <div className="card">
                                <div className="card-header">
                                    <ul className="nav nav-tabs card-header-tabs">
                                        <li className="nav-item">
                                            <Link className={`nav-link ${isInfoTab ? 'active' : ''}`}
                                                  aria-current="true" to="#"
                                                  onClick={() => setIsInfoTab(true)}>Basic Info</Link>
                                        </li>
                                        <li className="nav-item">{
                                            <Link className={`nav-link ${isInfoTab ? '' : 'active'}`} to="#"
                                                  onClick={() => setIsInfoTab(false)}
                                            >{
                                                !anonymous &&
                                                <Typography>My Events</Typography>}
                                                {
                                                    anonymous &&
                                                    <Typography>Events</Typography>
                                                }
                                            </Link>}
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-body">
                                    {
                                        isInfoTab &&
                                        <BasicInfo user={user} updateUser={updateUser} anonymous={anonymous}/>
                                    }
                                    {
                                        !isInfoTab &&
                                        <Event user={user}/>
                                    }
                                </div>
                            </div>
                        </div>

                    </div>

                </div>}
            {
                loading&&
                    <Spinner/>
            }
        </>
    )

}




const stpm = (state) => {
    return {
        user: state.userReducer.user,
        session: state.sessionReducer,
        loading: state.navBarReducer.loading
    }
}
const dtpm = (dispatch) => {
    return {
        findUserById: (uid) =>{
            userService.findUserById(uid)
                .then(u => {
                    console.log(u);
                    dispatch({
                        type: "FIND_USER_BY_ID",
                        user: u
                    })
                    dispatch({
                        type: SET_LOADING,
                        loading: false
                    })
                })
        },
        updateUser:(user)=>{
            userService.updateUser(user)
                .then(u=>{
                    dispatch({
                        type:"FIND_USER_BY_ID",
                        user: u
                    })
                })
        }
    }
}

export default connect(stpm, dtpm)
(Profile)