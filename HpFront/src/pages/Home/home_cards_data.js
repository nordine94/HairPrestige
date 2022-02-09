import image_kid from '../../assets/img/washmahair.jpg';
import image_bride from '../../assets/img/bride.jpg';
import image_barbe from '../../assets/img/friser_salon.webp';

export const home_cards_data = [
    {
        "imgRight": false,
        "image": image_kid,
        "alt": "image of a kid getting haircut",
        "content": [
            <h2>Vous recherchez un salon proposant la coloration végétale et des Shampoings Bio en Ile de France ?</h2>,
            "A chaque coloration, on prend soin de vos cheveux et de votre cuir chevelu. Une coloration naturelle pour une meilleure santé des cheveux renforcés et même une chute de cheveu ralentie. Lavez vos cheveux naturellement, sans détergent ; nos agents lavants dérivés d’acides aminés naturels conservent l’hydratation naturelle de la peau."
        ]
    },
    {
        "imgRight": true,
        "image": image_bride,
        "alt": "image femme chignon",
        "content": [
            <h2>Mariages et Soirée</h2>,
            "Nous vous proposons des forfaits pour vos coiffures de mariage et de soirée."
        ]
    },
    {
        "imgRight": false,
        "image": image_barbe,
        "alt": "image homme barbe",
        "content": [
            <h2>Lissage</h2>,
            "Qui n’a jamais rêvé de cheveux lisses, faciles à coiffer et qui ne gonflent pas au contact de l’humidité ? Nous vous trouvons la solution adaptée à vos cheveux."
        ]
    }
];

export default home_cards_data;