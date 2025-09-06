import React from 'react'
import './contactSection.css'
import contactData from '../../Data/contact-data'
import socialMediaData from '../../Data/social-media-data'

const ContactSection = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    surname: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); //dynamically update the specific field based on input's name (chciałem robić useState dla każdego ale to podpowiadanie zamieniło to w to wierze ze dziala)
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); //żeby nie odswiezylo strone
    
    console.log('Form submitted:', formData);

    try {
      const res = await fetch('/api/kontakt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        //console.log('sent corectly');
        alert('Wiadomość wysłana');
        setFormData({
          name: '',
          surname: '',
          email: '',
          message: ''
        });
      } else {
        //console.error('beka z cb');
        alert('Błąd przy wysyłaniu wiadomości');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section className='contact-section'>
      <div className='contact-wrapper'>
        <form className='left-section' onSubmit={handleSubmit}>
          <h3>Napisz do nas</h3>
          <div className='input-container'>
            <input 
              type="text" 
              name='name' 
              id='name' 
              placeholder=" " 
              required 
              value={formData.name} 
              onChange={handleChange}
            />
            <label htmlFor="name">Imię</label>
          </div>
          <div className='input-container'>
            <input 
              type="text" 
              name='surname' 
              id='surname' 
              placeholder=" " 
              required 
              value={formData.surname} 
              onChange={handleChange}
            />
            <label htmlFor="surname">Nazwisko</label>
          </div>
          <div className='input-container'>
            <input 
              type="email" 
              name='email' 
              id='email' 
              placeholder=" " 
              required 
              value={formData.email} 
              onChange={handleChange}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className='area-container'>
            <textarea 
              name='message' 
              id='message' 
              placeholder=" " 
              required 
              value={formData.message} 
              onChange={handleChange}
            />
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