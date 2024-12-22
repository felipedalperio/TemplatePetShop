import { useEffect, useState } from 'react';
import './menu.css';
import { FaArrowRightLong } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";

export default function Menu() {
  const [open, setOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1100);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1100);
    };

    // Adiciona o listener de redimensionamento
    window.addEventListener('resize', handleResize);

    // Cleanup para remover o listener ao desmontar o componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="menu">
      <div className="logo">
        <img src="./logo.svg" alt="logo" />
      </div>

      <div
        className="items"
        style={
          isSmallScreen
            ? { transform: open ? 'translateX(0)' : 'translateX(-100vw)' }
            : {}
        }
      >

        <div className="close" onClick={() => setOpen(!open)}>
          <IoCloseOutline />
        </div>

        <div className="img">
          <img src="./logo.svg" alt="logo" />
        </div>
        <ul>
          <li><a href='#header' onClick={() => setOpen(false)}>Home</a></li>
          <li><a href='#options' onClick={() => setOpen(false)}>Serviços</a></li>
          <li><a href='#aboutus' onClick={() => setOpen(false)}>Sobre nós</a></li>
          <li><a href='#gallery' onClick={() => setOpen(false)}>Fotos</a></li>
          <li><a href='#comments' onClick={() => setOpen(false)}>Avaliações</a></li>
        </ul>
        <a className="contact" href='https://api.whatsapp.com/send?phone=5527998957231'>
          Contato
          <FaArrowRightLong />
        </a>
      </div>

      <a className="contact" href='https://api.whatsapp.com/send?phone=5527999655346'>
        Contato
        <FaArrowRightLong />
      </a>

      {isSmallScreen && (
        <div className="hamburguer" onClick={() => setOpen(!open)}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      )}
    </div>
  );
}
