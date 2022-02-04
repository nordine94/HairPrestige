import Bandeau from '../../components/Bandeau/Bandeau';
import bandeauImage from "../../assets/img/bandeau.jpg";
import h1Bandeau from "../../components/Bandeau/Bandeau";
import h3Bandeau from "../../components/Bandeau/Bandeau";
import FeedbackBox from '../../components/FeedbackBox/FeedbackBox';
import './Home.css';

import PhotoTextLR from '../../components/PhotoTextLR/PhotoTextLR';
import cards_data from './home_cards_data';

const Home = () => {
  return (
    <div className="home">
      <Bandeau image={bandeauImage} titre={h1Bandeau} texte={h3Bandeau}/>
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
