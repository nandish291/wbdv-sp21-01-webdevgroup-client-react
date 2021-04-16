import React from 'react';
import './profile-style.css'

const Event = ({events}) => {

 return(
  <div class="container-fluid">
    <div class="row">
    {events.map((event, ndx) =>
                  <div class="col-sm-4">
                   <img src={event} class="events" />
                  </div>)
    }
    </div>
  </div>
 )

}

export default Event