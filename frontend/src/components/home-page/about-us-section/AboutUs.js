import React from 'react'
import AboutUsItem from './AboutUsItem'
import './aboutUs.css'

const AboutUs = ({ aboutUsData }) => {
  return (
    <section className='about-us-section'>
      <div className='about-us-wrapper'>
        <h2>Odkryj świat możliwości w naszej szkole</h2>
        <ul>
          {
            aboutUsData && aboutUsData.length ? aboutUsData.map(dataItem => <AboutUsItem item={dataItem} />) : null
          }
        </ul>
      </div>
    </section>
  )
}

export default AboutUs