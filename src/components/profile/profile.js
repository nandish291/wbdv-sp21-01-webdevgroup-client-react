import {React, useState} from 'react';
import './profile-style.css'
import BasicInfo from './basic-info.js'
import Media from './media.js'
import Event from './event.js'
import PrimarySearchAppBar from "../utils/navBar";
import {Link} from "react-router-dom";
import event1 from '../imgs/event1.jpg'
import event2 from '../imgs/event2.jpg'
import event3 from '../imgs/event3.jpg'
import media1 from '../imgs/media1.jpg'
import media2 from '../imgs/media2.jpg'

const Profile = () => {

    const [tab1, setTab1] = useState(true)
    const [tab2, setTab2] = useState(false)
    const [tab3, setTab3] = useState(false)

    const user = {
        id: "1",
        fname: "Shaili",
        lname: "Gandhi",
        email: "abd@gmail.com",
        password: "123456",
        dob: "2/23/1992",
        gender: "female"
    }

    return (
        <>
            <PrimarySearchAppBar/>
            <div className="container">
                <br/>
                <h1>Profile</h1>
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
                                        <Link className={`nav-link ${tab1 === true ? 'active':''} `} aria-current="true" to="#"
                                              onClick = {() => {
                                                setTab1(true)
                                                setTab2(false)
                                                setTab3(false)
                                              }}>
                                                Basic Info
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={`nav-link ${tab2 === true ? 'active':''} `} aria-current="true" to="#"
                                              onClick = {() => {
                                                setTab1(false)
                                                setTab2(true)
                                                setTab3(false)
                                              }}>
                                                Media
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={`nav-link ${tab3 === true ? 'active':''} `} aria-current="true" to="#"
                                              onClick = {() => {
                                                setTab1(false)
                                                setTab2(false)
                                                setTab3(true)
                                              }}>
                                                Event
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            { tab1 &&
                                <div className="card-body">

                                        <BasicInfo id={"1"}
                                                   uid={"1"}
                                                   fname={"Shaili"}
                                                   lname={"Gandhi"}
                                                   email={"abd@gmail.com"}
                                                   password={"123456"}
                                                   dob={"2/23/1992"}
                                                   gender={"female"} />

                                </div>
                            }
                            { tab2 &&
                                <div className="card-body">

                                       <Media pictures = {[media1, media2]} />

                                </div>
                            }
                            { tab3 &&
                                <div className="card-body">

                                       <Event events = {[event1, event2, event3]} />

                                </div>
                            }
                        </div>

                    </div>

                </div>

            </div>
        </>
    )

}

export default Profile