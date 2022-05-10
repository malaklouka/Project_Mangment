import {LOAD_TASKS,GET_TASKS_SUCCESS,GET_TASKS_FAIL,DELETE_TASK} from "../constants/task"
import axios from "axios"

  export const gettasks = () => async (dispatch) => {
    dispatch({ type: LOAD_TASKS })
    try {
    
        
      const response = await axios.get("/user/")
      dispatch({ type: GET_TASKS_SUCCESS, payload: response.data.Tasks})
    } catch (error) {
      console.dir(error)
      dispatch({ type: GET_TASKS_FAIL, payload: error })
    }
  }



  //get one TASK by id
  export const gettaskId=(id)=> async (dispatch)=> {
    dispatch({type:LOAD_TASKS})
    try {
    
      const response= await axios.get(`/user/${id}`)
      dispatch({type: GET_TASKS_SUCCESS, payload: response.data.onetask})
    } catch (error) {
      dispatch({type:GET_TASKS_FAIL, payload:error})
    }
  }

  //delete TASK : only the storek can delete TASKs
  export const deletetask = (id) => async (dispatch) => {
    try {
   
      const response = await axios.delete(`/user/${id}`)
      dispatch({ 
        type: DELETE_TASK,payload:id})
        dispatch(gettasks())
        console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
//post TASK :storrek can add TASKs   
  export const  addtask=({title,description, creator, assignedTo, status, completionDate })=>async dispatch=>{
  try {
 
      const response=await axios.post("/user/tasks",{title, description, creator, assignedTo, status, completionDate })
      dispatch(gettasks())
      console.log(response)
  } catch (error) {
      console.dir(error)
  }
  }
  //edit TASK : storek can update the TASK
  export const editTASK = (id, task, history) => async (dispatch) => {
    console.log("byeee")
    try {
    
      const res=await axios.put(`/user/${id}`, task)
      dispatch(gettasks())

    //   navigate("/TASKs")
      console.log(res)
    } catch (error) {
      console.dir(error)
      dispatch({ type: GET_TASKS_FAIL })
    }
  }

  export const updateStatusToPending = (id_task) => async (dispatch) => {
  
    try {
      await axios.put(
        `/user/updateStatusToPending/${id_task}`,
        {}
      );
      dispatch(gettasks());
    } catch (error) {
      dispatch({ type: GET_TASKS_FAIL, payload: error.response.data.errors });
    }
  };
  
  export const updateStatusToDone = (id_task) => async (dispatch) => {

    try {
      await axios.put(
        `/user/updateStatusToDone/${id_task}`,
        {}
      );
      dispatch(gettasks());
    } catch (error) {
      dispatch({ type: GET_TASKS_FAIL, payload: error.response.data.errors });
    }
  };

 





