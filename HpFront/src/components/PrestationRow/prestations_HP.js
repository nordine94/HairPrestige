
import coiffure from "../../assets/logos_prestations/coiffure.png";
// import ciseaux from "../../assets/logos_prestations/ciseaux.png";
import peigne from "../../assets/logos_prestations/peigne.png";
import pinceChignon from "../../assets/logos_prestations/pince-chigon.png";
import pinceau from "../../assets/logos_prestations/pinceau-de-teinte.png";
// import rasage from "../../assets/logos_prestations/rasage.png";
import secheCheveux from "../../assets/logos_prestations/seche-cheveux.png";
import shampooing from "../../assets/logos_prestations/shampooing.png";

const coiffureAlt = "Icon de ciseau et peigne";
const peigneAlt = "Icon d'un peigne";
const pinceAlt = "Icon d'un pince à chignon";
const pinceauAlt = "Icon d'un pinceau à coloration";
const secheAlt = "Icon d'un sèche-cheveux";
const shampAlt = "Icon d'un bouteille de shampooing";


const titresSections = [
    {
        forfaits: "Forfaits",
        shampooing: "Shampooing",
        soin: "Soins",
        coiffages: "Coiffages",
        colorations: "Colorations",
        techniques: "Techniques Spécifiques",
        mariage: "Forfait Mariage"
    }
];

const sectionForfaits = [
    {
        icon: coiffure,
        iconAlt: coiffureAlt,
        description: "Coiffage & Séchage",
        prix: "10.50€"
    },
    {
        icon: coiffure,
        iconAlt: coiffureAlt,
        description: "Coupe entretien",
        prix: "15€"
    },
    {
        icon: coiffure,
        iconAlt: coiffureAlt,
        description: "Coupe transformation",
        prix: "18€"
    }
];

const sectionShampooing = [
    {
        icon: shampooing,
        iconAlt: shampAlt,
        description: "Simple",
        prix: "7€"
    },
    {
        icon: shampooing,
        iconAlt: shampAlt,
        description: "Traitant ou Bio",
        prix: "9.50€"
    },
    {
        icon: shampooing,
        iconAlt: shampAlt,
        description: "Renforcateur - Mousse - Crème lissante",
        prix: "7€"
    }
];

const sectionSoin = [
    {
        icon: shampooing,
        iconAlt: shampAlt,
        description: "Soin",
        prix: "8€"
    },
    {
        icon: shampooing,
        iconAlt: shampAlt,
        description: "Soin profond kératine",
        prix: "15€"
    },
    {
        icon: shampooing,
        iconAlt: shampAlt,
        description: "Soin profond végétal",
        prix: "20€"
    },
];

const sectionCoiffage = [
    {
        icon: peigne,
        iconAlt: peigneAlt,
        description: "boucle au fer ou lissage plaques",
        prix: "5€"
    },
    {
        icon: peigne,
        iconAlt: peigneAlt,
        description: "Brushing cheveux courts",
        prix: "15€"
    },
    {
        icon: peigne,
        iconAlt: peigneAlt,
        description: "Brushing cheveux mi-longs/longs",
        prix: "20€"
    }
];

const sectionColoration = [
    {
        icon: pinceau,
        iconAlt: pinceauAlt,
        description: "Sans Amoniaque",
        prix: "à partir de 37€"
    },
    {
        icon: pinceau,
        iconAlt: pinceauAlt,
        description: "Racine & Huile protectrice",
        prix: "à partir de 30.50€"
    },
    {
        icon: pinceau,
        iconAlt: pinceauAlt,
        description: "Totale & Huile protectrice",
        prix: "à partir de 36.50€"
    },
    {
        icon: pinceau,
        iconAlt: pinceauAlt,
        description: "Végétale",
        prix: "à partir de 70€"
    },
    {
        icon: pinceau,
        iconAlt: pinceauAlt,
        description: "Mèches au-dessus",
        prix: "30€"
    },
    {
        icon: pinceau,
        iconAlt: pinceauAlt,
        description: "Mèches & Balayage des racines",
        prix: "à partir de 42€"
    },
    {
        icon: pinceau,
        iconAlt: pinceauAlt,
        description: "Mèches 2 couleurs",
        prix: "à partir de 53€"
    },
    {
        icon: pinceau,
        iconAlt: pinceauAlt,
        description: "Racines + longueurs",
        prix: "à partir de 42€"
    }
];

const sectionTechnique = [
    {
        icon: pinceau,
        iconAlt: pinceauAlt,
        description: "Décapage",
        prix: "à partir de 25€"
    },
    {
        icon: secheCheveux,
        iconAlt: secheAlt,
        description: "Défrisage - Permanente",
        prix: "à partir de 30.50€"
    },
    {
        icon: secheCheveux,
        iconAlt: secheAlt,
        description: "Permanente sans amoniaque",
        prix: "à partir de 38.50€"
    },
    {
        icon: pinceau,
        iconAlt: pinceauAlt,
        description: "Tie and Dye",
        prix: "65€"
    },
    {
        icon: pinceChignon,
        iconAlt: pinceAlt,
        description: "Chignon artistique",
        prix: "à partir de 70€"
    },
    {
        icon: secheCheveux,
        iconAlt: secheAlt,
        description: "Lissage brésilien",
        prix: "à partir de 110€"
    }
];

const sectionMariage = [
    {
        icon: coiffure,
        iconAlt: coiffureAlt,
        description: "Essaie + chignon le jour du mariage",
        prix: "189€"
    }
];

export {titresSections, sectionForfaits, sectionShampooing, sectionSoin, sectionCoiffage, sectionColoration, sectionTechnique, sectionMariage};