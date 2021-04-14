import React, {useState} from 'react'
import PrimarySearchAppBar from "../utils/navBar";
import {Link, useHistory} from "react-router-dom";
import {createUser} from "../../services/user-service";

const SignUp = () => {

    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [email, setEmail] = useState("")

    const [currentUser, setCurrentUser] = useState()

    const history = useHistory();

    const user = {
        name: '',
        username: '',
        password: '',
        confirmPassword: '',
        email: ''
    }

    const [cachedItem, setCachedItem] = useState(user)

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
                                   value={cachedItem.name}
                                   onChange={(e) => {
                                       setName(e.target.value)
                                       setCachedItem({... cachedItem, name: e.target.value})
                                   }}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <input type="text"
                                   className="form-control"
                                   placeholder="Username"
                                   value={cachedItem.username}
                                   onChange={(e) => {
                                       setUsername(e.target.value)
                                       setCachedItem({... cachedItem, username: e.target.value})
                                   }}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <input type="password"
                                   className="form-control"
                                   value={cachedItem.password}
                                   placeholder="Password"
                                   onChange={(e) => {
                                       setPassword(e.target.value)
                                       setCachedItem({... cachedItem, password: e.target.value})
                                   }}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <input type="password"
                                   className="form-control"
                                   placeholder="Confirm Password"
                                   value={cachedItem.confirmPassword}
                                   onChange={(e) => {
                                       setConfirmPassword(e.target.value)
                                       setCachedItem({... cachedItem, confirmPassword: e.target.value})
                                   }}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <input type="email"
                                   className="form-control"
                                   placeholder="Email Address"
                                   value={cachedItem.email}
                                   onChange={(e) => {
                                       setEmail(e.target.value)
                                       setCachedItem({... cachedItem, email: e.target.value})
                                       console.log(cachedItem.email)
                                   }}

                            />
                        </div>
                        <div className="form-group mb-3 ">
                            <button className="btn btn-primary"
                                    onClick={() => createUser(name, username, password, confirmPassword, email)
                                        .then(response => {
                                            // setCurrentUser(response)
                                            console.log(response)
                                            history.push("/api/login")
                                        })
                                    }
                                    type="button"
                            >
                                Sign Up
                            </button>
                        </div>

                        <div id="signUpHelp" className="form-text">Already have an account? <Link
                            to="api/login">Sign-In</Link></div>
                    </form>
                </div>

            </div>

        </>
    )
}

export default SignUp