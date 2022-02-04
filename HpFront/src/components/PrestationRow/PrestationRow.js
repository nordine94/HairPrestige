import { useEffect } from "react";
import { useRef, useState } from "react";
import "./PrestationRow.css";

const PrestationRow = ({ section, elementSection }) => {
  const dropContent = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const openPresta = (e, index) => {
    setIsOpen(!isOpen);
    console.log();
    if (isOpen) {
      dropContent.current.children[index + 1].classList.add("active");
    } else {
      dropContent.current.children[index + 1].classList.remove("active");
    }

    return index
  };

  const closePresta = () => {
    if (!isOpen) {
      dropContent.current.children[index + 1].classList.remove("active")
      
    }
  };

  useEffect(() => {
    console.log(document.addEventListener('click', closePresta));
  })

  return (
    <div className="prestation_row" ref={dropContent}>
      <h3>{section}</h3>

      {elementSection.map((element, index) => {
        return (
          <div className="row" key={`row-${index}`}>
            <div className="row_content" onClick={(e) => openPresta(e, index)}>
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
