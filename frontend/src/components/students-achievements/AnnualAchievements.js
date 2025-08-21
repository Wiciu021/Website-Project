import React from 'react'
import { useParams } from 'react-router-dom'
import achievementsData from '../../Data/achievements-data';
import { FaMedal, FaCalendarAlt } from "react-icons/fa"
import './annualAchievements.css'

const AnnualAchievements = () => {
  
  const { id } = useParams();
  const item = achievementsData.find(dataItem => String(dataItem.id) === id);

  return (
    <section className='annual-achievements-section'>
      <h3>Osiagniecia {item.year}</h3>
      <div className='annual-achievements-wrapper'>
        {
          item.achievements.map(dataItem => 
          <div className='month-wrapper'>
            <h5><FaCalendarAlt /> {dataItem.month}</h5>
              <ul>
                {
                  dataItem.entries.map(entryItem => 
                    <li key={entryItem.name}>
                      <span>
                        <strong>{entryItem.name} {entryItem.class}</strong> — {entryItem.description}
                      </span>
                    </li>
                  )
                }
            </ul>
          </div>
          )
        }
      </div>
    </section>
  )
}

export default AnnualAchievements