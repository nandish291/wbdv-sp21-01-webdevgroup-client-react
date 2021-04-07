import React from 'react';
import './profile-style.css'
import BasicInfo from './basic-info.js'
import PrimarySearchAppBar from "../utils/navBar";

const Profile = () => {

    return (
        <>
            <PrimarySearchAppBar/>
            <div>
                <h1>Profile</h1>
                <div class="row mt-3">

                    <div class="col-sm-4 profile">

                        <div>
                            <img src="https://raw.githubusercontent.com/chayank-neu/wbdv-sp21-01-webdevgroup-client-react/user/shaili/profile/src/imgs/profile.jpg" class="profile-pic" />
                        </div>

                        <div class="mt-3">
                            <button type="button" class="btn btn-primary">Edit Profile</button>
                        </div>

                    </div>

                    <div class="col-sm-8">

                        <div class="row">

                            <ul class="nav nav-pills">
                                <li class="nav-item">
                                    <a class="nav-link active" href="#">Basic Info</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Media</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">My Events</a>
                                </li>
                            </ul>

                        </div>

                        <div class="row mt-3">

                            <BasicInfo fname={"Shaili"}
                                       lname={"Gandhi"}
                                       email={"abd@gmail.com"}
                                       password={"123456"}
                                       dob={"2/23/1992"}
                                       gender={"male"} />

                            {
                                /*
                                <Media pictures = {media} />
                                <Event events = {events} />
                                */
                            }

                        </div>

                    </div>

                </div>

            </div>
        </>
    )

}

export default Profile