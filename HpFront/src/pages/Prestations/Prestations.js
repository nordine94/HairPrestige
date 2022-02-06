import PrestationRow from "../../components/PrestationRow/PrestationRow";
import prestations_hp from "../../components/PrestationRow/prestations_HP";

import "./Prestations.css";
import Bandeau from "../../components/Bandeau/Bandeau";

const Prestations = () => {
  return (
    <div className="prestations">
      <Bandeau></Bandeau>
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
