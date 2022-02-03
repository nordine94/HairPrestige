import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Conseils from '../../pages/Conseils/Conseils';
import Cgv from '../../components/Cgv/Cgv';
import Photos from "../../pages/Photos/Photos";
import Prestations from '../../pages/Prestations/Prestations';

const RoutesHairPrestige = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/conseils" element={<Conseils />} />
            <Route path="/cgv" element={<Cgv />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/prestations" element={<Prestations/>} />
        </Routes>
    );
}

export default RoutesHairPrestige;