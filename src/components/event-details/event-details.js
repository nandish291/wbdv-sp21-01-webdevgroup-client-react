import React, {useEffect}  from 'react'
import {Link, useParams} from "react-router-dom";
import eventService from "../../services/event-service";
import commentService from "../../services/comment-service";
import userService from "../../services/user-service";
import {connect} from "react-redux";
import './event-details.css';
import Moment from 'moment';
import PrimarySearchAppBar from "../utils/navBar";

const isEventInInterested=(event,user)=>{
    if(user.interested)
    {
        return user.interested.find(e=>e.id===event.id)? true:false
    }
    return false
}

const isEventInAttended=(event,user)=>{
    if(user.attending)
    {
        return user.attending.find(e=>e.id===event.id)? true:false
    }
    return false
}


const EventDetails = (
    {
        event,
        user,
        findEventById,
        findUserById,
        addEventToInterestedForUser,
        deleteEventFromInterestedForUser,
        addEventToAttendingForUser,
        deleteEventFromAttendingForUser,
        findCommentsByEvent
    }
) =>
{

    Moment.locale('en');
    var dt = event.datetime_local;

    const {eventId} = useParams()

    useEffect(() => {
        // alert(courseId)
        findUserById(1)
        findEventById(eventId)
        findCommentsByEvent(eventId)
    }, [])

    console.log("events: ",event)

    return (<>
        <PrimarySearchAppBar/>
        <div className="container">


            <br/>

            {/*// Event details*/}
            <div className="row">
                <div className="col-6">

                    {<div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Event Name : <b>{event.title}</b></h5>
                            <p className="card-text">Event: {event.id} This is a great concert which usually involves 1000+ attendees.
                                Every year they perform at this festival just for the fans.</p>
                        </div>
                        {
                            event &&
                            <ul className="list-group list-group-flush">
                            <li className="list-group-item">Artist: {
                                event.performers &&
                                event.performers.map(p => <b>{p.name}; </b>)

                                }
                            </li>
                            <li className="list-group-item">Venue: <b>
                                {
                                    event.venue &&
                                    event.venue.name

                                }
                            </b>
                            </li>
                                {/*{Moment(dt).format('MM-DD-YYYY')}*/}
                            <li className="list-group-item">Date: <b>{event.datetime_utc}</b></li>
                            {/*<li className="list-group-item">Time: <b>{Moment(dt).format('HH:mm')}</b></li>*/}
                            </ul>
                        }
                    </div>
                    }


                </div>
                <div className="col-6">

                    <div className="card h-100">
                        <img src={
                            event.performers &&
                            event.performers[0].image
                        }
                             className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-3">
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"

                                               onChange={
                                                   ()=>{
                                                       if(isEventInInterested(event,user))
                                                       {
                                                           deleteEventFromInterestedForUser(user.id,event.id)
                                                       }else{
                                                           addEventToInterestedForUser(user.id,event)
                                                       }

                                                   }
                                               }
                                               checked={isEventInInterested(event,user)}/>
                                        <label className="form-check-label"
                                               htmlFor="flexSwitchCheckDefault">Interested</label>
                                    </div>

                                </div>
                                <div className="col-3">
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox"
                                               id="flexSwitchCheckDefault1"
                                               onChange={
                                                   ()=>{
                                                       if(isEventInAttended(event,user))
                                                       {
                                                           deleteEventFromAttendingForUser(user.id,event.id)
                                                       }else{
                                                           addEventToAttendingForUser(user.id,event)
                                                       }

                                                   }
                                               }
                                               checked={isEventInAttended(event,user)}/>
                                        <label className="form-check-label"
                                               htmlFor="flexSwitchCheckDefault1">Attending/Attended</label>
                                    </div>

                                </div>

                            </div>


                        </div>
                    </div>

                </div>
            </div>


            <br/>

            {/*// comment, photos section */}
            <div className="row">

                <div className="col">

                    <div className="card">
                        <div className="card-header">
                            <ul className="nav nav-tabs card-header-tabs">
                                <li className="nav-item">
                                    <Link className="nav-link active" to="#">Comments</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">Photos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">Videos</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="card-body">

                            <div className="row">
                                <div className="d-flex flex-column col">
                                    <div className="coment-bottom bg-white p-2 px-4">
                                        <div className="d-flex flex-row add-comment-section mt-4 mb-4">
                                            <img
                                                className="img-fluid img-responsive rounded-circle mr-2"
                                                src="https://i.imgur.com/qdiP4DB.jpg" width="38"/> &nbsp;
                                            <input type="text" className="form-control mr-3" placeholder="Add comment"/>
                                            &nbsp;
                                            <button className="btn btn-primary" type="button">Comment</button></div>
                                        <div className="commented-section mt-2">
                                            <div className="d-flex flex-row align-items-center commented-user">
                                                <h5 className="mr-2">Corey oates</h5> <span
                                                className="dot mb-1"></span><span className="mb-1 ml-2">4 hours ago</span>
                                            </div>
                                            <div className="comment-text-sm">
                                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                                ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                                            </div>
                                            <div className="reply-section">
                                                <div className="d-flex flex-row align-items-center voting-icons">
                                                    <span className="ml-2">10</span>
                                                    <span className="dot ml-2"></span>
                                                    <Link><h6 className="ml-2 mt-1">Like</h6></Link>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>

                </div>
            </div>

            <br/>

        </div>
        </>
    )
}


const stpm = (state) => {
    return {
        event: state.eventReducer.event,
        user: state.userReducer.user
    }
}
const dtpm = (dispatch) => {
    return {
        findEventById: (eid) => {
            eventService.findEventById(eid)
                .then(eventdetails => {
                    console.log(eventdetails);
                    dispatch({
                        type: "FIND_EVENT_BY_ID",
                        event: eventdetails.event
                    })
                })
        },
        findUserById: (uid) =>{
            userService.findUserById(uid)
                .then(u => {
                    console.log(u);
                    dispatch({
                        type: "FIND_USER_BY_ID",
                        user: u
                    })
                })
        },
        addEventToInterestedForUser: (uid,event) => {
            userService.addEventToInterestedForUser(uid, event)
                .then(user => dispatch({
                    type: "ADD_EVENT_TO_INTERESTED_FOR_USER",
                    user: user
                }))
        },
        deleteEventFromInterestedForUser: (uid,eid) => {
            userService.deleteEventFromInterestedForUser(uid,eid)
                .then(user => dispatch({
                    type: "DELETE_EVENT_FROM_INTERESTED_FOR_USER",
                    user: user
                }))
        },
        addEventToAttendingForUser: (uid,event) => {
            userService.addEventToAttendingForUser(uid, event)
                .then(user => dispatch({
                    type: "ADD_EVENT_TO_ATTENDING_FOR_USER",
                    user: user
                }))
        },
        deleteEventFromAttendingForUser: (uid,eid) => {
            userService.deleteEventFromAttendingForUser(uid,eid)
                .then(user => dispatch({
                    type: "DELETE_EVENT_FROM_ATTENDING_FOR_USER",
                    user: user
                }))
        },
        findCommentsByEvent: (eid) => {
            commentService.findCommentsForEvent(eid)
                .then(eventdetails => {
                    console.log(eventdetails);
                    dispatch({
                        type: "FIND_COMMENTS_FOR_EVENT",
                        comments: eventdetails.comments
                    })
                })
        },
        addCommentForEvent: (comment) => {
            commentService.addCommentForEvent(comment)
                .then(status => dispatch({
                    type: "ADD_COMMENT_BY_USER_FOR_EVENT",
                    comment: comment
                }))
        },
        updateCommentForEvent: (comment) => {
            commentService.updateCommentForEvent(comment)
                .then(user => dispatch({
                    type: "UPDATE_COMMENT",
                    comment:comment
                }))
        },
        

    }
}

export default connect(stpm, dtpm)
(EventDetails)