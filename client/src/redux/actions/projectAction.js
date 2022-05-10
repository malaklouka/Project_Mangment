import {LOAD_PROJECTS,GET_PROJECTS_SUCCESS,GET_PROJECTS_FAIL,DELETE_PROJECT} from "../constants/project"
import axios from "axios"

  export const getprojects = () => async (dispatch) => {
    dispatch({ type: LOAD_PROJECTS })
    try {
    
        
      const response = await axios.get("/aa/")
      dispatch({ type: GET_PROJECTS_SUCCESS, payload: response.data.Projects})
    } catch (error) {
      console.dir(error)
      dispatch({ type: GET_PROJECTS_FAIL, payload: error })
    }
  }

  //get one PROJECT by id
  export const getPROJECTId=(id)=> async (dispatch)=> {
    dispatch({type:LOAD_PROJECTS})
    try {
 
      const response= await axios.get(`/aa/${id}`)
      dispatch({type: GET_PROJECTS_SUCCESS, payload: response.data.oneproject})
    } catch (error) {
      dispatch({type:GET_PROJECTS_FAIL, payload:error})
    }
  }

  //delete PROJECT 
  export const deleteprojet = (id) => async (dispatch) => {
    try {
   
      const response = await axios.delete(`/aa/${id}`)
      dispatch({ 
        type: DELETE_PROJECT,payload:id})
        dispatch(getprojects())
        console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
//post PROJECT 
  export const  addprojet=({title,description,status,tasks })=>async dispatch=>{
  try {
 
      const response=await axios.post("/aa/projects",{title, description,status,tasks})
      dispatch(getprojects())
      console.log(response)
  } catch (error) {
      console.dir(error)
  }
  }
  //edit PROJECT 
  export const editPROJECT = (id, project, navigate) => async (dispatch) => {
    console.log("byeee")
    try {
    
      const res=await axios.put(`/aa/${id}`, project)
      dispatch(getprojects())

      navigate("/projects")
      console.log(res)
    } catch (error) {
      console.dir(error)
      dispatch({ type: GET_PROJECTS_FAIL })
    }
  }






