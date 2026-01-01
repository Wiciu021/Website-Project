import React, { useEffect } from 'react'
import { FaCalendarAlt, FaRegClock } from 'react-icons/fa';
import './schoolHistoryItem.css'
import { createRipple, clearRipple } from '../../hooks/rippleEffect';

const SchoolHistoryItem = ({ item, uniqueId, pointer }) => {


  return (
    <>
      <div className={`dot ${uniqueId % 2 === 0 ? 'left' : 'right'}`} style={{
        top: `${(uniqueId) * pointer + 50}px`
      }}></div>
      <div className={`timeline-item ${uniqueId % 2 === 0 ? 'left' : 'right'}`} style={{
        top: `${(uniqueId) * pointer + 20}px`
      }}>
        <h4>{item.title}</h4>
        <a href={`/history-files/${item.href}.pdf`} target='_blank' rel='noreferrer noopener' className='ripple-button' onMouseEnter={createRipple} onMouseLeave={clearRipple}>więcej <FaCalendarAlt /></a>
      </div>
    </>
  )
}

export default SchoolHistoryItem