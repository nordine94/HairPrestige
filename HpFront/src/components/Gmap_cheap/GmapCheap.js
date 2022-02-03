import './GmapCheap.css'
import cheap_map from '../../assets/img/google_map_cheap.png';

const GmapCheap = () => {
    return (
        <div className="gmapcheap">
            <a href="https://goo.gl/maps/zbSxBn2TP3t661XZA" target="_blank">
                <img src={cheap_map} alt="google map image" />
            </a>
        </div>
    );
}

export default GmapCheap;