import { FaQuoteLeft, FaStar } from "react-icons/fa";
import "./comments.css";
import { items } from "../../data";
import { useState, useRef, useEffect } from "react";

export default function Comments() {
  const [item, setItem] = useState(items);
  const boxRefs = useRef([]); // Array de referências para os boxes

  const choseOption = (id) => {
    // Atualiza o estado para ativar/desativar os itens
    setItem(item.map((obj) => ({ ...obj, isActive: obj.id === id })));

    // Faz o scroll até o box correspondente
    const targetBox = boxRefs.current[id];
    if (targetBox) {
      targetBox.scrollIntoView({
        behavior: "smooth", // Scroll suave
        block: "nearest", // Ajusta a posição verticalmente
        inline: "center", // Centraliza horizontalmente
      });
    }
  };

  return (
    <div className="Comments">
      <span className="title">Comentários e Avaliações</span>
      <span className="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta modi,
        unde exercitationem dolor enim odio harum delectus ab sequi quas sunt
        voluptas voluptate inventore rem eos illo possimus ipsa incidunt.
      </span>
      <div className="wrapperOtions">
        {item.map((object) => (
          <div
            key={object.id}
            onClick={() => choseOption(object.id)} // Passa o id do item clicado
            className={`optionsItem ${object.isActive ? "active" : ""}`}
          ></div>
        ))}
      </div>
      <div className="boxWrapper">
        {item.map((object) => (
          <div
            onClick={() => choseOption(object.id)} // Passa o id do item clicado
            ref={(el) => (boxRefs.current[object.id] = el)} // Armazena a referência do box
            className={`box ${object.isActive ? "active" : ""}`}
            key={object.id}
          >
            <FaQuoteLeft
              className="iconQuoteTop"
              size={24}
              color={object.isActive ? "#fe5c5c" : "#444"}
              style={{ zIndex: 2 }}
            />
            <span className="desc">{object.desc}</span>
            <div className="profile">
              <img src={object.img} alt="" />
              <div className="profileWrapper">
                <spon className="name">{object.name}</spon>
                <div className="stars">
                  {Array.from({ length: 5 }, (_, index) => (
                    <div key={index + 1}>
                      <FaStar color={object.isActive ? "#ff9100" : "#444"} />
                    </div>
                  ))}
                </div>
              </div>
              <FaQuoteLeft
                className="iconQuoteBottom"
                size={24}
                color={object.isActive ? "#fe5c5c" : "#444"}
                style={{ zIndex: 2 }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
