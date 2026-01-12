import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import feedData from '../../../Data/feed-data'
import './feedPagePost.css'

const FeedPagePost = () => {

  const { id } = useParams();
  const postId = parseInt(id);
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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

  if (!post) {
    return <div>not found</div>
  }

  const images = Array.isArray(post?.images) ? post.images : []; //DLA KONRADA DODAJ ZEBY MOZNA BYLO PRZEWIJAC TE ZDJECAI

  console.log('Image URL:', `url(/default-bucket/${post.img}`);
  console.log('Post item:', post);

  return (
    <section className='feed-page-post page-section'>
      {/* <div className='title-section'>
        <h1>Aktualności</h1>
      </div> */}
      <div className='wrapper'>
        <div className='post-card'>
          <div className='card-image-container' style={{
            backgroundImage: `url(/default-bucket/${post.img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}>
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
              <button className='go-back-button' onClick={() => navigate(-1)}>cofnij</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeedPagePost