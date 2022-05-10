import { Button } from '@material-ui/core';
import { CircularProgress } from '@mui/material';
import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import { Link } from 'react-router-dom';
import { getprojects } from '../../redux/actions/projectAction';
import OnePrjt from './OnePrjt';


const Project = () => {
  const PrjtsList = useSelector(state => state.projectReducer.projects)
  const isLoading = useSelector(state => state.projectReducer.isLoading)
 

    
    const dispatch =useDispatch();
    useEffect(() => {
        dispatch(getprojects())
    }, [dispatch])
  
    return (
<div className="app-container">


  <div className="app-header">
    <div className="app-header-left">
      <span className="app-icon"></span>
      <p className="app-name">Project</p>
      <div className="search-wrapper">
        <input className="search-input" type="text" placeholder="Search"/>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="feather feather-search" viewBox="0 0 24 24">
          <defs></defs>
          <circle cx="11" cy="11" r="8"></circle>
          <path d="M21 21l-4.35-4.35"></path>
        </svg>
      </div>
    </div>
    <div className="app-header-right">
      <button className="mode-switch" title="Switch Theme">
     
      </button>
      <button className="add-btn" title="Add New Project">
      
      </button>
      <button className="notification-btn">
        
      </button>
      <button className="profile-btn">
        <img src="https://assets.codepen.io/3306515/IMG_2025.jpg" />
        <span>Malak Nk</span>
      </button>
    </div>
    <button className="messages-btn">
 </button>
  </div>
  <div className="app-content">
    <div className="app-sidebar">
      <a href="" className="app-sidebar-link active">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-home">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" /></svg>
      </a>
      <a href="" className="app-sidebar-link">
     
      </a>
      <a href="" className="app-sidebar-link">
      
      </a>
  
    </div>
    <div className="projects-section">
      <div className="projects-section-header">
        <p>Projects</p>
        <p className="time">Mai, 10</p>
      </div>
      <div className="projects-section-line">
        <div className="projects-status">
          <div className="item-status">
            <span className="status-number">45</span>
            <span className="status-type">In Progress</span>
          </div>
          <div className="item-status">
            <span className="status-number">24</span>
            <span className="status-type">Upcoming</span>
          </div>
          <div className="item-status">
            <span className="status-number">62</span>
            <span className="status-type">Total Projects</span>
          </div>
        </div>
        <div className="view-actions">
          <button className="view-btn list-view" title="List View">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-list">
              <line x1="8" y1="6" x2="21" y2="6" />
              <line x1="8" y1="12" x2="21" y2="12" />
              <line x1="8" y1="18" x2="21" y2="18" />
              <line x1="3" y1="6" x2="3.01" y2="6" />
              <line x1="3" y1="12" x2="3.01" y2="12" />
              <line x1="3" y1="18" x2="3.01" y2="18" /></svg>
          </button>
          <button className="view-btn grid-view active" title="Grid View">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-grid">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" /></svg>
          </button>
        </div>
      </div>
        <div className="">
        <Link to="/add">
  <Button className="" style={{marginTop:100,marginLeft:550, backgroundColor:"green"}}> 
  Add
  </Button>
</Link>
</div>
      <div  style={{display:'flex' , justifyContent:"space-between" }}>
{isLoading?  <CircularProgress /> : PrjtsList && PrjtsList.map(e=><OnePrjt projet={e} key={e._id}/>)}
</div>
</div>
        </div>
        </div>
      
    )
}

export default Project