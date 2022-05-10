import {
    FAIL_USER,
    LOADING_USER,
    SUCCESS_USER
  } from "../constants/user";
  
  import axios from "axios";


  export const getAdmin = () => async (dispatch) => {
    dispatch({ type: LOADING_USER });
  
    try {
      const result = await axios.get("/user/list/admin");
      dispatch({ type: SUCCESS_USER, payload: result.data.admins });
    } catch (error) {
      dispatch({ type: FAIL_USER, payload: error.response.data.errors });
    }
  }; 
  export const getUser = () => async (dispatch) => {
    dispatch({ type: LOADING_USER });
  
    try {
      const result = await axios.get("/user/list/user");
      dispatch({ type: SUCCESS_USER, payload: result.data.users });
    } catch (error) {
      dispatch({ type: FAIL_USER, payload: error.response.data.errors });
    }
  }; 

export const deleteUser = (id) => async (dispatch) => {
    dispatch({ type: LOADING_USER });
  
    try {
      await axios.delete(`/user/deleteUser/${id}`);
  
      dispatch(getAdmin());
      dispatch(getUser());


    } catch (error) {
      dispatch({ type: FAIL_USER });
    }
  };