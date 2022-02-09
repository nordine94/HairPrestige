import image_wash from '../../assets/img/washmahair.jpg';
import image_bride from '../../assets/img/bride.jpg';
import image_nadia from '../../assets/salon/nadia_haircut_mask.png';

export const home_cards_data = [
    {
        "imgRight": false,
        "image": image_wash,
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
        "image": image_nadia,
        "alt": "image homme barbe",
        "content": [
            <h2>Faisons les présentations !</h2>,
            <div><b>Nadia</b>, responsable du salon <b>Hair Prestige</b> est une grande passionnée du métier. C’est une experte de la mise en forme du cheveu. Elle aime également discuter autant coiffure que de tout autre domaine !</div>,
            "Douée aussi bien pour la coiffure que pour le maquillage, elle vous accompagne lors de vos mariages et soirées pour vous rendre encore plus belle."
        ]
    }
];

export default home_cards_data;