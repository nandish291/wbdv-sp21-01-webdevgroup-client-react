import React, {useState} from 'react'
import PrimarySearchAppBar from "../utils/navBar";
import {Link, useHistory} from "react-router-dom";
import {logIn} from "../../services/user-service"

const LogIn = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const history = useHistory()

    return (
        <>
            <PrimarySearchAppBar/>
            <div className="container ">
                <div className="col">
                    <br/>
                    <h3>Login</h3>
                    <br/>
                    <form>
                        <div className="form-group mb-3">
                            <input type="text"
                                   className="form-control"
                                   placeholder="UserName"
                                   onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <input type="password"
                                   className="form-control"
                                   placeholder="Password"
                                   onChange={(e) => setPassword(e.target.value)}
                            />
                            <div id="passwordHelp" className="form-text text-end"><Link href="#">Forgot Password?</Link>
                            </div>
                        </div>
                        <div className="form-group mb-3 ">
                            <button className="btn btn-primary"
                                    onClick={() => logIn({username: username, password: password})
                                        .then(response => {
                                            if (response === 0) {
                                                alert("Username and password do not match.")
                                            } else if (response === -1) {
                                                alert("This username does not exist.")
                                            } else if (response === 1) {
                                                history.push(`/profile/user/${username}`)
                                            }
                                        })
                                    }
                                    type="button"
                            >
                                Sign In
                            </button>
                        </div>
                        <div id="signUpHelp"
                             className="form-text ">Don't have an account?
                            <Link to="/signup">Sign Up</Link></div>
                    </form>
                </div>

            </div>
        </>

    )
}

export default LogIn