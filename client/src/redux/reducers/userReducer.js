import {
    FAIL_USER,
    LOADING_USER,
    SUCCESS_USER
  } from "../constants/user"
   const initialState={
   users:[],
   errors:null,
   isLoading:false,
   isReserved:true,
};
export const userReducer=(state=initialState,{type,payload})=>{
           switch (type) {
               case LOADING_USER:
                   return {
                       ...state,isLoading:true,errors:null
                   }
               case SUCCESS_USER:
                   return{
                       ...state,isLoading:false,users:payload,errors:null
                   }
               
                case FAIL_USER:
                       return{
                           ...state,isLoading:false,errors:payload
                       }
             
                    
                           
               default:
                   return state;
           }
}