import React from 'react'
import HeroSection from './hero-section/HeroSection'
import ForStudent from './for-student-section/ForStudent'
import Feed from './feed-section/Feed'
import AboutUs from './about-us-section/AboutUs'
import './homePage.css'

const HomePage = ({ feedData, aboutUsData }) => {
    return (
        <section className='home-page'>
            <HeroSection />
            <ForStudent />
            <Feed feedData={feedData} />
            <AboutUs aboutUsData={aboutUsData} />
        </section>
    )
}

export default HomePage