import "./Photos.css";
import Gallery from "../../components/Gallery/Gallery";
import { SliderData } from "../../components/Gallery/SliderData";

const Photos = () => {
  return (
    <div className="photos">
      <h1>Notre galerie photos</h1>
      <hr />
      <Gallery slides={SliderData} />
    </div>
  );
};

export default Photos;
