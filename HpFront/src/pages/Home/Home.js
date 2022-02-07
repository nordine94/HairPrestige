import Bandeau from '../../components/Bandeau/Bandeau';
import bandeauImage from "../../assets/img/bandeau.jpg";
import FeedbackBox from '../../components/FeedbackBox/FeedbackBox';
import './Home.css';
import PhotoTextLR from '../../components/PhotoTextLR/PhotoTextLR';
import cards_data from './home_cards_data';

const Home = () => {

  const contenuBandeau = {
    titre:"Hair Prestige",
    texte : [
     "Votre salon de coiffure situé à Choisy le Roi",
     "vous accueille dans un cadre chaleureux et convivial.",
    ]}

  return (
    <div className="home">
      <Bandeau image={bandeauImage} titre={contenuBandeau.titre} texte={contenuBandeau.texte}/>
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
