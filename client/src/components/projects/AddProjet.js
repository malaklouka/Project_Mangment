import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Form, Button } from "semantic-ui-react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { addprojet } from '../../redux/actions/projectAction';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProjet = () => {
    const dispatch = useDispatch()
    const navigate=useNavigate()

    const [state, setState] = useState({title:"",  description:"",status:"",tasks:""})
    
    const {title,description,status,tasks}=state;


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
            toast.success('Great!! new bag is added!');
  
  dispatch(addprojet({title, description,status,tasks}))
  
  navigate('/')
      }
    }
  
  
  return (
    <div className="neoneff">
 
         <h6 className="add" style={{marginLeft:"550px", marginTop:"5",fontSize:"40px",  fontFamily: "Great Vibes"}}>Add New Bag</h6>
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
            label="status"
            multiline
            rows={4}
             name="status" color="warning"
             onChange={handleChange}
           />
             <TextField
            id="outlined-multiline-flexible"
            label="tasks"
            multiline
            rows={4}
             name="tasks" color="warning"
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

export default AddProjet