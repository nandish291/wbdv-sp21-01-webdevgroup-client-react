import React, {useEffect}  from 'react'
import {Link, useParams} from "react-router-dom";
import pic from '../../coldplay.png'
import eventService, {findEventById} from "../../services/event-service";
import {combineReducers, createStore} from "redux";
import {Provider,connect} from "react-redux";
import './event-details.css';
import Moment from 'moment';


const EventDetails = (
    {
        event,
        findEventById
    }
) =>
{

    Moment.locale('en');
    var dt = event.eventDateLocal;

    const {eventId} = useParams()

    useEffect(() => {
        // alert(courseId)
        findEventById(eventId)
    }, [])

    return (
        <div className="container">


            <br/>

            {/*// Event details*/}
            <div className="row">
                <div className="col-6">

                    {event!==undefined &&
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Event Name : <b>{event.name}</b> </h5>
                            <p className="card-text">This is a great concert which usually involves 1000+ attendees.
                                Every year they perform at this festival just for the fans.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Artist: {

                                !(event.ancestors === undefined)&&
                                event.ancestors.performers.map(p => <b>{p.name}</b>)

                            }</li>
                            <li className="list-group-item">Venue: <b>
                                {

                                    !(event.venue === undefined)&&
                                    event.venue.name

                                }
                                </b>
                            </li>
                            <li className="list-group-item">Date: <b>{Moment(dt).format('MM-DD-YYYY')}</b></li>
                            <li className="list-group-item">Time: <b>{Moment(dt).format('HH:mm')}</b></li>
                        </ul>
                    </div>
                    }


                </div>
                <div className="col-6">

                    <div className="card h-100">
                        <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png"
                             className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-3">
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                                            <label className="form-check-label"
                                                   htmlFor="flexSwitchCheckDefault">Interested</label>
                                    </div>

                                </div>
                                <div className="col-3">
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox"
                                               id="flexSwitchCheckDefault1"/>
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
    )
}


const stpm = (state) => {
    return {
        event: state.eventReducer.event
    }
}
const dtpm = (dispatch) => {
    return {
        findEventById: (eid) => {
            eventService.findEventById(eid)
                .then(event => {
                    console.log(event);
                    dispatch({
                        type: "FIND_EVENT_BY_ID",
                        event: event
                    })
                })
        }
    }
}

export default connect(stpm, dtpm)
(EventDetails)