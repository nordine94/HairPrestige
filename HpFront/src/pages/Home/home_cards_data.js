import image_kid from '../../assets/img/haircut-kid.jpg';
import image_chignon from '../../assets/img/pic_chignon.jpg';
import image_barbe from '../../assets/img/barba.webp';
import Adresse from '../../components/Adresse/Adresse';
import Horaires from '../../components/Horaires/Horaires';

export const home_cards_data = [
    {
        "imgRight": false,
        "image": image_kid,
        "alt": "image of a kid getting haircut",
        "content": [
            "Situé à Choisy le Roi, le salon Hair Prestige vous accueille du mardi au samedi dans un cadre convivial et agréable.",
            "C'est un salon de coiffure aux allures rock'n roll qui envoie bouler les codes. Que l'on soit un homme ou une femme, ici le tarif est le même et on y vient pour s'offrir une coupe dans une ambiance jeune et cosy, une décoration vintage avec une playlist bien pensée.",
            "Ici, vous y serez aussi à l'aise que chez vos potes. Rien n'est normé, même la déco se prive de symétrie et d'homogénéité, rendant ainsi le lieu plus personnel. Ce côté rock résonne jusque dans les oreilles ! Voilà un coiffeur qui va vous faire rocker !",
            "Mesdames, Messieurs, changez de coupe ou de couleur selon vos envies chez Hair Prestige... à Choisy le Roi !"
        ]
    },
    {
        "imgRight": true,
        "image": image_chignon,
        "alt": "image femme chignon",
        "content": [
            <Horaires />
        ]
    },
    {
        "imgRight": false,
        "image": image_barbe,
        "alt": "image homme barbe",
        "content": [
            "Ou sinon un numéro de tel",
            <Adresse />
        ]
    }
];

export default home_cards_data;