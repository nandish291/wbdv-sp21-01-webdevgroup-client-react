import React from 'react';
import './profile-style.css'

const Media = ({pictures}) => {

    return(
        <div class="container-fluid">
            <div class="row">
                {pictures.map((picture, ndx) =>
                    <div class="col-sm-4">
                        <img src={picture} class="media" />
                    </div>)
                }
            </div>
        </div>
    )

}

export default Media