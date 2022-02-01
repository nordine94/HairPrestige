import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Conseils from '../../pages/Conseils/Conseils';

const Content = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blob" element={<Home />} />
            <Route path="/conseils" element={<Conseils />} />
        </Routes>
    );
}

export default Content;