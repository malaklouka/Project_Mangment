import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import DeleteOutlineOutlined from "@mui/icons-material/DeleteOutlineOutlined";
import { deleteUser } from '../../redux/actions/userAction';

const ListAdmin = ({admin}) => {
  const dispatch = useDispatch();


  const handleDelete = () => {
    const confirmBox = window.confirm("Are You sure to delete user?");
    if (confirmBox) {
      return dispatch(deleteUser(admin._id));
    }
  };
  
  return (

    
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 m-3">
  
    <div className="our-team">
      <div className="m-b-25">
                 
                    <img
                      width="20%"
                      src="https://cdn1.iconfinder.com/data/icons/avatar-11/76/5-512.png"
                      className="img-radius"
                      alt="femal"
                    />
             
                </div>

      <div className="team-content">
        <h3 className="name">{admin.name}</h3>
        <h4 className="title">{admin.email}</h4>
      </div>
    
   
      <DeleteOutlineOutlined onClick={handleDelete} />
    </div>
  
</div>
    
  
    )
}

export default ListAdmin