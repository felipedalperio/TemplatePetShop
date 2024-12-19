import './photoGallery.css'
import { gallery } from '../../data'
import { useEffect, useRef, useState } from 'react';
export default function PhotoGallery() {
  const galleryRef = useRef(null);
  const [animationDuration, setAnimationDuration] = useState('10s'); // Default duration
  useEffect(() => {

    const updateAnimationDuration = () => {
      const galleryElement = galleryRef.current;
      if (galleryElement) {
        const totalWidth = galleryElement.scrollWidth; // Largura total do carrossel
        const visibleWidth = galleryElement.offsetWidth; // Largura visível do contêiner
        const scrollableWidth = totalWidth - visibleWidth;

        // Calcule a duração com base no scrollável (1s para cada 100px, por exemplo)
        const duration = galleryElement.scrollWidth / 200; // Ajuste a velocidade aqui
        setAnimationDuration(`${duration}s`);
      }
    };

    // Atualiza ao carregar e ao redimensionar a janela
    updateAnimationDuration();
    window.addEventListener('resize', updateAnimationDuration);

    return () => window.removeEventListener('resize', updateAnimationDuration);
  }, []);
  return (
    <div className="photoGallery">
      <span>Galeria de fotos</span>
      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, architecto nobis. Veritatis esse rerum voluptatum mollitia! Distinctio molestiae similique, repellat asperiores harum explicabo culpa soluta debitis, tempora voluptate laborum rem.</span>
      <button>Acessar</button>
      <div
        className="gallery"
        ref={galleryRef}
        style={{ animationDuration:animationDuration}}
      >
        {gallery.map((item, key) => (
          <img src={item.img} alt={key} key={key} />
        ))}
      </div>
    </div>
  )
}
