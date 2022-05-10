import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getprojects} from '../../redux/actions/projectAction'

import { Link } from 'react-router-dom';
import { gettasks } from '../../redux/actions/taskAction';
import OneTask from './OneTask';
import { CircularProgress } from '@mui/material';
import { Button } from '@material-ui/core';


const Task = () => {
  const TasksList = useSelector(state => state.taskReducer.tasks)
  const isLoading = useSelector(state => state.taskReducer.isLoading)
 

    
    const dispatch =useDispatch();
    useEffect(() => {
        dispatch(gettasks())
    }, [dispatch])
  return (
    <div>

    <div className="">
        <div className="">
        <Link to="/addtask">
  <Button className="" style={{marginTop:100,marginLeft:550, backgroundColor:"green"}}> 
  Add
  </Button>
</Link>
</div>
      <div style={{display:'flex' , justifyContent:"space-between" ,margin:30, flexWrap:"wrap"}}>
          {isLoading?  <CircularProgress /> : TasksList && TasksList.map(e=><OneTask task={e} key={e._id}/>)}
  
      </div>
      </div>
 
      </div>  )
}

export default Task