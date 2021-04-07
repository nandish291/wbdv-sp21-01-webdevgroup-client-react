import React from 'react'
import PrimarySearchAppBar from "../utils/navBar";
import {Link} from "react-router-dom";

const LogIn = () => {

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
                            <input type="text" className="form-control" placeholder="UserName"/>
                        </div>
                        <div className="form-group mb-3">
                            <input type="password" className="form-control" placeholder="Password"/>
                            <div id="passwordHelp" className="form-text text-end"><Link href="#">Forgot Password?</Link></div>
                        </div>
                        <div className="form-group mb-3 ">
                            <button className="btn btn-primary" >Sign In</button>
                        </div>
                        <div id="signUpHelp" className="form-text ">Don't have an account? <Link
                            to="/signup">Sign-Up</Link></div>
                    </form>
                </div>

            </div>
        </>

    )
}

export default LogIn