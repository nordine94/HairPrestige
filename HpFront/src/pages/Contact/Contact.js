import './Contact.css';
import GmapCheap from "../../components/Gmap_cheap/GmapCheap";
import gmap_image from "../../assets/img/google_map_cheap.png";
import GenericForm from '../../components/GenericForm/GenericForm';
import { useState } from 'react';

const Contact = () => {
    const [toSend, setToSend] = useState({
        nom: '',
        prenom: '',
        email: '',
    });

    // on peux éventuellement faire une thank you page
    const genericFormData = {
        "toSend": toSend,
        "setToSend": setToSend,
        "email": 'sawisem904@porjoton.com',
        "subject": 'Mail reçu depuis le site web Hair Prestige !',
        "redirect": 'http://localhost:3000/photos'
    }

    return (
        <div className="contact">
            <h1>Nous contacter</h1>
            <hr/>
            <GenericForm props={genericFormData} />
            <GmapCheap image={gmap_image} link="https://goo.gl/maps/zbSxBn2TP3t661XZA" />
        </div>
    );
}

export default Contact;