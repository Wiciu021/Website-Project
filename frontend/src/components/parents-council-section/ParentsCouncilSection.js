import React, { useState } from 'react'
import './parentsCouncilSection.css'
import schoolSupportData from '../../Data/parents-council-data'
import { IoDocumentOutline } from 'react-icons/io5';
import { FaEnvelope} from "react-icons/fa";
import parentsCouncilPrezydium from '../../Data/prezydium-data';
import bankAccounts from '../../Data/bank-account-data';

const ParentsCouncilSection = () => {

  const handleCopy = (text) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    }
    setTextToDisplay('skopiowano')
  }

  const [spanVisible, setSpanVisible] = useState(false);
  const [textToDisplay, setTextToDisplay] = useState('skopiuj');

  const handleMouseOver = () => {
    setSpanVisible(true);
  }

  const handleMouseDown = () => {
    setSpanVisible(false);
    setTextToDisplay('skopiuj')
  }

  return (
    <section className='parents-council-section'>
      <div className='parents-council-wrapper'>
        <h3>Rada Rodzicow</h3>
        <div className='content-container'>
          <div className='left-section'>
            <p>Szanowni Rodzice, <br />
              Rada Rodziców XX Liceum Ogólnokształcącego im. Zbigniewa Herberta chce wspierać i motywować naszą młodzież w pogłębianiu wiedzy i rozwijaniu swoich pasji.
            </p>
            <div className='list-wrapper'>
              <h5>Przyklady naszych dzialan: </h5>
              <ul>
                {
                  schoolSupportData && schoolSupportData.length ? schoolSupportData.map(dataItem => <li key={dataItem.id}><div>{dataItem.icon}</div> <span className='text-wrapper'>{dataItem.text}</span></li>) : <p>no data to display</p>
                }
              </ul>
            </div>
            <p>Dodatkowo każda klasa, która przekroczy ustalony próg  60% zebranych składek rocznych, może ubiegać się o zwrot 20 % wpłaconych środków i przeznaczyć je na dowolnie wybrany cel</p>
            <p>Dlatego zwracamy się do Państwa z prośbą o dalsze wspieranie naszej działalności i przekazywanie dobrowolnych składek na Radę Rodziców </p>
            <p>W roku szkolnym 2023/24   dobrowolna składka wynosi 250 zł rocznie ( + 125 zł na drugie i kolejne dziecko). Oczywiście jeżeli chcą Państwo wesprzeć nas wyższa kwotą to będziemy mogli zrealizować więcej działań. Bardzo nam zależy, na wpłatach do końca listopada 2022 roku, co pozwoli nam zaplanować wszystkie wydatki. </p>
            <div className='action-container'>
              <div style={{
                position: 'relative'
              }} className='wrapper-mail'>
                <p onMouseLeave={() => handleMouseDown()} onMouseOver={() => handleMouseOver()} onClick={() => handleCopy("rrxxlo@vp.pl")}><FaEnvelope /> rrxxlo@vp.pl</p>
                <span style={{
                  display: spanVisible ? 'block' : 'none'
                }} className='copy-span' >{textToDisplay}</span>
              </div>
              <a href="/docs-files/Regulamin-RR-XXLO-Gdansk-11.2024-final-2.pdf" rel='noopener noreferrer' target='_blank'><IoDocumentOutline style={{
                color: 'var(--button-color)'
              }}/> Regulamin Rady Rodziców</a>
            </div>
          </div>
          <div className='right-section'>   
            <div className='text-container'>
              <h4>Prezydium Rady Rodzicow</h4>
              <ul className='prezydium-wrapper'>
                {
                  parentsCouncilPrezydium && parentsCouncilPrezydium.length
                    ? parentsCouncilPrezydium.map(dataItem => (
                        <li key={dataItem.id}>
                          <h5>{dataItem.icon} {dataItem.role}</h5>
                          {dataItem.people.map((person, index) => (
                            <p key={index}>{person}</p>
                          ))}
                        </li>
                      ))
                    : null
                }
              </ul>
            </div>
            <div className='text-container'>
              <h4>Konta bankowe</h4>
              <ul className='bank-account'>
                {
                  bankAccounts && bankAccounts.length ? bankAccounts.map(dataItem => (
                    <li key={dataItem.id}>
                      {dataItem.description} <strong>{dataItem.accountNumber}</strong>
                    </li>
                  )) : null
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ParentsCouncilSection