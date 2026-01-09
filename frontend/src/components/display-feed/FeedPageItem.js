import React from 'react'
import { Link } from 'react-router-dom'
import useInView from '../../hooks/useInView';
import { createRipple, clearRipple } from '../../hooks/rippleEffect';

const FeedPageItem = React.memo(({ item }) => {

  const [ref, isVisible] = useInView({ threshold: 0.2 });

  return (
    <div ref={ref} className={`feed-page-item ${isVisible ? 'visible' : ''} `}>
      <div className='card-image-container' style={{
        backgroundImage: `url(/default-bucket/${item.img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <div className='date-container'>
          {new Date(item.date).toLocaleDateString('pl-PL')}
        </div>
      </div>
      <div className='card-wrapper'>
        <div className='card-desctiption-container'>
          <h3>{item.title}</h3>
          <div className='description'>
            {
              item.description.length > 80 ? item.description.slice(0, 80) + '...' : item.description 
            }
          </div>
        </div>
        <div className='card-footer-container'>
          <h4>{item.author}</h4>
          <Link to={`/post/${item.id}`} className='see-more-button ripple-button' onMouseEnter={createRipple} onMouseLeave={clearRipple}>więcej</Link>
        </div>
      </div>
    </div>
  )
})

export default FeedPageItem