import React, {useState} from 'react'
import PrimarySearchAppBar from "../utils/navBar";
import {Link, useHistory} from "react-router-dom";
import {createUser} from "../../services/user-service";

const SignUp = () => {

    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [dob, setDob] = useState("")
    const [gender, setGender] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [email, setEmail] = useState("")

    const history = useHistory();

    const user = {
        firstname: '',
        lastname: '',
        dob: '',
        gender: '',
        username: '',
        password: '',
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
                                   placeholder="First Name"
                                   value={cachedItem.firstname}
                                   onChange={(e) => {
                                       setFirstname(e.target.value)
                                       setCachedItem({...cachedItem, firstname: e.target.value})
                                   }}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <input type="text"
                                   className="form-control"
                                   placeholder="Last Name"
                                   value={cachedItem.lastname}
                                   onChange={(e) => {
                                       setLastname(e.target.value)
                                       setCachedItem({...cachedItem, lastname: e.target.value})
                                   }}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <input type="date"
                                   className="form-control"
                                   placeholder="DOB"
                                   value={cachedItem.dob}
                                   onChange={(e) => {
                                       setDob(e.target.value)
                                       setCachedItem({...cachedItem, dob: e.target.value})
                                   }}
                            />
                        </div>
                        <div className="form-group mb-3">

                            <select value={cachedItem.gender}
                                    className="form-control"
                                    onChange={(e) => {
                                        setGender(e.target.value)
                                        setCachedItem({...cachedItem, gender: e.target.value})
                                    }}
                            >
                                <option value={"Select gender:"}>Select gender:</option>
                                <option value={"Female"}>Female</option>
                                <option value={"Male"}>Male</option>
                                <option value={"No answer"}>No answer</option>
                            </select>

                            {/*<input type="text"*/}
                            {/*       placeholder="Gender"*/}
                            {/*       className="form-control"*/}
                            {/*       value={cachedItem.gender}*/}
                            {/*       onChange={(e) => {*/}
                            {/*           setGender(e.target.value)*/}
                            {/*           setCachedItem({...cachedItem, gender: e.target.value})*/}
                            {/*       }}*/}
                            {/*/>*/}
                        </div>
                        <div className="form-group mb-3">
                            <input type="text"
                                   className="form-control"
                                   placeholder="Username"
                                   value={cachedItem.username}
                                   onChange={(e) => {
                                       setUsername(e.target.value)
                                       setCachedItem({...cachedItem, username: e.target.value})
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
                                       setCachedItem({...cachedItem, password: e.target.value})
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
                                       setCachedItem({...cachedItem, email: e.target.value})
                                   }}

                            />
                        </div>
                        <div className="form-group mb-3 ">
                            <button className="btn btn-primary"
                                    onClick={() => {

                                        if (firstname.length === 0) {
                                            alert("Please enter your first name.")
                                        } else if (lastname.length === 0) {
                                            alert("Please enter your last name.")
                                        } else if (dob.length === 0) {
                                            alert("Please enter your date of birth.")
                                        } else if (gender.length === 0) {
                                            alert("Please select a gender.")
                                        } else if (username.length === 0) {
                                            alert("Please provide a username.")
                                        } else if (password.length === 0) {
                                            alert("Please provide a password.")
                                        } else if (confirmPassword.length === 0) {
                                            alert("Please confirm your password.")
                                        } else if (password !== confirmPassword) {
                                            alert("Your password entries do not match.")
                                        } else if (email.length === 0) {
                                            alert("Please provide an email.")
                                        } else {

                                            user.firstname = firstname
                                            user.lastname = lastname
                                            user.dob = dob
                                            user.gender = gender
                                            user.username = username
                                            user.password = password
                                            user.email = email

                                            createUser(user)
                                                .then(response => {

                                                    if (response === -1) {
                                                        alert("Username already exists.")
                                                    } else {
                                                        history.push("/api/login")
                                                    }
                                                })
                                        }
                                    }}
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