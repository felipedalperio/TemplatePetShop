import './photoGallery.css'
import { gallery } from '../../data'
import { useEffect, useRef, useState } from 'react';
export default function PhotoGallery() {
  const galleryRef = useRef(null);
  return (
    <div className="photoGallery">
      <span>Galeria de fotos</span>
      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, architecto nobis. Veritatis esse rerum voluptatum mollitia! Distinctio molestiae similique, repellat asperiores harum explicabo culpa soluta debitis, tempora voluptate laborum rem.</span>
      <button>Acessar</button>
      <div
        className="gallery"
        ref={galleryRef}
      >
        {gallery.map((item, key) => (
          <img src={item.img} alt={key} key={key} />
        ))}
      </div>
    </div>
  )
}
