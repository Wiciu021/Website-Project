import React from 'react'
import { FaCalendarAlt, FaRegClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../history-of-school/schoolHistoryItem.css'

const AchievementsItem = ({ item }) => {
  return (
    <>
      <div className={`dot ${item.id % 2 === 0 ? 'left' : 'right'}`} style={{
        top: `${(item.id - 1) * 100 + 50}px`
      }}></div>
      <div className={`timeline-item ${item.id % 2 === 0 ? 'left' : 'right'}`} style={{
        top: `${(item.id - 1) * 100 + 20}px`
      }}>
        <h4>{item.year}</h4>
        <Link to={`/osiagniecia/${item.id}`} className='link-button'>wiecej <FaCalendarAlt/></Link>
      </div>
    </>
  )
}

export default AchievementsItem