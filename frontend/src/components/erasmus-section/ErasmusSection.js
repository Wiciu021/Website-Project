import React from 'react'
import feedData from '../../Data/feed-data'
import { IoChevronUpOutline } from 'react-icons/io5';
import FeedPage from '../display-feed/FeedPage';
import './erasmusSection.css'

const ErasmusSection = () => {
  return (
    <section className='erasmus-section'><FeedPage feedData={feedData} title={'Erasmus'}/></section>
  )
}

export default ErasmusSection