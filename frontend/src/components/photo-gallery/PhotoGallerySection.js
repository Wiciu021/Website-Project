import React, { useEffect, useState } from 'react'
import './photoGallerySection.css'
import GalleryItem from './GalleryItem'
import galleryData from '../../Data/gallery-data'
import GallerySwiper from './GallerySwiper'

const PhotoGallerySection = () => {

  //const height = galleryData.length * 291;

  const [showSwiper, setShowSwiper] = useState(null);
  const [swiperArray, setSwiperArray] = useState([]);

  useEffect(() => {
    if (!showSwiper) {
      setSwiperArray([]);
      return;
    }
    const newArray = galleryData.find(item => item.folder === showSwiper).children;
    setSwiperArray(newArray);
  }, [showSwiper]);

  useEffect(() => {
    if (showSwiper) {
      document.documentElement.style.overflowY = 'hidden';
      document.body.style.overflowY = 'hidden';
    } else {
      document.documentElement.style.overflowY = 'auto';
      document.body.style.overflowY = 'auto';
    }
  }, [showSwiper]);

  return (
    <section className='photo-gallery-section'>
      <div className='gallery-section-wrapper' style={{
        filter: showSwiper ? 'blur(10px)' : 'none',
        pointerEvents: showSwiper ? 'none' : 'all'
      }}>
        <h2>Galeria</h2>
        <div className="gallery-grid">
          {
            galleryData && galleryData.length ? galleryData.map((galleryItem, idx) => <GalleryItem setShowSwiper={setShowSwiper} item={galleryItem} idx={idx} key={galleryItem.id} length={galleryData.length} />) : null
          }
        </div>
      </div>
        {
          swiperArray && swiperArray.length ? <GallerySwiper photosArray={swiperArray} folder={showSwiper} setShowSwiper={setShowSwiper} /> : null
        }
    </section>
  )
}

export default PhotoGallerySection