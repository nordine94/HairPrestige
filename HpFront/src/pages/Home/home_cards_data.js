import image_1 from '../../assets/img/haircut-kid.jpg';
import image_2 from '../../assets/img/ciseaux.jpg';
import Adresse from '../../components/Adresse/Adresse';
import Bandeau from '../../components/Bandeau/Bandeau';
import Footer from '../../components/Footer/Footer';
import Horaires from '../../components/Horaires/Horaires';

export const home_cards_data = [
    {
        "imgRight": false,
        "image": image_1,
        "alt": "image of a bride",
        "content": [
            "Situé à Choisy le Roi, le salon Hair Prestige vous accueille du mardi au samedi dans un cadre convivial et agréable.",
            "C'est un salon de coiffure aux allures rock'n roll qui envoie bouler les codes. Que l'on soit un homme ou une femme, ici le tarif est le même et on y vient pour s'offrir une coupe dans une ambiance jeune et cosy, une décoration vintage avec une playlist bien pensée.",
            "Ici, vous y serez aussi à l'aise que chez vos potes. Rien n'est normé, même la déco se prive de symétrie et d'homogénéité, rendant ainsi le lieu plus personnel. Ce côté rock résonne jusque dans les oreilles ! Voilà un coiffeur qui va vous faire rocker !",
            "Mesdames, Messieurs, changez de coupe ou de couleur selon vos envies chez Hair Prestige... à Choisy le Roi !"
        ]
    },
    {
        "imgRight": true,
        "image": image_2,
        "alt": "image of a bride",
        "content": [
            <Horaires />
        ]
    },
    {
        "imgRight": false,
        "image": image_1,
        "alt": "image of a bride",
        "content": [
            "Ou sinon un numéro de tel",
            <Adresse />
        ]
    }
];

export default home_cards_data;