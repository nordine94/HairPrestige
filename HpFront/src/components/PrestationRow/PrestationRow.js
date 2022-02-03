import { useRef, useState } from "react";
import "./PrestationRow.css";

const PrestationRow = ({ section, elementSection }) => {

    const dropContent = useRef();
    const [ isOpen, setIsOpen ] = useState(true);

    const openPresta = (e) => {
        setIsOpen(!isOpen);
        console.log(dropContent);
        if(isOpen) {
            e.target.parentNode.parentNode.classList.add("active");
            e.target.parentNode.parentNode.parentNode.classList.add("active");
        } else {
            e.target.parentNode.parentNode.classList.remove("active");
            e.target.parentNode.parentNode.parentNode.classList.remove("active");
        }
    }

    const closePresta = (e) => {
        if(!isOpen) {
            e.target.parentNode.parentNode.classList.remove("active");
            e.target.parentNode.parentNode.parentNode.classList.remove("active");
        }
    }

  return (
    <div className="prestation_row">
      <h3>{section}</h3>

      {elementSection.map((element, index) => {
        return (
          <div className="row" key={`row-${index}`} ref={dropContent}>
            <div className="row_content" onClick={openPresta}>
              <img src={element.icon} alt={element.iconAlt} />
              <div className="desc_prix">
                <p>{element.description}</p>
                <p>{element.prix}</p>
              </div>
            </div>
            <div className="drop_content">
                <input type="text" />
                <input type="text" name="" id="" />
                <input type="submit" value="Prendre rendez-vous" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PrestationRow;
