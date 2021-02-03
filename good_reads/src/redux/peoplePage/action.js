import axios from "axios";
import { Get_peopleData } from "./actionType";

const get_peopleData =(payload)=>({
    type:Get_peopleData,
    payload
})


export const getPeopleData = ()=>dispatch=>{
    return axios.get("https://good-reads-users-mock.herokuapp.com/users").then(res=>dispatch(get_peopleData(res.data))).catch(err=>{return null})
} 