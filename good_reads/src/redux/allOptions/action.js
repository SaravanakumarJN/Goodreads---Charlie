import axios from "axios";
import { Get_Group_Genre } from "./actionType";


const getgroupData =(payload)=> ({
    type:Get_Group_Genre,
    payload
})


export const GetGroupData = (q,num)=>dispatch=>{
    return axios.get("https://www.googleapis.com/books/v1/volumes", {
        params : {
            q : `subject:${q}`,
            maxResults : 3,
            startIndex:num
        }
    }).then(res=>dispatch(getgroupData(res.data.items))).catch(err=> console.log("error"))
}