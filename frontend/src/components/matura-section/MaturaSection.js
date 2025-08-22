import React from 'react'
import './maturaSection.css'
import maturaData from '../../Data/matura-data'
import MaturaItem from './MaturaItem'

const MaturaSection = () => {
  return (
    <section className='matura-section'>
      <div className='matura-wrapper'>
        <h3>Informacje Dla Maturzystow</h3>
          <ul>
            {
              maturaData && maturaData.length ? maturaData.map(dataItem => <MaturaItem item={dataItem} key={dataItem.id} />) : <p>no data to display</p>
            }
          
          </ul>
      </div>
    </section>
  )
}

export default MaturaSection