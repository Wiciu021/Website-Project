import React from 'react'
import './insuranceSection.css'
import { createRipple, clearRipple } from '../../hooks/rippleEffect'

const InsuranceSection = () => {
  return (
    <section className='insurance-section'>
      <div className='insurance-wrapper'>
        <div className='title-container'>
          <h3>Ubezpieczenie</h3>
          <p>Szanowni Państwo, prosimy o zapoznanie się z tegoroczną ofertą ubezpieczenia</p>
        </div>
        <div className='content-container'>
          <div className='insurance-option'>
            <h4>Ubezpieczenie NNW szkolne - INTERRISK</h4>
            <ul>
              <li>Okres ubezpieczenia: 01.09.2023 - 31.08.2024</li>
              <li>Termin płatności składki: do 30.09.2023</li>
            </ul>
            <a href="https://klient.interrisk.pl/EduPlusOnline?u=9elggpd8tz" rel="noreferrer noopener" target='_blank' className='link-button ripple-button' onMouseEnter={createRipple} onMouseLeave={clearRipple}>Przejdz do oferty</a>
          </div>
          <div className='insurance-option'>
            <h4>Ubezpieczenie NNW COMPENSA</h4>
            <ul>
              <li>Okres ubezpieczenia: 01.09.2023 - 31.10.2024</li>
              <li>Hasło dostępu: 728980</li>
            </ul>
            <a href="https://szkola.compensa.pl/" rel='noreferrer noopener' target='_blank' className='link-button ripple-button' onMouseEnter={createRipple} onMouseLeave={clearRipple}>Przejdz do oferty</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InsuranceSection