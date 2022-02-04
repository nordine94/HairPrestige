import { useRef, useState } from "react";
import "./PrestationRow.css";

const PrestationRow = ({ section, elementSection }) => {
  const dropContent = useRef();
  const [isOpen, setIsOpen] = useState(true);

  // const heure = new Date().toLocaleTimeString(); //heure + min
  const auj = new Date().toLocaleDateString(); //heure + min
  console.log(auj);

  const openPresta = (index) => {
    
    if (isOpen) {
      dropContent.current.children[index + 1].classList.add("active");
      dropContent.current.children[index + 1].children[0].children[2].classList.add("change");
    } else {
      dropContent.current.children[index + 1].classList.remove("active");dropContent.current.children[index + 1].children[0].children[2].classList.remove("change");
    }

    setIsOpen(!isOpen);

  };


  document.onclick = (e) => { 
    
    if(e.target.classList.value === "table_presta") {
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
                <p className="row_prix">{element.prix}</p>
              </div>
              <input className="btnRdv" type="button" value="Réserver" onClick={(e) => openPresta(e, index)}/>
            </div>
            <div className="drop_content">
              <input type="text" placeholder="Prénom Nom"/>
              <input type="text" placeholder="Email" />
              <input type="datetime-local" min="04-02-2022T09:00" max="28-02-2022T19:00" pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}T[0-9]{2}:[0-9]{2}" />
              <input type="submit" value="Prendre rendez-vous" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PrestationRow;
