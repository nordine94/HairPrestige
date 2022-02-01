import './AccueilServices.css';

import brideImage from '../../images/bride.jpg';
import lisserImage from '../../images/lisser.jpeg';
import CardImage from '../CardImage/CardImage';

const AccueilServices = () => {
    const services = [
        {
            "key": 1,
            "caption": 'Mariages et Soirée',
            "description": 'Resplendissez lors de vos évènement et faite vous plaisir Nous vous proposons des forfaits pour vos coiffures de mariage et de soirée',
            "image": brideImage,
            "image_alt": 'image d une mariée'
        },
        {
            "key": 2,
            "caption": 'Lissage',
            "description": 'Qui n’a jamais rêvé de cheveux lisses, faciles à coiffer et qui ne gonflent pas au contact de l’humidité ? Nous vous trouvons la solution adaptée à vos cheveux.',
            "image": lisserImage,
            "image_alt": "femme qui se fait lisser les cheveux"
        }
    ]

    return (
        <ul className="acceuil-services">
            {
                services.map((service) => (
                    <li key={service.key}><CardImage service={service} /></li>
                ))
            }
        </ul>
    );
}

export default AccueilServices;