import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import feedData from '../../Data/feed-data'
import '../feed-page/feedPageItem.css'
import '../feed-page/feedPage.css'
import './feedPagePost.css'

const FeedPagePost = () => {

  const { id } = useParams();
  const postId = parseInt(id);
  const post = feedData.find(item => item.id == postId);

  const navigate = useNavigate();

  if (!post) {
    return <div>not found</div>
  }

  return (
    <section className='feed-page-post page-section'>
      {/* <div className='title-section'>
        <h1>Aktualności</h1>
      </div> */}
      <div className='wrapper'>
        <div className='post-card'>
          <div className='card-image-container' style={{
            // backgroundImage: `url(/images/${post.img}.jpg)`,
            backgroundImage: 'url(/kids1.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}>
            <div className='date-container'>{post.date}</div>
          </div>
          <div className='card-desctiption-container'>
            <h3>{post.title}</h3>
            <div className='desctiption'>
              {
                post.description
              }
            </div>
          </div>
          <div className='card-footer-container'>
            <h4>{post.author}</h4>
            <button className='go-back-button' onClick={() => navigate(-1)}>cofnij</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeedPagePost