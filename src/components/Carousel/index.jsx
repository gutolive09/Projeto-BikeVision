import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import bikeImg2 from "../../assets/bike_banner_2.jpg";
import bikeImg3 from "../../assets/bike_banner_3.jpg";
import "./Carousel.css";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src={bikeImg2} alt="" />
        <Carousel.Caption>
          <h3>Eficiência</h3>
          <p>
            Posicione o seu negócio no futuro com processos mais eficientes.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={bikeImg3} alt="" />
        <Carousel.Caption>
          <h3>Rápido e Prático</h3>
          <p>
            Praticidade maxima para o cliente e agilidade para a seguradora.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
