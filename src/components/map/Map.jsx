import './map.css'
import { FaLocationDot  } from "react-icons/fa6";
import { IoArrowForward } from "react-icons/io5";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LiaPhoneSolid } from "react-icons/lia";
import { CgMail } from "react-icons/cg";

export default function Map() {
    return (
        <section className="location-section">
            <div className="container">
                <div className="header-map">
                    <h2>Aonde Estamos ?</h2>
                    <div className="accent-line"></div>
                </div>

                <div className="content-wrapper">
                    <div className="map-container">
                        <img src="./map2.PNG" alt="Map Location" />
                        <div className="map-overlay"></div>
                        <div className="map-pin">
                            <FaLocationDot />
                        </div>
                    </div>

                    <div className="content">
                        <h3>Localização e Funcionamento</h3>
                        <p className="description">
                            O Amor e Pet está localizado em um dos bairros mais charmosos de
                            <b> <i>Serra - ES, na Av. Braúna, 1011.</i></b>
                            Estamos sempre prontos para cuidar do seu pet com amor e dedicação, seja para banho, tosa, ou para ajudá-lo a encontrar os melhores produtos e acessórios.
                            Com horários flexíveis, estamos abertos de <b>segunda a sexta-feira, das 9h às 19h, sábados, das 9h às 14h, e domingos, das 9h às 13h</b>. Venha nos visitar e descubra tudo o que preparamos para o bem-estar do seu melhor amigo.
                        </p>


                        <div className="contact-details">
                            <div className="contact-item">
                                <HiOutlineLocationMarker />
                                <span>Av. Braúna, 1011 - Colina de Laranjeiras, Serra - ES</span>
                            </div>

                            <div className="contact-item">
                                <LiaPhoneSolid />
                                <span>(27) 99895-7231</span>
                            </div>

                            <div className="contact-item">
                                <CgMail />
                                <span>amorepet.atendimento@gmail.com</span>
                            </div>
                        </div>

                        <a href="https://www.google.com/maps/place/Amor+e+Pet/@-20.291657,-40.294507,17z/data=!3m1!4b1!4m6!3m5!1s0x0:0xb441844965d755ae!8m2!3d-20.291657!4d-40.292318!16s%2Fg%2F11c5d4l78r?entry=ttu" target="_blank">
                            <button className="maps-button">
                                Abrir no Google Maps
                                <IoArrowForward/>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
