import React, { useState } from 'react'
// import achievementsData from '../../Data/achievements-data'
import '../history-of-school/schoolHistorySection.css'
import './achievementsSection.css'
import { IoChevronDownOutline } from 'react-icons/io5';
import AnnualAchievements from './AnnualAchievements';

const AchievementsSection = ({ achievementsData }) => {

  const [showYear, setShowYear] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [inputValue, setInputValue] = useState("wybierz rok");

  return (
    <section className='achievements-section'>
      <div className='achievements-wrapper'>
        <h2>Osiagniecia Uczniow</h2>
        <div className='achievements-timeline'>
          <div className="select-button">
            <span onClick={() => setIsVisible(!isVisible)}>{inputValue} <IoChevronDownOutline style={{
              rotate: isVisible ? '0deg' : '180deg',
              transition: '.4s'
            }}/></span>
            <ul className={isVisible ? 'visible' : ''}>
              {
                achievementsData && achievementsData.length ? achievementsData.map(dataItem => 
                  <li key={dataItem.id} value={dataItem.id} onClick={() => {
                    setShowYear(dataItem.id);
                    setIsVisible(false);
                    setInputValue(dataItem.year);
                  }}>
                    {dataItem.year}
                  </li>
                ) : null
              }
            </ul>
          </div>
          {
            achievementsData.map(dataItem => {
              if (dataItem.id === showYear) {
                return <AnnualAchievements item={dataItem} />
              }
            })
          }
        </div>
      </div>
    </section>
  )
}

export default AchievementsSection