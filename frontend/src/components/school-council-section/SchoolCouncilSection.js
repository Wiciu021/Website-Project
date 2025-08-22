import React from 'react'
import schoolCouncilData from '../../Data/school-council-data'
import * as FaIcons from "react-icons/fa";
import './schoolCouncilSection.css'

const SchoolCouncilSection = () => {
  return (
    <section className='school-council-section'>
      <div className='school-council-wrapper'>
        <h3>Samorzad Uczniowski</h3> 
        <div className='roles-wrapper'>
          {
            schoolCouncilData && schoolCouncilData.length ? schoolCouncilData.map(dataItem => {
              const Icon = FaIcons[dataItem.icon];

              return (
                <div className='role-item'>
                  <p className='role'>
                    <Icon />
                    <strong>{dataItem.role}</strong>
                  </p> 
                  <p className='person'>{dataItem.names.join(', ')}</p>
                </div>
              )
            }) : null
          }
        </div>
      </div>
    </section>
  )
}

export default SchoolCouncilSection