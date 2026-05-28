import React, { useState, useEffect } from 'react'
import './feedPage.css'
import FeedPageItem from './FeedPageItem'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { createRipple, clearRipple } from '../../hooks/rippleEffect'

// work with this version

const FeedPage = () => {
  const [posts, setPost] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showContent, setShowContent] = useState(posts.slice(0, 12))
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/aktualnosci');
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPost(Array.isArray(data) ? data : []);

      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Failed to load posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

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
    <section className='feed-page-section page-section'>
      <div className='title-section'>
        <h1>Aktualności</h1>
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
