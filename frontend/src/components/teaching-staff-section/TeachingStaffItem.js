import React, { useState } from 'react'
import './teachingStaffItem.css'

const TeachingStaffItem = ({ item, showPopUp, setShowPopUp }) => {
  const [imageError, setImageError] = useState(false);
  
  const handleClick = () => {
    setShowPopUp(item.id);
  }
  
  return (
    <div className='grid-item' onClick={handleClick}>
      <img 
        src={`/static/images/teaching-staff/${!imageError ? item.img : 'default.jpg'}`}
        alt={`${item.name} ${item.surname}`} 
        onError={() => setImageError(true)}
      />
      <h4>{item.name} {item.surname}</h4>
      <p>{item.jobClassification}</p>
    </div>
  )
}

export default TeachingStaffItem