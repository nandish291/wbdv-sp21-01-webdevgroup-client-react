import React from 'react'
import {Link} from "react-router-dom";

export default () =>
    <div>
        <h1>Home</h1>
        <div className="list-group">
            <Link to="events/login" className="list-group-item">
                Login
            </Link>
            <Link to="events/search" className="list-group-item">
                Search
            </Link>
            <Link to="events/signup" className="list-group-item">
                Sign Up
            </Link>
        </div>
    </div>