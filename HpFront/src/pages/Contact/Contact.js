import './Contact.css';
import GmapCheap from "../../components/Gmap_cheap/GmapCheap";
import gmap_image from "../../assets/img/google_map_cheap.png";

const Contact = () => {
    return ( 
        <div className="contact">
            <GmapCheap image={gmap_image} link="https://goo.gl/maps/zbSxBn2TP3t661XZA" />
        </div>
     );
}
 
export default Contact;