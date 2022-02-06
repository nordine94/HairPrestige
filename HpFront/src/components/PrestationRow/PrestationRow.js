import { useRef, useState } from "react";
import "./PrestationRow.css";

const PrestationRow = ({ section, elementSection }) => {
  const dropContent = useRef();
  const [isOpen, setIsOpen] = useState(true);

  let auj = new Date().toJSON(); //date du jour + heure-minutes
  auj = auj.slice(0,16);         //on enleve les caractères en trop à la fin

  const openPresta = (e, index) => {
    
    if (isOpen) {
      dropContent.current.children[index + 1].classList.add("active");
      dropContent.current.children[index + 1].children[0].children[2].classList.add("change");
    } else {
      dropContent.current.children[index + 1].classList.remove("active");dropContent.current.children[index + 1].children[0].children[2].classList.remove("change");
    }

    setIsOpen(!isOpen);

  };


  document.onclick = (e) => { 
    
    if(e.target.classList.value === "table_presta" || e.target.classList.value === "left") {
      const rows = document.querySelectorAll(".row");
      const btnReserver = document.querySelectorAll(".btnRdv");

      rows.forEach( (row) => {
        row.classList.remove("active");
      });

      btnReserver.forEach( (btn) => {
        btn.classList.remove("change");
      })
    };
  };


  return (
    <div className="prestation_row" ref={dropContent}>
      <h3>{section}</h3>

      {elementSection.map((element, index) => {
        return (
          <div className="row" key={`row-${index}`}>
            <div className="row_content" onClick={(e) => openPresta(e, index)}>
              <img src={element.icon} alt={element.iconAlt} />
              <div className="desc_prix">
                <p className="row_desc">{element.description}</p>
                <p className="row_prix">
                  <span className="a_partir">{`${element.aPartir} `}</span>
                   {element.prix}
                </p>
              </div>
              <input className="btnRdv" type="button" value="Réserver" onClick={(e) => openPresta(e, index)}/>
            </div>
            <div className="drop_content">
              <input type="text" placeholder="Prénom Nom"/>
              <input type="text" placeholder="Email" />
              <input type="datetime-local" min={auj} max="2022-04-30T19:00" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}" />
              <input type="submit" value="Prendre rendez-vous" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PrestationRow;
