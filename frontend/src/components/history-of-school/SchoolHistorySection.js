import React from 'react'
import './schoolHistorySection.css'
// import historyData from '../../Data/school-history-data'
import SchoolHistoryItem from './SchoolHistoryItem'

const SchoolHistorySection = ({ documentsData }) => {

  const length = documentsData.length;

  return (
    <section className='school-history-section'>
      <div className='school-history-wrapper'>
        <h2>Historia Szkoły</h2>
        <div className='school-timeline' style={{
          height: `${length * 105}px`
        }}>
          {
            documentsData && documentsData.length ? documentsData.map((dataItem, index) => <SchoolHistoryItem item={dataItem} key={index} uniqueId={index} />) : null
          }
        </div>
      </div>
    </section>
  )
}

export default SchoolHistorySection