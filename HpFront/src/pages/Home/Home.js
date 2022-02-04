import Bandeau from '../../components/Bandeau/Bandeau';
import bandeauImage from "../../assets/img/bride.jpg";
import FeedbackBox from '../../components/FeedbackBox/FeedbackBox';
import './Home.css';

import PhotoTextLR from '../../components/PhotoTextLR/PhotoTextLR';
import cards_data from './home_cards_data';

const Home = () => {
  return (
    <div className="home">
      <Bandeau image={bandeauImage} />
      <ul className="accueil-cards">
        {
          cards_data.map((card_data) => (
            <li key={`card_home-${card_data.key}`}>
              <PhotoTextLR props={card_data} />
              <hr />
            </li>
            
          ))
        }
      </ul>
      <FeedbackBox />
    </div>
  );
}

export default Home;
