import React from 'react'
import { FaCalendarAlt, FaRegClock } from 'react-icons/fa';
import './schoolHistoryItem.css'

const SchoolHistoryItem = ({ item, uniqueId }) => {
  return (
    <>
      <div className={`dot ${uniqueId % 2 === 0 ? 'left' : 'right'}`} style={{
        top: `${(uniqueId) * 100 + 50}px`
      }}></div>
      <div className={`timeline-item ${uniqueId % 2 === 0 ? 'left' : 'right'}`} style={{
        top: `${(uniqueId) * 100 + 20}px`
      }}>
        <h4>{item.title}</h4>
        <a href={`/history-files/${item.href}.pdf`} target='_blank' rel='noreferrer noopener'>więcej <FaCalendarAlt /></a>
      </div>
    </>
  )
}

export default SchoolHistoryItem