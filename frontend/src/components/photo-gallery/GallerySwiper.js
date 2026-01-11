import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation  } from 'swiper/modules'; 
import './gallerySwiper.css'
import { IoCloseOutline } from "react-icons/io5";

const GallerySwiper = ({ photosArray, folder, setShowSwiper }) => {

  const handleClick = () => {
    setShowSwiper(null);
  }
  
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      spaceBetween={0}
      pagination={{ clickable: true, dynamicBullets: true }}
      className='swiper-container'
      navigation={{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }}
      loop={true}
    >
      {photosArray.map((item) => (
        <SwiperSlide key={item.id} className='swiper-slide' style={{
            // backgroundImage: `url(/images/gallery/${folder}/${item.img}.jpg)`,
            backgroundImage: 'url(/kids1.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}>
            <button className='close-button' onClick={handleClick}><IoCloseOutline /></button>
          <div className='content-container'>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            {/* <img src={`/images/gallery/${folder}/${item.img}.jpg`} alt={item.title} style={{ width: '100px' }} /> */}
          </div>
        </SwiperSlide>
        
      ))}
      <div className="swiper-button-next">{">"}</div>
  <div className="swiper-button-prev">{"<"}</div>
    </Swiper>
  )
}

export default GallerySwiper