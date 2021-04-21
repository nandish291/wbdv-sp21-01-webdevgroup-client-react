import userService from "../services/user-service"

export const SET_USER="SET_USER";
export const INVALID_USER="INVALID_USER";
export const LOGOUT="LOGOUT";

const login=(dispatch,user)=>{
    console.log("login action called")
    userService.logIn(user).then((responseUser)=>{
        if(responseUser.id===null)
            dispatch({type:INVALID_USER})
        else
            dispatch({type:SET_USER, responseUser})
    })
}

const register=(dispatch,user)=>{
    userService.createUser(user).then(status=>{
        return status
    })
}

const logout=(dispatch)=>{
    userService.logOut().then(status=>{
        dispatch(LOGOUT)
    })
}

const checkLogin=(dispatch)=>{
    console.log('checkLogin called')
    userService.checkLoggedIn().then(responseUser=>{
        dispatch({type:SET_USER, responseUser})
    })
}

export default {login,register,logout,checkLogin}