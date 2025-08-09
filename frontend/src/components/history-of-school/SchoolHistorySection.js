import React from 'react'
import './schoolHistorySection.css'
import historyData from '../../Data/school-history-data'
import SchoolHistoryItem from './SchoolHistoryItem'

const SchoolHistorySection = () => {

  const length = historyData.length;

  return (
    <section className='school-history-section'>
      <div className='school-history-wrapper'>
        <h2>Historia Szkoły</h2>
        <div className='school-timeline' style={{
          height: `${length * 180}px`
        }}>
          {
            historyData && historyData.length ? historyData.map(dataItem => <SchoolHistoryItem item={dataItem} key={dataItem.id} />) : null
          }
        </div>
      </div>
    </section>
  )
}

export default SchoolHistorySection