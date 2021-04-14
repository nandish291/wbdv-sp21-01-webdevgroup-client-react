import React, {useState, useEffect} from 'react';
import './profile-style.css'
import BasicInfo from './basic-info.js'
import PrimarySearchAppBar from "../utils/navBar";
import {Link} from "react-router-dom";

const Profile = () => {

    const user = {
        name: '',
        username: '',
        password: '',
        confirmPassword: '',
        email: ''
    }

    const [state, setState] = useState({})
    useEffect(() => {
        fetch(`http://localhost:8080/currentUser`, {
            method: 'GET',
            credentials: "include"
        }).then(response => response.json())
            .then(currentUser => setState({
                currentUser: currentUser
            })
        )
    })


    return (
        <>
            <PrimarySearchAppBar/>
            <div className="container">
                <br/>
                <h1>Profile</h1>
                Hello {state.name}
                <br/>
                <div className="row">

                    <div className="card col-3">
                        <br/>



                        <div className="text-center">
                            <img src="https://raw.githubusercontent.com/chayank-neu/wbdv-sp21-01-webdevgroup-client-react/user/shaili/profile/src/imgs/profile.jpg"
                                 className="card-img-top profile-pic" />
                        </div>

                        <div className="card-body">
                            <h5 className="card-title text-center">Shaili gandhi</h5>
                            <p className="card-text text-center">Some quick example text to build on the card title and make up the
                                bulk of the card's content.</p>
                        </div>
                    </div>

                    <div className="col-9">

                        <div className="card">
                            <div className="card-header">
                                <ul className="nav nav-tabs card-header-tabs">
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="true" to="#">Basic Info</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="#">Media</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="#">My Events</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-body">
                                <BasicInfo fname={"Shaili"}
                                           lname={"Gandhi"}
                                           email={"abd@gmail.com"}
                                           password={"123456"}
                                           dob={"2/23/1992"}
                                           gender={"male"} />
                            </div>
                        </div>

                        {/*<div className="row mt-3">*/}



                        {/*{*/}
                        {/*    /**/}
                        {/*    <Media pictures = {media} />*/}
                        {/*    <Event events = {events} />*/}
                        {/*    */}
                        {/*}*/}

                        {/*</div>*/}

                    </div>

                </div>

            </div>
        </>
    )

}

export default Profile