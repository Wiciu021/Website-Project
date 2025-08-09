import React from 'react'
import { FaCalendarAlt, FaRegClock } from 'react-icons/fa';
import './schoolHistoryItem.css'

const SchoolHistoryItem = ({ item }) => {
  return (
    <>
      <div className={`dot ${item.id % 2 === 0 ? 'left' : 'right'}`} style={{
        top: `${(item.id - 1) * 180 + 50}px`
      }}></div>
      <div className={`timeline-item ${item.id % 2 === 0 ? 'left' : 'right'}`} style={{
        top: `${(item.id - 1) * 180 + 20}px`
      }}>
        <h4>{item.title}</h4>
        <a href={`/history-files/${item.pdf}.pdf`} target='_blank' rel='noreferrer noopener'>więcej <FaCalendarAlt /></a>
      </div>
    </>
  )
}

export default SchoolHistoryItem