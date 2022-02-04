import {
  titresSections,
  sectionForfaits,
  sectionShampooing,
  sectionSoin,
  sectionCoiffage,
  sectionColoration,
  sectionTechnique,
  sectionMariage,
} from "../../components/PrestationRow/prestations_HP";

import PrestationRow from "../../components/PrestationRow/PrestationRow";

import "./Prestations.css";
import Bandeau from "../../components/Bandeau/Bandeau";

const Prestations = () => {
  return (
    <div className="prestations">
      <Bandeau></Bandeau>
      <div className="table_presta">
        <h1>Les prestations de Hair Prestige</h1>

        <PrestationRow
          section={titresSections[0].forfaits}
          elementSection={sectionForfaits}
        />
        <PrestationRow
          section={titresSections[0].shampooing}
          elementSection={sectionShampooing}
        />
        <PrestationRow
          section={titresSections[0].soin}
          elementSection={sectionSoin}
        />
        <PrestationRow
          section={titresSections[0].coiffages}
          elementSection={sectionCoiffage}
        />
        <PrestationRow
          section={titresSections[0].colorations}
          elementSection={sectionColoration}
        />
        <PrestationRow
          section={titresSections[0].techniques}
          elementSection={sectionTechnique}
        />
        <PrestationRow
          section={titresSections[0].mariage}
          elementSection={sectionMariage}
        />
      </div>
    </div>
  );
};

export default Prestations;
