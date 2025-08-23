import React from 'react'
import erasmusDocumentsData from '../../Data/erasmus-docs-data'
import ErasmusItem from './ErasmusItem'
import './erasmusRecrutationSection.css'

const ErasmusRecrutationSeciton = () => {

  return (
    <section className='erasmus-recrutation-section'>
      <div className='recrutation-wrapper'>
        <h3>Rekrutacja Erasmus+</h3>
        <ul>
          {
            erasmusDocumentsData && erasmusDocumentsData.length ? erasmusDocumentsData.map(dataItem => <ErasmusItem key={dataItem.id} item={dataItem} />) : null
          }
        </ul>
      </div>
    </section>
  )
}

export default ErasmusRecrutationSeciton