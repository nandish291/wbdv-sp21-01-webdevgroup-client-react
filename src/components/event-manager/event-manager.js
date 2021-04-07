import React, {useState} from 'react'
import {Link, Route, useParams} from "react-router-dom";
import {combineReducers, createStore} from "redux";
import {Provider,connect} from "react-redux";
import eventReducer from "../../reducers/event-reducer";

import EventTable from "../event-table/event-table";
import EventDetails from "../event-details/event-details";

const reducer = combineReducers({
    eventReducer: eventReducer,
})

const store = createStore(reducer)


const EventManager = () => {

    return(
        <div>
            <Provider store={store}>

                <Route path="/events/search/:keyword" exact={true}>

                    <EventTable searching={true}/>
                </Route>


                <Route path="/events" exact={true} >

                    <EventTable/>
                </Route>



                <Route path={[
                    "/events/:eventId"]}
                       exact={true}>
                    <EventDetails />

                </Route>
            </Provider>
        </div>

    )
}

export default EventManager
