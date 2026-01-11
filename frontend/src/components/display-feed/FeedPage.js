import React, { useState, useEffect } from 'react'
import './feedPage.css'
import FeedPageItem from './FeedPageItem'
import './FeedPageItem'
import './feedPageItem.css'
import { IoChevronUpOutline } from 'react-icons/io5';
// import feedData from '../../Data/feed-data'
import { createRipple, clearRipple } from '../../hooks/rippleEffect';

const FeedPage = ({ feedData, title }) => {
  const [posts, setPosts] = useState(feedData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showContent, setShowContent] = useState(posts.slice(0, 12));
  const [currentPage, setCurrentPage] = useState(1);

  /*useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/aktualnosci');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Failed to load posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);*/

  const handleNext = () => {
    if (currentPage < posts.length / 12) {
      setShowContent(posts.slice(currentPage * 12, currentPage * 12 + 12));
      setCurrentPage(currentPage + 1);
    }
    
  }

  const handlePrevious = () => {
    if (currentPage != 0) {
      setShowContent(posts.slice((currentPage - 1) * 12, (currentPage - 1) * 12 + 12));
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <section className='feed-page-section page-section'>
      <div className='title-section'>
        <h1>{title}</h1>
      </div>
      <div className='feed-wrapper'>
        <div className='feed-grid' style={{
          gridTemplateColumns: posts.length === 0 ? '1fr' : null
        }}>
          {
            posts && posts.length ?
            showContent.map(post => <FeedPageItem key={post.id} item={post}/>)
            : <p>No data to display</p>
          }
        </div>
      </div>
      <div className='scroll-buttons'>
        <button className='ripple-button previous scroll-button'  onMouseEnter={createRipple} onMouseLeave={clearRipple} onClick={handlePrevious}>{"<"}</button>
        <button className='ripple-button next scroll-button'  onMouseEnter={createRipple} onMouseLeave={clearRipple} onClick={handleNext}>{">"}</button>
      </div>
    </section>
  )
}

export default FeedPage