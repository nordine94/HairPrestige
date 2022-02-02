import AccueilServices from '../../components/AccueilServices/AccueilServices';
import Bandeau from '../../components/Bandeau/Bandeau';
import FeedbackBox from '../../components/FeedbackBox/FeedbackBox';
import './Home.css';

import PhotoTextLR from '../../components/PhotoTextLR/PhotoTextLR';
import image_1 from '../../assets/img/bride.jpg';
import image_2 from '../../assets/img/ciseaux.jpg';
import cards_data from './home_cards_data';

const Home = () => {
  // const cards_data = [
  //   {
  //     "key": 1111111,
  //     "imgRight": false,
  //     "image": image_1,
  //     "alt": "image of a bride",
  //     "content": "La société C.F.R - Centre de Formation et Recrutement a été créée en  2016 et détient l’autorisation préfectorale pour exercer dans le milieu de la formation professionnelle."
  //   },
  //   {
  //     "key": 222222,
  //     "imgRight": true,
  //     "image": image_2,
  //     "alt": "image of a bride",
  //     "content": "La société C.F.R - Centre de Formation et Recrutement a été créée en  2016 et détient l’autorisation préfectorale pour exercer dans le milieu de la formation professionnelle."
  //   },
  //   {
  //     "key": 3333,
  //     "imgRight": false,
  //     "image": image_1,
  //     "alt": "image of a bride",
  //     "content": "La société C.F.R - Centre de Formation et Recrutement a été créée en  2016 et détient l’autorisation préfectorale pour exercer dans le milieu de la formation professionnelle."
  //   }
  // ];

  return (
    <div className="home">
      <Bandeau />
      {/* <AccueilServices /> */}
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
