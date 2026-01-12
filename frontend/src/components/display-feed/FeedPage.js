import React, { useState } from 'react'
import './feedPage.css'
import FeedPageItem from './FeedPageItem'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { createRipple, clearRipple } from '../../hooks/rippleEffect'

const FeedPage = ({ feedData, title }) => {
  const [posts] = useState(feedData)
  const [showContent, setShowContent] = useState(posts.slice(0, 12))
  const [currentPage, setCurrentPage] = useState(1)

  const handleNext = () => {
    if (currentPage < Math.ceil(posts.length / 12)) {
      setShowContent(posts.slice(currentPage * 12, currentPage * 12 + 12))
      setCurrentPage(prev => prev + 1)
    }
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      setShowContent(posts.slice((currentPage - 2) * 12, (currentPage - 1) * 12))
      setCurrentPage(prev => prev - 1)
    }
  }

  return (
    <section className="feed-page-section page-section">
      <div className="title-section">
        <h1>{title}</h1>
      </div>

      <div className="feed-wrapper">
        <div className="feed-grid">
          {showContent.length
            ? showContent.map(post => (
                <FeedPageItem key={post.id} item={post} />
              ))
            : <p>No data to display</p>}
        </div>
      </div>

      <div className="scroll-buttons">
        <button
          className="ripple-button scroll-button"
          onMouseEnter={createRipple}
          onMouseLeave={clearRipple}
          onClick={handlePrevious}
        >
          <FaAngleLeft size={24} />
        </button>

        <button
          className="ripple-button scroll-button"
          onMouseEnter={createRipple}
          onMouseLeave={clearRipple}
          onClick={handleNext}
        >
          <FaAngleRight size={24} />
        </button>
      </div>
    </section>
  )
}

export default FeedPage
