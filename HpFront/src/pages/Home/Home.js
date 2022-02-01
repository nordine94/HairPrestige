import AccueilServices from '../../components/AccueilServices/AccueilServices';
import Bandeau from '../../components/Bandeau/Bandeau';
import './Home.css';

const Home = () => {
    return (
      <div className="home">
        <Bandeau />
        <AccueilServices />
      </div>
    );
}
 
export default Home;
