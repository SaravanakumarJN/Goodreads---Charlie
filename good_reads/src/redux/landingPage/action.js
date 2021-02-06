import axios from "axios";
import { Login, Register,UserName } from "./actionType";

const register = (payload)=>(
    {
        type:Register,payload
    }
)

const login = (payload)=>(
    {
        type:Login,
        payload
    }
)
export const name = (payload)=>(
    {
        type:UserName,
        payload
    }
)


export const sendAuthRegister = (payload)=>dispatch=>{
    return axios.post("http://localhost:3123/register",payload).then(res=>dispatch(register(res.data))).catch(err=>dispatch(register(err)))
}

export const sendAuthLogin = (payload)=>dispatch=>{
    return axios.post("http://localhost:3123/login",payload)
    .then(res => {
        dispatch(login(true))
        localStorage.setItem("isLogin", JSON.stringify(true))
    })
    .catch(err => {
        dispatch(login(payload=false))
        localStorage.setItem("isLogin", JSON.stringify(false))
    })
}

