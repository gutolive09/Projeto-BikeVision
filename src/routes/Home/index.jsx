import "./Home.css";
import Beneficios from "../../components/Beneficios";
import Banner from "../../components/Banner";
import {BsBicycle} from 'react-icons/bs'

export default function Home() {
  return (
    <>
      <main>
        <Banner/>
        <section className="desc">
          <h2>A solução para o seu negocio de seguros</h2>
          <BsBicycle className="bike"/>
          <hr/>
          <p>
            Atualmente é necessario a presença de uma pessoa para realizar o processo de vistoria de bicicletas, o que deixa o processo custoso para a seguradora e inconveniente para o cliente.
            É por isso que a BikeVision surgiu, para automatizar o processo e aprimorar a experiência da seguradora e do cliente.
          </p>
        </section>
        <Beneficios />
      </main>
    </>
  );
}
