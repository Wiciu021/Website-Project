import React from 'react'
import './contactSection.css'
import contactData from '../../Data/contact-data'
import socialMediaData from '../../Data/social-media-data'

const ContactSection = () => {
  return (
    <section className='contact-section'>
      <div className='contact-wrapper'>
        <form className='left-section'>
          <h3>Napisz do nas</h3>
          <div className='input-container'>
            <input type="text" name='name' id='name' placeholder=" " required/>
            <label htmlFor="name">Imię</label>
          </div>
          <div className='input-container'>
            <input type="text" name='surname' id='surname' placeholder=" " required/>
            <label htmlFor="surname">Nazwisko</label>
          </div>
          <div className='input-container'>
            <input type="email" name='email' id='email' placeholder=" " required/>
            <label htmlFor="email">Email</label>
          </div>
          <div className='area-container'>
            <textarea name='message' id='message' placeholder=" " required/>
            <label htmlFor="message">Wiadomość</label>
          </div>

          <button type='submit' className='submit-button'>wyslij</button>
        </form>
        <div className='right-section'>
          <h3>Informacje kontaktowe</h3>
          <ul className='info-container'>
            {
              contactData && contactData.length ? contactData.map(dataItem => 
                <li key={dataItem.id}>
                  {dataItem.icon} <span>{dataItem.value}</span>
                </li>
              ) : null
            }
          </ul>
          <ul className="social-media-container">
            {
              socialMediaData && socialMediaData.length ? socialMediaData.map(dataItem => 
                <li key={dataItem.id}>
                  <a href={dataItem.url} rel="noopener noreferrer" target='_blank' >{dataItem.icon}</a>
                </li>
              ) : null
            }
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ContactSection