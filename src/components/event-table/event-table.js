import React, {useEffect,useState} from 'react'
import {connect} from 'react-redux'
import {Link, useParams,useHistory} from "react-router-dom";
import EventRow from "./event-row";
import eventService from "../../services/event-service"

const EventTable = (
    {
        events=[],
        searchedEvents=[],
        getAllEvents,
        getAllEventsByName
    }) => {
    const [searchTitle, setSearchTitle] = useState("")
    const [searching, setSearching] = useState(false)
    const history = useHistory()

    useEffect(() => {
        // alert(courseId)

        getAllEvents()

    }, [])
    return(
        <div>
            <nav className="navbar navbar-light bg-primary">
                <div className="container">
                    <div className="row">
                        <input
                            onChange={(e) =>
                                setSearchTitle(e.target.value)}
                            value={searchTitle}
                            placeholder="Search by Name"/> &nbsp;&nbsp;&nbsp;
                        <i onClick={() => {
                            getAllEventsByName(searchTitle);
                        }} className=" fas fa-2x fa-search"></i>
                    </div>

                </div>
            </nav>

            <div className="container">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Event Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        events.map(event =>
                            <EventRow
                                key={event.id}
                                item={event}/>)
                    }

                    </tbody>
                </table>

            </div>
        </div>
        )}

const stpm = (state) => {
    return {
        events: state.eventReducer.events,
    }
}
const dtpm = (dispatch) => {
    return {
        getAllEvents: () => {
            eventService.getAllEvents()
                .then(events => {
                    console.log(events["events"]);
                    dispatch({
                        type: "GET_ALL_EVENTS",
                        events: events["events"]
                    })
                })
        },
        getAllEventsByName: (name) => {
            eventService.getAllEventsByName(name)
                .then(events => {
                    console.log(events["events"]);
                    dispatch({
                        type: "GET_ALL_EVENTS_BY_NAME",
                        events: events["events"]
                    })
                })
        }
    }
}

export default connect(stpm, dtpm)
(EventTable)