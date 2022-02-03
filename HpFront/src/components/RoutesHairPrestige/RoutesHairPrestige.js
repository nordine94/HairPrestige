import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Conseils from '../../pages/Conseils/Conseils';
import Cgv from '../../components/Cgv/Cgv';
import Photos from "../../pages/Photos/Photos";
import Prestations from '../../pages/Prestations/Prestations';
import Contact from '../../pages/Contact/Contact';

const RoutesHairPrestige = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/conseils" element={<Conseils />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/prestations" element={<Prestations/>} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/cgv" element={<Cgv />} />
        </Routes>
    );
}

export default RoutesHairPrestige;