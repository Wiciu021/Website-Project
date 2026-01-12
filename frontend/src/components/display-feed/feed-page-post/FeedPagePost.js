import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import feedData from '../../../Data/feed-data'
import './feedPagePost.css'
import { createRipple, clearRipple } from '../../../hooks/rippleEffect'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/autoplay'

const FeedPagePost = () => {

  const { id } = useParams();
  const postId = parseInt(id);
  const post = feedData.find(item => item.id == postId);

  const navigate = useNavigate();

  const images = post.images;

  if (!post) {
    return <div>not found</div>
  }

  console.log('Image URL:', `/posts/${post.img}`);
  console.log('Post item:', post);

  return (
    <section className='feed-page-post page-section'>
      {/* <div className='title-section'>
        <h1>Aktualności</h1>
      </div> */}
      <div className='wrapper'>
        <div className='post-card'>
          <div className='card-image-container'>
            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false
              }}
              loop={true}
              slidesPerView={1}
            >
              {post.image.map((img, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="swiper-image"
                    style={{
                      backgroundImage: `url(/default-bucket/${img})`
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className='date-container'>{post.date}</div>
          </div>

          <div className='card-wrapper'>
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
              <button className='go-back-button ripple-button' onMouseEnter={createRipple}
                          onMouseLeave={clearRipple} onClick={() => navigate(-1)}>cofnij</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeedPagePost