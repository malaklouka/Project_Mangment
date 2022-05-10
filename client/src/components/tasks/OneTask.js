import React from 'react'
import { Flippy, FrontSide } from 'react-flippy'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deletetask, updateStatusToDone } from '../../redux/actions/taskAction';
import { Checkbox } from "@material-ui/core";
import DoneIcon from "@mui/icons-material/Done";
import DeleteIcon from "@mui/icons-material/Delete";
import {MdOutlineDone} from "react-icons/md"
import './task.css'
import moment from 'moment';

const OneTask = ({task}) => {
    const navigate = useNavigate(); 
    const dispatch = useDispatch()

    const handleDelete=(id)=>{
        if (window.confirm("Are you sure wanted to delete this bag? "))
        dispatch(deletetask(id))
      }
      const handleDone = () => {
        const confirmBox = window.confirm("Are You sure That you done that Taks?");
        if (confirmBox) {
          return dispatch(updateStatusToDone(task._id));
        }
      };
  return (
//     <div>
//   <Flippy  flipOnClick={true} flipOnHover={false} flipDirection="vertical" classNameName='username'  >
//     <FrontSide >
//             <div classNameName="contain">
   
//     <h3 classNameName="nameoffer" style={{fontSize:15,color:"purple"}}> {task.title}</h3>
//     <span style={{color:"green",marginBottom:10,marginLeft:152}}> {task.description} </span>
//     <h3> assigned to : { task.assignedTo}</h3>
//  <div style={{ paddingLeft:190,marginTop:-25}}>
// <button style={{color:"red",  backgroundColor: "transparent",border:"white"}}  onClick={()=>handleDelete(task._id)}> 
//             delete
//           </button>
//           </div>
    
//             </div>

        
//             <div>
           
//             {task.status === "done" ? (
//               <div>
//                 <p>Done </p> <DeleteIcon onClick={handleDelete} />
//               </div>
//             ) : task.status === "pending" ? (
//               <div>
//                 <p>pending</p>
//                 <div classNameName="done-task">
//                   <p>Mark as resolved</p>
//                   <MdOutlineDone onClick={handleDone} />
//                 </div>
//               </div>
//             ) : null}
//           </div>
        
//             </FrontSide>
        
//         </Flippy> 
//     </div>
<div className='project'>
   
<div className='project-tasks'>
  <div className='project-column'>
  
    <div className='task' draggable='true'>
      <div className='task__tags'><span className='task__tag task__tag--copyright'>{task.title}</span><button className='task__options'><i className="fas fa-ellipsis-h"></i></button></div>
      <p>{task.description}</p>
      <div className='task__stats'>
        <span><time datetime="2021-11-24T20:00:00"><i className="fas fa-flag"></i>{moment(task.completionDate).format('DD/MM/YYYY')}</time></span>
        <span><i className="fas fa-comment"></i>
        <div style={{ paddingLeft:190,marginTop:-25}}>
 <button style={{color:"red",  backgroundColor: "transparent",border:"white"}}  onClick={()=>handleDelete(task._id)}> 
             delete
           </button>
      
    </div>
        </span>
      {task.status === "done" ? (
          <div>
             <p className="status open"></p>{" "}
          </div>
        ) :task.status === "undone" ?  (
          <div>
            {" "}
            <p className="status in-progress"></p>
            
          </div>
        ):  (
          <div >
          {" "}
          <p className="status dead"></p>
        </div>
        )}
                 <span>assigned to: {task.assignedTo}</span>
                 <span>creator: {task.creator}</span>

        <span className='task__owner'></span>
      </div>
   
      
    </div>
    
         
  </div>


  
</div>
</div>


)
}

export default OneTask 
