import React, {useState,useEffect} from 'react'
import PrimarySearchAppBar from "../utils/navBar";
import {Link,useHistory} from "react-router-dom";
import {connect} from "react-redux";
import userActions from "../../actions/user-actions"
import {Button, FormHelperText, TextField, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        margin: theme.spacing(2),
    },
}));
const LogIn = (props) => {
    const history=useHistory();
    useEffect(()=>{
        if(props.session.userLoggedin)
            history.push("/profile")},[props.session.userLoggedin])
    const classes=useStyles();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <>
            <PrimarySearchAppBar/>
            <div className="container ">
                <br/>
                <h3>Login</h3>
                <form className={classes.root}>
                        <TextField error={props.session.invalid} className={classes.textField} variant="outlined" fullWidth label="User Name"
                                   onChange={(e) => setUsername(e.target.value)}/>
                        <TextField error={props.session.invalid} className={classes.textField} variant="outlined" fullWidth label="Password"   type="password"
                                   onChange={(e) => setPassword(e.target.value)}/>
                        <FormHelperText style={{display:`${props.session.invalid ?'inline-block':'none'}`}} >
                            Invalid UserName and Password
                        </FormHelperText>
                    <Button className={classes.textField} variant="contained" color="primary" onClick={() => {
                        props.loginUser({username: username, password: password})
                    }}>
                        Sign In
                    </Button>
                    <Typography className={classes.textField}> Don't have an account?
                        <Link to="/signup">Sign Up</Link>
                    </Typography>
                </form>
            </div>
        </>

    )
}

const mtsp=(state)=>({
    session: state.sessionReducer
})

const dtsp=(dispatch)=>({
    loginUser:(user)=> userActions.login(dispatch,user)
})

export default connect(mtsp,dtsp)(LogIn);