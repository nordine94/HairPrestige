import './GmapCheap.css'

const GmapCheap = ({ image, link }) => {
    return (
        <div className="gmapcheap">
            <a href={link} target="_blank" rel="noreferrer">
                <img src={image} alt="google map" />
            </a>
        </div>
    );
}

export default GmapCheap;