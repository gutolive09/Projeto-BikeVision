import React, { useState } from "react";
import QuestBike from "../../components/QuestBike";
import CadastroBike from "../../components/CadastroBike";


export default function Vistoria() {

  const [cadastro, setCadastro] = useState(null)

  return (
    <>
      <p>vistoria</p>
      {cadastro == null && <QuestBike setCadastro={setCadastro}/>}
      {cadastro == false && <CadastroBike setCadastro={setCadastro}/>}
    </>
  );
}
