import React, {useEffect,useState} from 'react'
import {connect} from 'react-redux'
import {Link, useParams,useHistory} from "react-router-dom";
import UserRow from "./user-row";

const AdminDashBoard = (
    {
        // events=[],
        // searchedEvents=[],
        // getAllEvents,
        // getAllEventsByName
    }) => {
    // const [searchTitle, setSearchTitle] = useState("")
    // const [searching, setSearching] = useState(false)
    // const history = useHistory()
    //
    // useEffect(() => {
    //     // alert(courseId)
    //
    //     getAllEvents()
    //
    // }, [])
    return(
        <div className="container">
            <h1>Admin Dashboard</h1>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-header">
                            <ul className="nav nav-tabs card-header-tabs">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="true" href="#">Users</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="#">Events</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="card-body">

                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Password</th>
                                    <th scope="col">DOB</th>
                                    <th scope="col"></th>
                                </tr>
                                </thead>
                                <tbody>
                                <UserRow/>


                                </tbody>
                            </table>

                        </div>


                    </div>
                </div>
            </div>
        </div>
    )

}

// const stpm = (state) => {
//     return {
//         events: state.eventReducer.events,
//     }
// }
// const dtpm = (dispatch) => {
//     return {
//         getAllEvents: () => {
//             eventService.getAllEvents()
//                 .then(events => {
//                     console.log(events["events"]);
//                     dispatch({
//                         type: "GET_ALL_EVENTS",
//                         events: events["events"]
//                     })
//                 })
//         },
//         getAllEventsByName: (name) => {
//             eventService.getAllEventsByName(name)
//                 .then(events => {
//                     console.log(events["events"]);
//                     dispatch({
//                         type: "GET_ALL_EVENTS_BY_NAME",
//                         events: events["events"]
//                     })
//                 })
//         }
//     }
// }

// export default connect(stpm, dtpm)
// (EventTable)

export default AdminDashBoard