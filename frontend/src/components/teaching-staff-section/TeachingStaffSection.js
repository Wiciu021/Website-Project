import React, { useEffect, useState } from 'react'
import './teachingStaffSection.css'
import TeachingStaffItem from './TeachingStaffItem'
import teachingStaffData from '../../Data/teaching-staff-data'
import TeachingStaffPopUp from './TeachingStaffPopUp'

const TeachingStaffSection = () => {

  const [showPopUp, setShowPopUp] = useState(false);

  useEffect(() => {
    if (showPopUp) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    }
  }, [showPopUp])

  return (
    <section className='teaching-staff-section page-section'>
      <div className='teaching-staff-container' style={{
        filter: showPopUp ? 'blur(10px)' : 'none',
      }}>
        <h2>Zespół nauczycieli</h2>
        <div className='teaching-staff-wrapper'>
          <h3>Dyrekcja</h3>
          <div className='head-teachers-wrapper'>
            {
              teachingStaffData && teachingStaffData.length ? teachingStaffData.map(item => item.roleType === 'headTeacher' ? <TeachingStaffItem key={item.id} item={item} showPopUp={showPopUp} setShowPopUp={setShowPopUp} /> : null) : null
            }
          </div>
          <h3>Nauczyciele</h3>
          <div className='teachers-wrapper'>
            {
              teachingStaffData && teachingStaffData.length ? teachingStaffData.map(item => item.roleType === 'teacher' ? <TeachingStaffItem key={item.id} item={item} showPopUp={showPopUp} setShowPopUp={setShowPopUp} /> : null) : null
            }
          </div>
        </div>
      </div>
        {
          showPopUp ? <TeachingStaffPopUp itemId={showPopUp} setShowPopUp={setShowPopUp} /> : null
        }
    </section>
  )
}

export default TeachingStaffSection