import { CircularProgress } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAdmin } from '../../redux/actions/userAction';
import ListAdmin from './ListAdmin';

const Admins = () => {
    const AdminList = useSelector(state => state.userReducer.users)
    
    const isLoading = useSelector(state => state.userReducer.isLoading)
   
  
      
      const dispatch =useDispatch();
      useEffect(() => {
          dispatch(getAdmin())
      }, [dispatch])
  return (
    <div style={{display:'flex' , justifyContent:"space-between" ,margin:30, flexWrap:"wrap"}}>
    {isLoading?  <CircularProgress /> : AdminList && AdminList.map(e=><ListAdmin admin={e} key={e._id}/>)}

</div>  )
}

export default Admins