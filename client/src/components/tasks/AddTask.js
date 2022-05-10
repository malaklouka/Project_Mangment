import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addtask } from '../../redux/actions/taskAction';
import { Form, Button } from "semantic-ui-react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



const AddTask = () => {
    const dispatch = useDispatch()
    const navigate=useNavigate()

    const [state, setState] = useState({title:"",  description:"",  creator:"", assignedTo:"",
     status:"", completionDate :""
  })
    
    const {title,description, creator, assignedTo, status, completionDate 
    }=state;


    const handleChange=(e)=>{
        let {name,value}=e.target
        setState({...state,[name]:value})
      }
      
      const handleSubmit= (e)=>{
          e.preventDefault();
          if (!title || !description) {
           // setError("input the fields first!")
  toast.error('input the fields first');
  
  
          }
          else {
            toast.success('Great!! new task is added!');
  
  dispatch(addtask({title, description, creator, assignedTo, status, completionDate 
  }))
  
  navigate('/tasks')
      }
    }
  
  
  return (
    <div className="neoneff">
 
    <div class="back-button" style={{marginTop:"-245px"}}>
     <div class="arrow-wrap"   onClick={()=> navigate('/')}>
       <span class="arrow-part-1"></span>
       <span class="arrow-part-2"></span>
       <span class="arrow-part-3"></span>
     </div>
   </div>
         <h6 className="add"style={{marginLeft:"550px", marginTop:"5",fontSize:"40px",  fontFamily: "Great Vibes"}}>Add New Bag</h6>
         <div>
           
         <Form onSubmit={handleSubmit} className="addform" >
         <Box
         component="form"
         sx={{
           '& .MuiTextField-root': { m: 1, width: '24ch' },
         }}
         noValidate
         autoComplete="off"
       >
         
           <TextField
             id="outlined-multiline-flexible"
             label="title"
             multiline
             maxRows={4}
            name="title"  color="warning"
             onChange={handleChange}
           />
             <TextField
            id="outlined-multiline-flexible"
            label="Description"
            multiline
            rows={4}
             name="description" color="warning"
             onChange={handleChange}
           />
                <TextField
             id="outlined-multiline-flexible"
             label="creator"
             multiline
             maxRows={4}
            name="creator"  color="warning"
             onChange={handleChange}
           />
                  <TextField
             id="outlined-multiline-flexible"
             label="assigned to"
             multiline
             maxRows={4}
            name="assignedTo"  color="warning"
             onChange={handleChange}
           />

        
<TextField
             id="outlined-multiline-flexible"
             label="status"
             multiline
             maxRows={4}
            name="status"  color="warning"
             onChange={handleChange}
           />
                  <TextField
             id="outlined-multiline-flexible"
             label="completion Date"
             multiline
             maxRows={4}
            name="completionDate"  color="warning"
             onChange={handleChange}
           />
   
   </Box>         
   
           <Form.Field
             id="form-button-control-public"
             control={Button}
             content="ADD " 
             onChange={handleChange}
   
           />
           
         </Form>
         </div>
       </div>  )
}

export default AddTask