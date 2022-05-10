import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ListUser from './ListUser';
import { CircularProgress } from "@mui/material";
import { getUser } from '../../redux/actions/userAction';


const Users = () => {
    const userList = useSelector(state => state.userReducer.users)
    
    const isLoading = useSelector(state => state.userReducer.isLoading)
   
  
      
      const dispatch =useDispatch();
      useEffect(() => {
          dispatch(getUser())
      }, [dispatch])
  return (
    <div style={{display:'flex' , justifyContent:"space-between" ,margin:30, flexWrap:"wrap"}}>
    {isLoading?  <CircularProgress /> : userList && userList.map(e=><ListUser user={e} key={e._id}/>)}

</div>   )
}

export default Users