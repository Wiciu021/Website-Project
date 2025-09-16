import React from 'react'
import './aboutUsItem.css'
import { Link } from 'react-router-dom'
import useInView from '../../../hooks/useInView'

const AboutUsItem = ({ item }) => {

  const [ref, isVisible] = useInView({ threshold: 0.2 });

  return (
    <li ref={ref} key={item.id} className={`${item.id % 2 === 0 ? 'left' : 'right'} ${isVisible ? 'visible' : ''}`} style={{
        justifyContent: item.id % 2 == 0 ? 'right' : null,
      }}>
      <div className='description-container' >
        <h3>{item.title}</h3>
        <p>{item.text}</p>
        <div className='button-wrapper'><Link to={item.href} className='learn-more-button'>dowiedz sie wiecej</Link></div>
      </div>
      <div className='image-container' style={{
          backgroundImage: 'url(/paweldobry.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '50%',
          height: '320px'
      }}></div>
    </li>
  )
}

export default AboutUsItem