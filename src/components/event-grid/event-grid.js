import React from 'react'
import EventCard from "./event-card";

const EventGrid = (
    {
        events
    }
) => {

    return (
        <div>
            <h2>Event Grid</h2>

            {
                events.map(event =>
                    <EventCard key={event.id}
                               title={event.title}
                               event={event}
                    />
                )
            }

        </div>
    )
}

export default EventGrid