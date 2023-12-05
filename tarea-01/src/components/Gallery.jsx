import React from 'react'
import GALLERY_1 from '../img/gallery-1.png'
import GALLERY_2 from '../img/gallery-2.png'
import GALLERY_3 from '../img/gallery-3.png'


const Gallery = () => {
  return (
    <section className="gallery">
    <img
      className="gallery__imagen"
      src={GALLERY_1}
      alt="gallery"
    />
    <img
      className="gallery__imagen"
      src={GALLERY_2}
      alt="gallery"
    />
    <img
      className="gallery__imagen"
      src={GALLERY_3}
      alt="gallery"
    />
  </section>

  )
}

export default Gallery