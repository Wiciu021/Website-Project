import React from 'react'
import './aboutUsItem.css'
import { Link } from 'react-router-dom'
import useInView from '../../../hooks/useInView'
import { createRipple, clearRipple } from '../../../hooks/rippleEffect'

const AboutUsItem = ({ item }) => {

  const [ref, isVisible] = useInView({ threshold: 0.2 });

  return (
    <li ref={ref} key={item.id} className={`${item.id % 2 === 0 ? 'left' : 'right'} ${isVisible ? 'visible' : ''}`} style={{
        justifyContent: item.id % 2 == 0 ? 'right' : null,
      }}>
      <div className='image-container' style={{
          backgroundImage: 'url(/paweldobry.jpg)',
      }}></div>
      <div className='description-container' >
        <h3>{item.title}</h3>
        <p>{item.text}</p>
        <div className='button-wrapper'><Link to={item.href} className='learn-more-button ripple-button' onMouseEnter={createRipple} onMouseLeave={clearRipple}>dowiedz sie wiecej</Link></div>
      </div>
    </li>
  )
}

export default AboutUsItem