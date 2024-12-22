import './footer.css'
import { FiMapPin, FiInstagram, FiPhone } from "react-icons/fi";


export default function Footer() {
    return (
        <div className="footer">
            <div className="footerTop">
                <div className="footerLeft">
                    <span className='TitleFooter'>Amor e Pet</span>
                    <span className='footerDesc'>O Amor e Pet é um pet shop localizado na Avenida Braúna, 1011, em Serra, Espírito Santo, com mais de 9 anos de experiência no cuidado e bem-estar de animais de estimação. é o lugar ideal para quem busca atendimento de qualidade, sempre priorizando o conforto e a saúde dos nossos amiguinhos. </span>
                </div>
                <div className="footerMiddle">
                    <span className='TitleFooter'>Serviços</span>
                    <span className='footerDesc'>O estabelecimento oferece uma ampla gama de serviços dedicados ao bem-estar e à saúde dos pets, incluindo banho e tosa, realizados por profissionais capacitados que garantem conforto e higiene. Além disso, conta com um consultório veterinário para atender às necessidades de saúde dos animais, com cuidado e atenção personalizada.</span>
                </div>
                <div className="footerRigth">
                    <span className='TitleFooter'>Contato</span>
                    <div className="iconsWrapper">
                        <div className="iconFooter">
                            <FiMapPin />
                            <span className='footerDesc'>Serra - ES</span>
                        </div>
                        <div className="iconFooter">
                            <FiInstagram />
                            <span className='footerDesc'>@amorepetcolina</span>
                        </div>
                        <div className="iconFooter">
                            <FiPhone />
                            <span className='footerDesc'>(27) 99895-7231</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footerBottom">
                © 2025 Amor&Pet
            </div>
        </div>
    )
}
