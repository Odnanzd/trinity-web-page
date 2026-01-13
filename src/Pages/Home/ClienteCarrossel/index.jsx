import useEmblaCarousel from 'embla-carousel-react';
import LogoTW from '../../../assets/logo-tw.jpg'
import LogoSaga from '../../../assets/logo-saga.jpg'
import LogoFTR from '../../../assets/logo-ftr.png'
import LogoClaro from '../../../assets/logo-claro.png'
import LogoSindler from '../../../assets/logo-sindler.png'
import ScrollReveal from "../../../components/Hooks/ScrollReveal";
import ScrollRevealGroup from "../../../components/Hooks/ScrollRevealGroup";
import './Clientes.css'

const clients = [
  { id: 1, name: 'TW', logo: LogoTW },
  { id: 2, name: 'Saga', logo: LogoSaga },
  { id: 3, name: 'FTR', logo: LogoFTR },
  { id: 4, name: 'Claro', logo: LogoClaro },
  { id: 5, name: 'Sindler', logo: LogoSindler }
];

const ClienteCarrossel = () => {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    dragFree: true,
    containScroll: "trimSnaps",
    align: "start",
  });

  return (
    <section className="clients-section">
      <div className="container-clients">

        {/* HEADER */}
        <ScrollRevealGroup stagger={0.15}>
          <div className="section-header-clients">
            <ScrollReveal animation="fade">
              <span className="section-badge">Parceiros</span>
            </ScrollReveal>

            <ScrollReveal animation="slide" direction="up">
              <h2 className="section-title-clients">Nossos Clientes</h2>
            </ScrollReveal>

            <ScrollReveal animation="slide" direction="up">
              <p className="section-subtitle-clients">
                Empresas que confiam em nosso trabalho
              </p>
            </ScrollReveal>
          </div>
        </ScrollRevealGroup>

        {/* CARROSSEL */}
        <ScrollRevealGroup>
          <ScrollReveal animation="slide" direction="up">
            <div className="clients-carousel">
              <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                  {clients.map((client, index) => (
                    <div className="embla__slide" key={index}>
                      <div className="client-card">
                        <div className="client-logo">
                          <img src={client.logo} alt="Logo cliente" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="carousel-hint">
                ← Arraste para navegar →
              </p>
            </div>
          </ScrollReveal>
        </ScrollRevealGroup>

      </div>
    </section>
  );
};

export default ClienteCarrossel;