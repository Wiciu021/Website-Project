import React from 'react'
import './teachingStaffPopUp.css'
import { IoCloseOutline } from "react-icons/io5";

const TeachingStaffPopUp = ({ itemId, setShowPopUp, teachers }) => {
  const item = teachers.find(staff => staff.id === itemId);

  if (!item) return <div>not found</div>;

  return (
    <div className='teaching-staff-pop-up'>
      <button className='close-button' onClick={() => setShowPopUp(false)}>
        <IoCloseOutline />
      </button>
      <img 
        src={`/static/images/teaching-staff/${item.img}`} 
        alt={`${item.name} ${item.surname}`} 
      />
      <h4>{item.name} {item.surname}</h4>
      <p>{item.jobClassification}</p>
    </div>
  )
}

export default TeachingStaffPopUp