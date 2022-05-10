import { TextField } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate, useParams } from "react-router-dom";
import Box from '@mui/material/Box';

import { editPROJECT, getPROJECTId } from "../../redux/actions/projectAction";
import { Button, Form } from "semantic-ui-react";



//update existing bag 
const EditPrjt = () => {
    const dispatch = useDispatch()
    let {id}=useParams()
    const [state, setState] = useState({
        title:"",  description:"",status:"",tasks:""
      }
    )
    


   const [error,setError]=useState("")
   const projet=useSelector((state)=>state.projectReducer.projects)
   const navigate=useNavigate()


useEffect(() => {
dispatch(getPROJECTId(id))    
}, [dispatch, id])

useEffect(()=>{
if (projet){
setState({...projet})
}
},[projet])

    const handleInputChange=(e)=>{
      let {name,value}=e.target
      setState({...state,[name]:value})
    }

    const handleSubmit= (e)=>{
        e.preventDefault();
    
  dispatch(editPROJECT(id,state,navigate))

  setError("")
      



   }
  return (
 



<div className="neoneff">
 


     <h6 className="add"style={{marginLeft:"550px", marginTop:"5",fontSize:"40px",  fontFamily: "Great Vibes"}}>Edit Bag</h6>
   
       
     <Form onSubmit={handleSubmit} className="form" >
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
         onChange={handleInputChange}
       />
         <TextField
        id="outlined-multiline-flexible"
        label="Description"
        multiline
        rows={4}
         name="description" color="warning"
         onChange={handleInputChange}
       />
            <TextField
         id="outlined-multiline-flexible"
         label="status"
         multiline
         maxRows={4}
        name="status"  color="warning"
         onChange={handleInputChange}
       />
              <TextField
         id="outlined-multiline-flexible"
         label="tasks"
         multiline
         maxRows={4}
        name="tasks"  color="warning"
         onChange={handleInputChange}
       />

</Box>         

       <Form.Field
         id="form-button-control-public"
         control={Button}
         content="Edit " 
         onChange={handleInputChange}

       />
       
     </Form>
   
   </div> 
  )
}

export default EditPrjt