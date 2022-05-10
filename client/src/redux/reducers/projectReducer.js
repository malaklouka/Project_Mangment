import {LOAD_PROJECTS,GET_PROJECTS_SUCCESS,GET_PROJECTS_FAIL,DELETE_PROJECT} from "../constants/project"
 
   const initialState={
   projects:[],
   errors:null,
   isLoading:false,
   isReserved:true,
};
export const projectReducer=(state=initialState,{type,payload})=>{
           switch (type) {
               case LOAD_PROJECTS:
                   return {
                       ...state,isLoading:true,errors:null
                   }
               case GET_PROJECTS_SUCCESS:
                   return{
                       ...state,isLoading:false,projects:payload,errors:null
                   }
               
                case GET_PROJECTS_FAIL:
                       return{
                           ...state,isLoading:false,errors:payload
                       }
                case DELETE_PROJECT:
                        return{
                            ...state,isLoading:false,errors:payload
                        }
                    
                           
               default:
                   return state;
           }
}