import React from 'react'
import Flippy, { FrontSide } from 'react-flippy'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteprojet } from '../../redux/actions/projectAction';
import {  FaEye } from 'react-icons/fa';
import { AiOutlineDelete,AiOutlineEdit,AiTwotoneHeart,AiOutlineQrcode } from "react-icons/ai";
import moment from 'moment';


import './style.css'
import { Button } from '@material-ui/core';

const OnePrjt = ({projet}) => {
    const navigate = useNavigate(); 
    const dispatch = useDispatch()

    const handleDelete=(id)=>{
        if (window.confirm("Are you sure wanted to delete this project? "))
        dispatch(deleteprojet(id))
      }

  return (
    <div>
       <div className="project-boxes jsGridView">
      
        <div className="project-box-wrapper">
      
          <div className="project-box" style={{backgroundColor: "#fee4cb"}}>
            <div className="project-box-header">
              <span>{moment(projet.createdAt).format('DD/MM/YYYY')}
              </span>
              
              <div className="more-wrapper">
                <button className="project-btn-more">
                {projet.status === "done" ? (
          <div>
             <p className="status open"></p>{" "}
          </div>
        ) :projet.status === "undone" ?  (
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
                </button>
          </div>
        </div>
        <div className="project-box-content-header">
          <p className="box-content-header">{projet.title}</p>
          <p className="box-content-subheader">{projet.description}</p>
        </div>
        {/* <div className="box-progress-wrapper">
          <p className="box-progress-header">Progress</p>
          <div className="box-progress-bar">
            <span className="box-progress" style={{width: "60%", backgroundColor: "#ff942e"}}></span>
          </div>
          <p className="box-progress-percentage">60%</p>
        </div> */}
        <div > 
   
    </div>
    <div>
  
  <Button style={{ color:"blue", background:"none", border:"none" }} onClick={()=>navigate("/admins")}>
          <FaEye/> view
          </Button>

<Button style={{color:"red",  backgroundColor: "transparent",border:"white"}}  onClick={()=>handleDelete(projet._id)}> 
            <AiOutlineDelete/> delete
          </Button>
          <Button style={{color:"green", backgroundColor: "transparent",border:"white"}}
                      onClick={()=>navigate(`/Edit/${projet._id}`)}><AiOutlineEdit/>
                                    edit
                   </Button>
          </div>
        <div className="project-box-footer">
          <div className="participants">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" alt="participant"/>
            <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="participant"/>
            <button className="add-participant" style={{color: "#ff942e"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" className="feather feather-plus">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
          </div>
          <div className="days-left" style={{color: "#ff942e"}}>
            2 Days Left
          </div>
        </div>
      </div>
    </div>
    
  </div>
</div>


  )
}

export default OnePrjt