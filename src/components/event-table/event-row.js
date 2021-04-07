import React, {useState} from 'react'
import {Link} from "react-router-dom";

const EventRow = ({item}) => {
    const [editing, setEditing] = useState(false)
    const [cachedItem, setCahedItem] = useState(item)

    return (
        <tr>
            <td><Link to={`/events/${item.id}`}>
                {item.name}
            </Link></td>
            <td>{item.status}</td>
            <td>{item.eventDateLocal}</td>


        </tr>
    )
}

export default EventRow