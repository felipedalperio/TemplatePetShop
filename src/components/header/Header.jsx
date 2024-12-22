import './header.css'
import { BsTelephone } from "react-icons/bs";

export default function Header() {
    return (
        <div className="header" id='header'>
            <div className="left">
                <div className="leftWrapper">
                    <div className="title">
                        <span className='titleBold'>SEU PET</span>
                        <span className='titleThin'>merece</span><br />
                        <span className='titleThin'>o melhor</span>
                        <span className='titleBold'>CUIDADO. <img className="star" src="./star.webp" alt="" /></span>
                    </div>
                    <span className="desc">
                        Com 9 anos de experiência no bem-estar<br /> dos nossos amiguinhos!
                    </span>
                    <div className="buttonWrapper">
                        <a href="tel:+5527998957231">
                            <button><BsTelephone /> Ligue agora</button>
                        </a>
                        <a href="#options">
                            <button>Saiba mais</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="rigth">
                <img src="/HeaderImage.svg" alt="" />

                <div className="circle"></div>
                <div className="circle"></div>
            </div>
        </div>
    )
}
