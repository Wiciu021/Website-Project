import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './feedPagePost.css'
import { createRipple, clearRipple } from '../../../hooks/rippleEffect'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'

const FeedPagePost = () => {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`/api/aktualnosci/${id}`, { cache: 'no-store' })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = await res.json()
        setPost(data)
      } catch (e) {
        console.error('Failed to load post', e)
        setError('Nie udało się załadować posta')
      }
    }
    load()
  }, [id])

  if (error) return <section className='page-section'>{error}</section>
  if (!post) return <section className='page-section'>Ładowanie...</section>

  const imageKeys = Array.isArray(post.images) && post.images.length > 0
    ? post.images.map(img => img.key)
    : (post.img ? [post.img] : [])

  const dateLabel = post.date ? new Date(post.date).toLocaleDateString('pl-PL') : ''

  return (
    <section className='feed-page-post page-section'>
      <div className='wrapper'>
        <div className='post-card'>
          <div className='card-image-container'>
            {imageKeys.length ? (
              <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                loop={imageKeys.length > 1}
                slidesPerView={1}
              >
                {imageKeys.map((key, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="swiper-image"
                      style={{ backgroundImage: `url(/default-bucket/${key})` }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div className="swiper-image" style={{ backgroundImage: `url(/paweldobry.jpg)` }} />
            )}
            <div className='date-container'>{dateLabel}</div>
          </div>

          <div className='card-wrapper'>
            <div className='card-desctiption-container'>
              <h3>{post.title}</h3>
              <div className='desctiption'>{post.description}</div>
            </div>
            <div className='card-footer-container'>
              <h4>{post.author}</h4>
              <button
                className='go-back-button ripple-button'
                onMouseEnter={createRipple}
                onMouseLeave={clearRipple}
                onClick={() => navigate(-1)}
              >
                cofnij
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeedPagePost