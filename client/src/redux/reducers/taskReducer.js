import {LOAD_TASKS,GET_TASKS_SUCCESS,GET_TASKS_FAIL,DELETE_TASK} from "../constants/task"
 
   const initialState={
   tasks:[],
   errors:null,
   isLoading:false,
   isReserved:true,
};
export const taskReducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case LOAD_TASKS:
            return {
                ...state,isLoading:true,errors:null
            }
        case GET_TASKS_SUCCESS:
            return{
                ...state,isLoading:false,tasks:payload,errors:null
            }
         case GET_TASKS_FAIL:
                return{
                    ...state,isLoading:false,errors:payload
                }
         case DELETE_TASK:
                 return{
                     ...state,isLoading:false,errors:payload
                 }
             
                    
        default:
            return state;
    }
}