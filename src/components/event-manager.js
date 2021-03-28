import React from 'react'
import {Route} from 'react-router-dom'
import EventGrid from "./event-grid/event-grid";
import RecommendationGrid from "./recommendations/recommendation-grid";

class EventManager
    extends React.Component {

    state = {
        events: [
            {title: "Concert 1", venue: "Staples Center", location: "Los Angeles", date: "1/1/21", id: 123},
            {title: "Concert 2", venue: "Staples Center", location: "Los Angeles", date: "1/1/21", id: 234},
            {title: "Concert 3", venue: "Staples Center", location: "Los Angeles", date: "1/1/21", id: 345},
            {title: "Concert 4", venue: "Staples Center", location: "Los Angeles", date: "1/1/21", id: 456},
            {title: "Concert 5", venue: "Staples Center", location: "Los Angeles", date: "1/1/21", id: 567},
        ],
    }

    // componentDidMount = () => findAllEvents()
    //     .then(events => this.setState({events}))

    render() {
        return (
            <div>


                <div>
                    <h1>Nav Bar</h1>
                </div>

                <div>
                    <EventGrid events={this.state.events}/>
                </div>

                <div>
                    <RecommendationGrid/>
                </div>


            </div>
        )
    }
}

export default EventManager