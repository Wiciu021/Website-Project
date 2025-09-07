import React from 'react'
// import erasmusDocumentsData from '../../Data/erasmus-docs-data'
import ErasmusItem from './ErasmusItem'
import './erasmusRecrutationSection.css'

const ErasmusRecrutationSeciton = ({ documentsData }) => {

  return (
    <section className='erasmus-recrutation-section'>
      <div className='recrutation-wrapper'>
        <h3>Rekrutacja Erasmus+</h3>
        <ul>
          {
            documentsData && documentsData.length ? documentsData.map(dataItem => <ErasmusItem key={dataItem.id} item={dataItem} />) : null
          }
        </ul>
      </div>
    </section>
  )
}

export default ErasmusRecrutationSeciton