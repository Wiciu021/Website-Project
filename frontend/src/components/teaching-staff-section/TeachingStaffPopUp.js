import React from 'react'
import './teachingStaffPopUp.css'
import { IoCloseOutline } from "react-icons/io5";
import teachingStaffData from '../../Data/teaching-staff-data';

const TeachingStaffPopUp = ({ itemId, setShowPopUp }) => {

  const item = teachingStaffData.find(staff => staff.id === itemId);

  if (!item) {
    return <div>not found</div>
  }

  return (
    <div className='teaching-staff-pop-up'>
      <button className='close-button' onClick={() => setShowPopUp(false)}><IoCloseOutline /></button>
      <img src={`/images/teaching-staff/user-image.png`} alt="zdjecie" />
      <h4>{item.name} {item.surname}</h4>
      <p>{item.jobClassification}</p>
    </div>
  )
}

export default TeachingStaffPopUp