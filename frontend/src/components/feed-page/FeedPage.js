import React, { useState, useEffect } from 'react'
import './feedPage.css'
import FeedPageItem from './FeedPageItem'
import './FeedPageItem'
import './feedPageItem.css'
import { IoChevronUpOutline } from 'react-icons/io5';
// import feedData from '../../Data/feed-data'

const FeedPage = ({ feedData }) => {
  const [posts, setPosts] = useState(feedData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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
  }, []);

  return (
    <section className='feed-page-section page-section'>
      <div className='title-section'>
        <h1>Aktualności</h1>
      </div>
      <div className='feed-wrapper'>
        <div className='feed-grid' style={{
          gridTemplateColumns: posts.length === 0 ? '1fr' : null
        }}>
          {
            posts && posts.length ?
            posts.map(post => <FeedPageItem key={post.id} item={post}/>)
            : <p>No data to display</p>
          }
        </div>
      </div>
      {/* zrobic jeszcze zeby ten przycisk dzialal ale na razie nie robie bo zajmuje sie tylko designem cn */}
      <button className='scroll-to-top-button'><IoChevronUpOutline/></button>
    </section>
  )
}

export default FeedPage