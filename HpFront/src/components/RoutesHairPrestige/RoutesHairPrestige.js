import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Conseils from '../../pages/Conseils/Conseils';
import Cgv from '../../components/Cgv/Cgv';
import Prestations from '../../pages/Prestations/Prestations';

const RoutesHairPrestige = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blob" element={<Home />} />
            <Route path="/conseils" element={<Conseils />} />
            <Route path="/cgv" element={<Cgv />} />
            <Route path="/prestations" element={<Prestations/>} />
        </Routes>
    );
}

export default RoutesHairPrestige;