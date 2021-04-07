import React from 'react'
import PrimarySearchAppBar from "../utils/navBar";
import {Link} from "react-router-dom";

const SignUp = () => {

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
                            <input type="text" className="form-control" placeholder="Name"/>
                        </div>
                        <div className="form-group mb-3">
                            <input type="text" className="form-control" placeholder="Username"/>
                        </div>
                        <div className="form-group mb-3">
                            <input type="text" className="form-control" placeholder="Password"/>
                        </div>
                        <div className="form-group mb-3">
                            <input type="text" className="form-control" placeholder="Confirm Password"/>
                        </div>
                        <div className="form-group mb-3">
                            <input type="password" className="form-control" placeholder="Email Address"/>
                        </div>
                        <div className="form-group mb-3 ">
                            <button className="btn btn-primary" >Sign Up</button>
                        </div>

                        <div id="signUpHelp" className="form-text">Already have an account? <Link
                            to="/events/login">Sign-In</Link></div>
                    </form>
                </div>

            </div>

        </>
    )
}

export default SignUp