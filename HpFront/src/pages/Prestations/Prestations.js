import PrestationRow from "../../components/PrestationRow/PrestationRow";
import prestations_hp from "../../components/PrestationRow/prestations_HP";

import "./Prestations.css";
import Bandeau from "../../components/Bandeau/Bandeau";
import bandeauImage from "../../assets/img/washmahair.jpg";


const Prestations = () => {
  const contenuBandeau = {
    titre:"Hair Prestige",
    texte : [
     "Pour votre mariage prenez rendez-vous",
     "à Choisy-le-Roi.",
    ]}

  return (
    <div className="prestations">
      <Bandeau image={bandeauImage} titre={contenuBandeau.titre} texte={contenuBandeau.texte}/>
      <div className="table_presta">
        <h1>Les prestations de Hair Prestige</h1>

        <PrestationRow
          section={prestations_hp.titresSections
          .forfaits}
          elementSection={prestations_hp.sectionForfaits}
        />
        <PrestationRow
          section={prestations_hp.titresSections
          .shampooing}
          elementSection={prestations_hp.sectionShampooing}
        />
        <PrestationRow
          section={prestations_hp.titresSections
          .soin}
          elementSection={prestations_hp.sectionSoin}
        />
        <PrestationRow
          section={prestations_hp.titresSections
          .coiffages}
          elementSection={prestations_hp.sectionCoiffage}
        />
        <PrestationRow
          section={prestations_hp.titresSections
          .colorations}
          elementSection={prestations_hp.sectionColoration}
        />
        <PrestationRow
          section={prestations_hp.titresSections
          .techniques}
          elementSection={prestations_hp.sectionTechnique}
        />
        <PrestationRow
          section={prestations_hp.titresSections
          .mariage}
          elementSection={prestations_hp.sectionMariage}
        />
      </div>
    </div>
  );
};

export default Prestations;
