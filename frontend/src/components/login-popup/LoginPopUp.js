import React from 'react'
import './loginPopUp.css'
import '../feed-page/feedPage.css'

const LoginPopUp = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('kutas');
  }
  return (
    <section className='login-section page-section'>
      <div className='login-wrapper'>
        <h2>Login</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="email" placeholder='Email' required />
          <input type="password" placeholder='Hasło' required />
          <button className='login-button' type='submit'>Zaloguj Sie</button>
        </form>
      </div>
    </section>
  )
}

export default LoginPopUp