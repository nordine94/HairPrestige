<<<<<<< HEAD
import "./Horaires.css";

const Horaires = () => {
  const horaireSemaine = [
    { jour: "Lundi", heure: "Fermé" },
    { jour: "Mardi", heure: "9h - 19h" },
    { jour: "Mercredi", heure: "9h - 19h" },
    { jour: "Jeudi", heure: "9h - 19h" },
    { jour: "Vendredi", heure: "9h - 19h" },
    { jour: "Samedi", heure: "9h - 19h" },
    { jour: "Dimanche", heure: "Fermé" },
  ];

  return (
    <div className="horaires_salon">
      <h3>Horaires du salon</h3>
      <table>
        <tbody>
          {horaireSemaine.map((horaireJour, index) => {
            return (
              <tr key={`horaire-${index}`}>
                <td> {horaireJour.jour} </td>
                <td> {horaireJour.heure} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Horaires;
=======
import "./Horaires.css";

const Horaires = () => {
  const horaireSemaine = [
    { jour: "Lundi", heure: "Fermé" },
    { jour: "Mardi", heure: "9h - 19h" },
    { jour: "Mercredi", heure: "9h - 19h" },
    { jour: "Jeudi", heure: "9h - 19h" },
    { jour: "Vendredi", heure: "9h - 19h" },
    { jour: "Samedi", heure: "9h - 19h" },
    { jour: "Dimanche", heure: "Fermé" },
  ];

  return (
    <div className="horaires_salon">
      <h3>Horaires du salon</h3>
      <table>
        <tbody>
          {horaireSemaine.map((horaireJour, index) => {
            return (
              <tr>
                <td> {horaireJour.jour} </td>
                <td> {horaireJour.heure} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Horaires;
>>>>>>> 9f0a2f93d9da4bc7e1e92b082295280e5c2f4a56
