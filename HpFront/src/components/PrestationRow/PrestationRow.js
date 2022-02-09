
import "./PrestationRow.css";

const PrestationRow = ({ section, elementSection }) => {
  
  return (
    <div className="prestation_row">
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
