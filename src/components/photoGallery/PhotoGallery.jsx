import './photoGallery.css'
import { gallery } from '../../data'
import { useRef } from 'react';
import { FaInstagram } from "react-icons/fa";
export default function PhotoGallery() {
  const galleryRef = useRef(null);
  return (
    <div className="photoGallery" id='gallery'>
      <span>Galeria de fotos</span>
      <span>Apresentamos a seguir nossa galeria de fotos, onde você poderá conferir um pouco do nosso trabalho e a qualidade dos serviços que oferecemos. Aqui, mostramos como tratamos cada pet com cuidado, profissionalismo e carinho, garantindo sempre o melhor para o seu amigo de quatro patas.</span>
      <a href="https://www.instagram.com/amorepetcolina/">
        <button> <FaInstagram size={18} /> Ver mais</button>
      </a>
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
