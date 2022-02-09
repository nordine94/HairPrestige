import './GmapCheap.css'

const GmapCheap = ({ image, link }) => {
    return (
        <div className="gmapcheap">
            <a href={link} target="_blank">
                <img src={image} alt="google map image" />
            </a>
        </div>
    );
}

export default GmapCheap;