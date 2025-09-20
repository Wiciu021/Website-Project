import React from 'react'
import './schoolHistorySection.css'
// import historyData from '../../Data/school-history-data'
import SchoolHistoryItem from './SchoolHistoryItem'
import { useWindowSize } from '../../hooks/useWindowSize';

const SchoolHistorySection = ({ documentsData }) => {

  const { width, height } = useWindowSize();

  const length = documentsData.length;
  const pointer = width > 850 ? 100 : 150; 
  return (
    <section className='school-history-section'>
      <div className='school-history-wrapper'>
        <h2>Historia Szkoły</h2>
        <div className='school-timeline' style={{
          height: `${length * pointer}px`
        }}>
          {
            documentsData && documentsData.length ? documentsData.map((dataItem, index) => <SchoolHistoryItem item={dataItem} key={index} uniqueId={index} pointer={pointer}/>) : null
          }
        </div>
      </div>
    </section>
  )
}

export default SchoolHistorySection