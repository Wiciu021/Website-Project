import React, { useEffect, useState } from 'react'
import FeedItem from './FeedItem'
import './feed.css'

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let delayValue = -1;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/aktualnosci/recent?limit=3', { cache: 'no-store' });
        if (!res.ok) throw new Error('Network response was not ok');
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Nie udało się załadować postów');
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <section className='feed-section'>
      <h2>Aktualności</h2>
      
      {!loading && !error && (
        <div className='feed-container'>
          {posts && posts.length ? posts.map(item => {
            delayValue++;
            return <FeedItem key={item.id} index={delayValue} item={item} />
          }) : <div>Brak postów</div>}
        </div>
      )}
    </section>
  )
}

export default Feed