import AccueilServices from '../../components/AccueilServices/AccueilServices';
import Bandeau from '../../components/Bandeau/Bandeau';
import FeedbackBox from '../../components/FeedbackBox/FeedbackBox';
import './Home.css';

import PhotoTextLR from '../../components/PhotoTextLR/PhotoTextLR';
import image from '../../assets/img/bride.jpg';

const Home = () => {
    return (
      <div className="home">
        <Bandeau />
        {/* <AccueilServices /> */}
        <PhotoTextLR  props={{"image": image, "alt":"image of a bride"}} />
        <FeedbackBox />
      </div>
    );
}
 
export default Home;
