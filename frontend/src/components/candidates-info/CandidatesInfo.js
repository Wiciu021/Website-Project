import React from 'react'
import './candidatesInfo.css'
import { FaPaperclip, FaFilePdf, FaFileWord } from "react-icons/fa";
import { IoBookOutline } from 'react-icons/io5'
import { createRipple, clearRipple } from '../../hooks/rippleEffect';

const CandidatesInfo = () => {
  return (
    <section className='candidates-info-section'>
      <div className="candidates-info-wrapper">
        <div className='left-section'>
          <h3>Informacje Dla Kandydatów</h3>
          <div className='rules-container'>
            <button className='ripple-button' onMouseEnter={createRipple} onMouseLeave={clearRipple}>
              <a href="/recrutation-files/Zasady-rekrutacji-w-roku-szkolnym-2025-2026.pdf" target='_blank' rel='noopener noreferrer'>Zasady Rekrutacji <IoBookOutline /></a>
            </button>
            <button className='ripple-button' onMouseEnter={createRipple} onMouseLeave={clearRipple}>
              <a href="/recrutation-files/zalacznik1.pdf" target='_blank' rel='noopener noreferrer'>Załacznik <FaPaperclip /></a>
            </button>
          </div>
          <div className='english-test-container'>
            <p>Test kompetencji z języka angielskiego do klas dwujęzycznych odbędzie się 10 czerwca 2025 (wtorek) o godzinie 13.00</p>
            <button className='ripple-button' onMouseEnter={createRipple} onMouseLeave={clearRipple}>
              <a href="/recrutation-files/Zakres-materialu-z-jezyka-angielskiego.pdf" target='_blank' rel='noopener noreferrer'>Zakres Materiału</a>
            </button>
          </div>
          <p>Test kompetencji z matematyki do klasy MIF odbędzie się 11 czerwca 2025 (środa) o godzinie 13.00</p>
          <div className='survey-container'>
            <button className='ripple-button' onMouseEnter={createRipple} onMouseLeave={clearRipple}>
              <a href="recrutation-files/Ankieta-25.pdf" target='_blank' rel='noopener noreferrer'>Ankieta Ucznia <FaFilePdf /></a>
            </button>
            <button className='ripple-button' onMouseEnter={createRipple} onMouseLeave={clearRipple}>
              <a href="recrutation-files/Ankieta-25.docx" target='_blank' rel='noopener noreferrer'>Ankieta Ucznia <FaFileWord /></a>
            </button>
          </div>
        </div>
        <div className='right-section'>
          <a href="/images/informacje-dla-kandydatow2.png" target='_blank' rel="noopener noreferrer">
            <img src="/paweldobry.jpg" alt="tu mialo byc zdjecie pozdro" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default CandidatesInfo