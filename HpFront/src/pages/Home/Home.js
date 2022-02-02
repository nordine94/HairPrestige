import AccueilServices from '../../components/AccueilServices/AccueilServices';
import Bandeau from '../../components/Bandeau/Bandeau';
import FeedbackBox from '../../components/FeedbackBox/FeedbackBox';
import './Home.css';

const Home = () => {
    return (
      <div className="home">
        <Bandeau />
        <AccueilServices />
        <FeedbackBox />
      </div>
    );
}
 
export default Home;
