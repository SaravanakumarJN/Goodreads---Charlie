import { Get_peopleData } from "./actionType"

const init ={
    userdata:null
}

export const peopleData_reducers=(state=init,{type,payload})=>
{
    switch(type){
        case Get_peopleData:
            return{
                ...state,
                userdata:payload
            }
        default:return state    
    }
}