import React from 'react'
import './forStudent.css'

// dodac te zastępstwa

const ForStudent = () => {
  return (
    <section className='for-students-section'>
      <h2>Dla Uczniów</h2>
      <div className='button-container'>
        <button className='button'>Zastępstwa</button>
        <button className='button'>Plan Lekcji</button>
        <button className='button'>Dziennik</button>
      </div>
    </section>
  )
}

export default ForStudent