import React from 'react'
import './teachingStaffItem.css'
import TeachingStaffPopUp from './TeachingStaffPopUp'

const TeachingStaffItem = ({ item, showPopUp, setShowPopUp }) => {

  const handleClick = () => {
    setShowPopUp(item.id);
    console.log(item.id);
  }

  return (
    <div className='grid-item' onClick={handleClick}>
      <img src={`/images/teaching-staff/user-image.png`} alt="zdjecie" />
      <h4>{item.name} {item.surname}</h4>
      <p>{item.jobClassification}</p>
    </div>
  )
}

export default TeachingStaffItem