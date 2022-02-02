import AccueilServices from '../../components/AccueilServices/AccueilServices';
import Bandeau from '../../components/Bandeau/Bandeau';
import FeedbackBox from '../../components/FeedbackBox/FeedbackBox';
import './Home.css';

import PhotoTextLR from '../../components/PhotoTextLR/PhotoTextLR';
import cards_data from './home_cards_data';

const Home = () => {
  return (
    <div className="home">
      <Bandeau />
      <ul className="accueil-cards">
        {
          cards_data.map((card_data) => (
            <li key={card_data.key}>
              <PhotoTextLR props={card_data} />
            </li>
          ))
        }
      </ul>
      <FeedbackBox />
    </div>
  );
}

export default Home;
