import React from 'react'
import './documentsSection.css'
import docsData from '../../Data/docs-data'
import DocsItem from './DocsItem'

const DocumentsSection = () => {
  return (
    <section className='documents-section page-section'>
      <div className='docs-wrapper'>
        <h2>Dokumenty Szkolne</h2>
        <ul>
          {
            docsData && docsData.length ? docsData.map(docsItem => <DocsItem key={docsItem.id} item={docsItem} />) : null
          }
        </ul>
      </div>
    </section>
  )
}

export default DocumentsSection