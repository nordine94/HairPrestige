import './Contact.css';
import GmapCheap from "../../components/Gmap_cheap/GmapCheap";
import gmap_image from "../../assets/img/google_map_cheap.png";
import GenericForm from '../../components/GenericForm/GenericForm';
import { useState } from 'react';

const Contact = () => {
    const [toSend, setToSend] = useState({
        nom: '',
        prenom: '',
        message: '',
        email: '',
    });

    const genericFormData = {
        "toSend": toSend,
        "setToSend": setToSend,
        "email": 'sawisem904@porjoton.com',
        "subject": 'Mail reçu depuis le site web Hair Prestige !',
        "redirect": 'http://localhost:3000/photos'
    }

    return ( 
        <div className="contact">
            <GenericForm props={genericFormData} />
            <GmapCheap image={gmap_image} link="https://goo.gl/maps/zbSxBn2TP3t661XZA" />
        </div>
     );
}
 
export default Contact;