import { useRef } from "react";
import "./PrestationRow.css";

const PrestationRow = ({ section, elementSection }) => {
  const dropContent = useRef();

  let auj = new Date().toJSON(); //date du jour + heure-minutes
  auj = auj.slice(0, 16); //on enleve les caractères en trop à la fin


  return (
    <div className="prestation_row" ref={dropContent}>
      <h3>{section}</h3>

      {elementSection.map((element, index) => {
        return (
          <div className="row" key={`row-${index}`}>
            <div className="row_content">
              <div className="desc_prix">
                <img src={element.icon} alt={element.iconAlt} />
                <p className="row_desc">{element.description}</p>
              </div>
              <p className="row_prix">
                <span className="a_partir">{`${element.aPartir}`}</span>
                {element.prix}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PrestationRow;
