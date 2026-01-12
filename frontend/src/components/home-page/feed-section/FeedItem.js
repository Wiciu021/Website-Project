import React from 'react'
import './feedItem.css'
import { Link } from 'react-router-dom'
import useInView from '../../../hooks/useInView'

const FeedItem = ({ item, index }) => {

  const [ref, isVisible] = useInView({ threshold: 0.2 });

  const primaryKey = item?.images?.[0]?.key || item?.img;
  const imageUrl = primaryKey ? `/default-bucket/${primaryKey}` : '/paweldobry.jpg';

  console.log('Image URL:', imageUrl);
  console.log('Post item:', item);
  
  return (
    <div ref={ref} className={`feed-item ${isVisible ? 'visible' : ''}`} style={{
      transitionDelay: `${index * 0.3}s`
    }}>
      <div className='date-container'>
          {new Date(item.date).toLocaleDateString('pl-PL')}
        </div>
      <div className='wrapper'>
        <div className="image-wrapper" style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
      </div>
      <div className='description-container'>
        <Link to={`/aktualnosci/${item.id}`} className='link'><h3>{item.title}</h3></Link>
      </div>
    </div>
  )
}

export default FeedItem