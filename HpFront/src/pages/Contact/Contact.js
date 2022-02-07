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

    const email = 'sawisem904@porjoton.com';

    return ( 
        <div className="contact">
            <GenericForm toSend={toSend} setToSend={setToSend} email={email}/>
            <GmapCheap image={gmap_image} link="https://goo.gl/maps/zbSxBn2TP3t661XZA" />
        </div>
     );
}
 
export default Contact;