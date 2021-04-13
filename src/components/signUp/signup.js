import React, {useState} from 'react'
import PrimarySearchAppBar from "../utils/navBar";
import {Link} from "react-router-dom";
import {createUser} from "../../services/user-service";

const SignUp = () => {

    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const [currentUser, setCurrentUser] = useState(null)

    return (
        <>

            <PrimarySearchAppBar/>
            <div className="container">

                <div className="col">
                    <br/>
                    <h3>Sign Up</h3>
                    <br/>
                    <form>
                        <div className="form-group mb-3">
                            <input type="text"
                                   className="form-control"
                                   placeholder="Name"
                                   onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <input type="text"
                                   className="form-control"
                                   placeholder="Username"
                                   onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <input type="password"
                                   className="form-control"
                                   placeholder="Password"/>
                        </div>
                        <div className="form-group mb-3">
                            <input type="password"
                                   className="form-control"
                                   placeholder="Confirm Password"
                                   onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <input type="email"
                                   className="form-control"
                                   placeholder="Email Address"
                                   onChange={(e) => setEmail(e.target.value)}

                            />
                        </div>
                        <div className="form-group mb-3 ">
                            <button className="btn btn-primary"
                                    onClick={() => createUser(name, username, password, email)
                                        .then(response => {
                                            setCurrentUser(response)
                                            console.log(response)
                                            console.log("test"+currentUser) // this is returning null
                                        })
                                    }
                                    type="button"
                            >
                                Sign Up
                            </button>
                        </div>

                        <div id="signUpHelp" className="form-text">Already have an account? <Link
                            to="/login">Sign-In</Link></div>
                    </form>
                </div>

            </div>

        </>
    )
}

export default SignUp