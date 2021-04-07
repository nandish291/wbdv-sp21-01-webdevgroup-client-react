import React from 'react'

const SignUp = () => {

    return (
        <div className="container-fluid">

            <div className="container">
                <div className="col-md-6">
                    <h3>Sign Up</h3>
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Name"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Username"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Password"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Confirm Password"/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Email Address"/>
                        </div>
                        <div>
                            <input type="checkbox" id="organizer" name="organizer" value="organizer"/>
                            <label htmlFor="vehicle1">Artist/Organizer</label>
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btnSubmit" value="Sign Up"/>
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btnSubmit" value="Sign Up With Social"/>
                        </div>
                    </form>
                </div>
            </div>


        </div>
    )
}

export default SignUp