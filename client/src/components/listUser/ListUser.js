import React from 'react'
import DeleteOutlineOutlined from "@mui/icons-material/DeleteOutlineOutlined";
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../redux/actions/userAction';

const ListUser = ({user}) => {
  const dispatch = useDispatch();


  const handleDelete = () => {
    const confirmBox = window.confirm("Are You sure to delete user?");
    if (confirmBox) {
      return dispatch(deleteUser(user._id));
    }
  };
  return (
    <div>
        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
      {/* Card*/}
      <div className="card shadow-sm border-0 rounded">
        <div className="card-body p-0">
          <img
            src="https://bootstrapious.com/i/snippets/sn-cards/profile-1_dewapk.jpg"
            alt=""
            className="" height={50} width={50}
          />
          <div className="p-4">
            <h5 className="mb-0">{user.name}</h5>
            <p className="small text-muted">Email:{user.email}</p>
            <DeleteOutlineOutlined onClick={handleDelete} />

          
          
            
          </div>
        </div>
      </div>
    </div>  
    </div>
  )
}

export default ListUser