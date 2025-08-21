import React from 'react'
import achievementsData from '../../Data/achievements-data'
import AchievementsItem from './AchievementsItem'
import '../history-of-school/schoolHistorySection.css'

const AchievementsSection = () => {

  const height = achievementsData.length * 110;

  return (
    <section className='achievements-section'>
      <div className='achievements-wrapper'>
        <h2>Osiagniecia Uczniow</h2>
        <div className='achievements-timeline' style={{
          minHeight: 'calc(100vh - 55px - 11rem)',
          height: `${height}px`
        }}>
          {
            achievementsData && achievementsData.length ? achievementsData.map(item => <AchievementsItem item={item} key={item.id} />) : null
          }
        </div>
      </div>
    </section>
  )
}

export default AchievementsSection