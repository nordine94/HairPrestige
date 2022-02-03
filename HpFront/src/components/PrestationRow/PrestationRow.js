import "./PrestationRow.css";

const PrestationRow = ({ section, elementSection }) => {
  return (
    <div className="prestation_row">
      <h3>{section}</h3>

      {elementSection.map((element, index) => {
        return (
          <div className="row" key={`row-${index}`}>
            <img src={element.icon} alt={element.iconAlt} />
            <p>{element.description}</p>
            <p>{element.prix}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PrestationRow;
