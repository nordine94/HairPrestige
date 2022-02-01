import './CardImage.css';

const CardImage = ({ service }) => {
    console.log(service);
    const { caption, description, image, image_alt } = service;
    
    return ( 
        <div className="cardimage">
            <div className="left">
                    <h2>{caption}</h2>
                    <p>{description}</p>
                </div>
                <div className="right">
                    <img src={image} alt={image_alt}/>
                </div>
        </div>
     );
}
 
export default CardImage;