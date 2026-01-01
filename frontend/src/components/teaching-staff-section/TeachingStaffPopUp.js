import React from 'react'
import './teachingStaffPopUp.css'
import { IoCloseOutline } from "react-icons/io5";
import { createRipple, clearRipple } from '../../hooks/rippleEffect';

const TeachingStaffPopUp = ({ itemId, setShowPopUp, teachers }) => {
  const item = teachers.find(staff => staff.id === itemId);

  if (!item) return <div>not found</div>;

  return (
    <div className='teaching-staff-pop-up'>
      <button className='close-button ripple-button' onClick={() => setShowPopUp(false)} onMouseEnter={createRipple} onMouseLeave={clearRipple}>
        <IoCloseOutline />
      </button>
      <img 
        src={`/default-bucket/${item.img}`} 
        alt={`${item.name} ${item.surname}`} 
      />
      <h4>{item.name} {item.surname}</h4>
      <p>{item.jobClassification}</p>
    </div>
  )
}

export default TeachingStaffPopUp