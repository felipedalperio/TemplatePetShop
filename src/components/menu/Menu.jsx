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
          <li>Home</li>
          <li>Serviços</li>
          <li>Sobre nós</li>
          <li>Fotos</li>
          <li>Avaliações</li>
        </ul>
        <button className="contact">
          Contato
          <FaArrowRightLong />
        </button>
      </div>

      <button className="contact">
          Contato
          <FaArrowRightLong />
        </button>

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
