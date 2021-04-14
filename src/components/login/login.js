import React, {useState} from 'react'
import PrimarySearchAppBar from "../utils/navBar";
import {Link, useHistory} from "react-router-dom";
import {logIn} from "../../services/user-service"

const LogIn = () => {

    const [usernameLog, setUsernameLog] = useState("")
    const [passwordLog, setPasswordLog] = useState("")

    const [loggedIn, setLoggedIn] = useState(false)

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
                                   onChange={(e) => setUsernameLog(e.target.value)}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <input type="password"
                                   className="form-control"
                                   placeholder="Password"
                                   onChange={(e) => setPasswordLog(e.target.value)}
                            />
                            <div id="passwordHelp" className="form-text text-end"><Link href="#">Forgot Password?</Link>
                            </div>
                        </div>
                        <div className="form-group mb-3 ">
                            <button className="btn btn-primary"
                                    onClick={() => logIn(usernameLog, passwordLog)
                                        .then(response => {
                                            if (response) {
                                                setLoggedIn(true)
                                                console.log(response)
                                                history.push("/profile")

                                            } else {
                                                console.log(response)
                                                alert("Username or password incorrect. Try again.")
                                            }
                                            // TODO: This is next phase: What do we render once loggedIn is true?
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