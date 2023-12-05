import React from "react";
import CARDS_1 from "../img/card-1.png";
import CARDS_2 from "../img/card-2.png";
import CARDS_3 from "../img/card-3.png";
import CARDS_4 from "../img/card-4.png";
import Card from "../subComponents/Card";

const Cards = () => {
  return (
    <section className="cards">
      <Card
        img={CARDS_1}
        circle={"5%"}
        title={"Aplicacion de"}
        description={
          "Ahorre tiempo con click & collect y recolecte sus estrellas. Hacer pedido nunca fue tan facil."
        }
        textContentBtn={"Pruebalo"}
        estado={true}
      />
      <Card
        img={CARDS_2}
        circle={"10%"}
        title={"Delivery"}
        description={
          "Starbucks entrega su comida y bebida favorita en la puerta de tu casa."
        }
        textContentBtn={"Entrega por pedidosYa"}
        estado={true}
      />
      <Card
        img={CARDS_3}
        title={"Novedades"}
        description={
          "Mantengase informado de nuestras ultimas movedades y actualizaciones."
        }
        textContentBtn={"Mas informacion"}
        estado={false}
      />
      <Card
        img={CARDS_4}
        title={"Historia de"}
        description={"Descubra nuestra empresa y nuestra historia"}
        textContentBtn={"Mas informacion"}
        estado={false}
      />
    </section>
  );
};

export default Cards;
