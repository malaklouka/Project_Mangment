import React from 'react'

const Details = ({projet}) => {
  return (
    <div>
        {   projet.adminsList.map((admins) => (

<div  className=""  alt="bag"width="295" height="200" 
style={{marginLeft:-25,marginTop:-45}} >
          {admins}   </div>   ))}
    </div>
  )
}

export default Details