import './PhotoTextLR.css';

const PhotoTextLR = ({ props }) => {
    if (props.imgRight) {
        return (
            <div className="phototextlr">
                <div className="text">
                    {
                        <div className="paragraphe">{props.content}</div>
                    }
                </div>
                <img className="photo" src={props.image} alt={props.alt} />
            </div>
        );
    }


    return (
        <div className="phototextlr">
            <img className="photo" src={props.image} alt={props.alt} />
            <div className="text">
                {
                    <div className="paragraphe">{props.content}</div>
                }
            </div>
        </div>
    );
}

export default PhotoTextLR;