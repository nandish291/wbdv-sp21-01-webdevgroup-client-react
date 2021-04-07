import React from 'react'

const LogIn = () => {

    return (
        <div className="container-fluid">
            <div className="container">
                <div className="col-md-6">
                    <h3>Login</h3>
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="UserName" value=""/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password" value=""/>
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btnSubmit" value="Sign In"/>
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btnSubmit" value="Sign In With Social"/>
                        </div>
                        <div className="form-group">
                            <a href="#" className="ForgetPwd">Forget Password?</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LogIn