
import coiffure from "../../assets/logos_prestations/coiffure.png";
import peigne from "../../assets/logos_prestations/peigne.png";
import pinceChignon from "../../assets/logos_prestations/pince-chigon.png";
import pinceau from "../../assets/logos_prestations/pinceau-de-teinte.png";
import secheCheveux from "../../assets/logos_prestations/seche-cheveux.png";
import shampooing from "../../assets/logos_prestations/shampooing.png";

const coiffureAlt = "Icon de ciseau et peigne";
const peigneAlt = "Icon d'un peigne";
const pinceAlt = "Icon d'un pince à chignon";
const pinceauAlt = "Icon d'un pinceau à coloration";
const secheAlt = "Icon d'un sèche-cheveux";
const shampAlt = "Icon d'un bouteille de shampooing";

const prestations_hp = {

    titresSections : {
            forfaits: "Forfaits",
            shampooing: "Shampooing",
            soin: "Soins",
            coiffages: "Coiffages",
            colorations: "Colorations",
            techniques: "Techniques Spécifiques",
            mariage: "Forfait Mariage"
    },

    sectionForfaits: [
        {
            icon: coiffure,
            iconAlt: coiffureAlt,
            description: "Coiffage & Séchage",
            aPartir: "",
            prix: "10.50€"
        },
        {
            icon: coiffure,
            iconAlt: coiffureAlt,
            description: "Coupe entretien",
            aPartir: "",
            prix: "15€"
        },
        {
            icon: coiffure,
            iconAlt: coiffureAlt,
            description: "Coupe transformation",
            aPartir: "",
            prix: "18€"
        }
    ],

    sectionShampooing : [
        {
            icon: shampooing,
            iconAlt: shampAlt,
            description: "Simple",
            aPartir: "",
            prix: "7€"
        },
        {
            icon: shampooing,
            iconAlt: shampAlt,
            description: "Traitant ou Bio",
            aPartir: "",
            prix: "9.50€"
        },
        {
            icon: shampooing,
            iconAlt: shampAlt,
            description: "Renforcateur - Mousse - Crème lissante",
            aPartir: "",
            prix: "7€"
        }
    ],

    sectionSoin : [
        {
            icon: shampooing,
            iconAlt: shampAlt,
            description: "Soin",
            aPartir: "",
            prix: "8€"
        },
        {
            icon: shampooing,
            iconAlt: shampAlt,
            description: "Soin profond kératine",
            aPartir: "",
            prix: "15€"
        },
        {
            icon: shampooing,
            iconAlt: shampAlt,
            description: "Soin profond végétal",
            aPartir: "",
            prix: "20€"
        },
    ],
    
    sectionCoiffage : [
        {
            icon: peigne,
            iconAlt: peigneAlt,
            description: "Boucle au fer ou lissage plaques",
            aPartir: "",
            prix: "5€"
        },
        {
            icon: peigne,
            iconAlt: peigneAlt,
            description: "Brushing cheveux courts",
            aPartir: "",
            prix: "15€"
        },
        {
            icon: peigne,
            iconAlt: peigneAlt,
            description: "Brushing cheveux mi-longs/longs",
            aPartir: "",
            prix: "20€"
        }
    ],
    
    sectionColoration : [
        {
            icon: pinceau,
            iconAlt: pinceauAlt,
            description: "Sans Amoniaque",
            aPartir: "à partir de",
            prix: "37€"
        },
        {
            icon: pinceau,
            iconAlt: pinceauAlt,
            description: "Racine & Huile protectrice",
            aPartir: "à partir de",
            prix: "30.50€"
        },
        {
            icon: pinceau,
            iconAlt: pinceauAlt,
            description: "Totale & Huile protectrice",
            aPartir: "à partir de",
            prix: "36.50€"
        },
        {
            icon: pinceau,
            iconAlt: pinceauAlt,
            description: "Végétale",
            aPartir: "à partir de",
            prix: "70€"
        },
        {
            icon: pinceau,
            iconAlt: pinceauAlt,
            description: "Mèches au-dessus",
            aPartir: "",
            prix: "30€"
        },
        {
            icon: pinceau,
            iconAlt: pinceauAlt,
            description: "Mèches & Balayage des racines",
            aPartir: "à partir de",
            prix: "42€"
        },
        {
            icon: pinceau,
            iconAlt: pinceauAlt,
            description: "Mèches 2 couleurs",
            aPartir: "à partir de",
            prix: "53€"
        },
        {
            icon: pinceau,
            iconAlt: pinceauAlt,
            description: "Racines + longueurs",
            aPartir: "à partir de",
            prix: "42€"
        }
    ],
    
    sectionTechnique : [
        {
            icon: pinceau,
            iconAlt: pinceauAlt,
            description: "Décapage",
            aPartir: "à partir de",
            prix: "25€"
        },
        {
            icon: secheCheveux,
            iconAlt: secheAlt,
            description: "Défrisage - Permanente",
            aPartir: "à partir de",
            prix: "30.50€"
        },
        {
            icon: secheCheveux,
            iconAlt: secheAlt,
            description: "Permanente sans amoniaque",
            aPartir: "à partir de",
            prix: "38.50€"
        },
        {
            icon: pinceau,
            iconAlt: pinceauAlt,
            description: "Tie and Dye",
            aPartir: "",
            prix: "65€"
        },
        {
            icon: pinceChignon,
            iconAlt: pinceAlt,
            description: "Chignon artistique",
            aPartir: "à partir de",
            prix: "70€"
        },
        {
            icon: secheCheveux,
            iconAlt: secheAlt,
            description: "Lissage brésilien",
            aPartir: "à partir de",
            prix: "110€"
        }
    ],
    
    sectionMariage : [
        {
            icon: coiffure,
            iconAlt: coiffureAlt,
            description: "Essaie + chignon le jour du mariage",
            aPartir: "",
            prix: "189€"
        }
    ]

}


export default prestations_hp;