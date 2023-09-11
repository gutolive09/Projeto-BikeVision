import React from "react";
import Carousel from "../../components/Carousel";
import "./Home.css";
import Beneficios from "../../components/Beneficios";

export default function Home() {
  return (
    <>
      <main>
        <h1>Bem vindo ao futuro do seguro de bicicletas</h1>
        <Carousel />
        <Beneficios/>
      </main>
    </>
  );
}
