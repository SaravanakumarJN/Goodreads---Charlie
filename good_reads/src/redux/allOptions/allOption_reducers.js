import { Get_Group_Genre } from "./actionType"


const init = {
    group_data:[]
}

export const allOption_reducers = (state=init,{type,payload})=>{
    switch(type){
        case Get_Group_Genre:
            return {
                ...state,
                group_data:payload
            }
        default:return state    
    }
}

