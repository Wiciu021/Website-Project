import React from 'react'
import '../for-student-section/forStudent.css'
import './forParents.css'

const ForParents = () => {
  return (
    <section className='for-parents-section'>
      <h2>Dla Rodziców</h2>
      <div className='button-container'>
        <button className='button'>Rada Rodziców</button>
        <button className='button'>Dokumenty Szkolne</button>
        <button className='button'>Kalendarz Pracy</button>
      </div>
    </section>
  )
}

export default ForParents