import React, { useState } from 'react'
import './photoGallerySection.css'
import GalleryItem from './GalleryItem'
import galleryData from '../../Data/gallery-data'

const PhotoGallerySection = () => {

  const height = galleryData.length * 330;

  return (
    <section className='photo-gallery-section'>
      <h2>Galeria</h2>
      <div className="timeline-wrapper" style={{
        height: height
      }}>
        {
          galleryData && galleryData.length ? galleryData.map((galleryItem, idx) => <GalleryItem item={galleryItem} idx={idx} key={galleryItem.id} position={galleryItem.id % 2} length={galleryData.length} />) : null
        }
      </div>
    </section>
  )
}

export default PhotoGallerySection