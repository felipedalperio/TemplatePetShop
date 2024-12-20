import './map.css'

export default function Map() {
    return (
        <section class="location-section">
            <div class="container">
                <div class="header-map">
                    <h2>Aonde Estamos ?</h2>
                    <div class="accent-line"></div>
                </div>

                <div class="content-wrapper">
                    <div class="map-container">
                        <img src="./map2.PNG" alt="Map Location" />
                        <div class="map-overlay"></div>
                        <div class="map-pin">
                            <svg fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fill-rule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </div>
                    </div>

                    <div class="content">
                        <h3>Localização e Funcionamento</h3>
                        <p class="description">
                            O <b>Amor e Pet</b> está localizado em um dos bairros mais
                            charmosos de Serra - ES, na Rua das Tulipas, 123. Estamos
                            abertos de <b>segunda a sexta-feira</b>, das <b>9h às 20h</b>, e
                            aos <b>sábados</b>, das <b>8h às 17h</b>, sempre prontos para
                            atender às necessidades do seu pet com amor e dedicação. Seja
                            para banho, tosa, ou para encontrar os melhores produtos e
                            acessórios.
                        </p>

                        <div class="contact-details">
                            <div class="contact-item">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <span>123 Rua francisco atonelo, Serra - ES</span>
                            </div>

                            <div class="contact-item">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <span>+27 99999-9999</span>
                            </div>
                        </div>

                        <button class="maps-button">
                            Abrir no Google Maps
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
