import userService from "../services/user-service";

export const SIGN_UP="SIGN_UP"
export const USERNAME_STATUS="USERNAME_STATUS"
export const EMAIL_STATUS="EMAIL_STATUS"


const signUp=async (dispatch,user)=>{
        dispatch({
            type: SIGN_UP,
            status: await userService.createUser(user)
        })
}

const checkUserName=async (dispatch,userName)=>{
    dispatch({type:USERNAME_STATUS,status:await userService.checkUserNameService(userName)})
}

const checkEmail=async (dispatch,email)=>{
    const status=await userService.checkEmailService(email);
    dispatch({
        type:EMAIL_STATUS,status
    })
}

export default {signUp,checkEmail,checkUserName}