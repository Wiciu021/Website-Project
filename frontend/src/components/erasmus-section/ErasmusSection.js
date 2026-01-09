import React from 'react'
import feedData from '../../Data/feed-data'
import { IoChevronUpOutline } from 'react-icons/io5';
import FeedPage from '../display-feed/FeedPage';

const ErasmusSection = () => {
  return (
    <FeedPage feedData={feedData} title={'Erasmus'}/>
  )
}

export default ErasmusSection