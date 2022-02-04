import './PhotoTextLR.css';
import React, { useEffect, useState } from "react";

const PhotoTextLR = ({ props }) => {
    const [matchBig, setMatchBig] = useState(
        window.matchMedia("(min-width: 768px)").matches
    )

    useEffect(() => {
        window
            .matchMedia("(min-width: 768px)")
            .addEventListener('change', e => setMatchBig(e.matches));
    }, []);

    if (props.imgRight && matchBig) {
        return (
            <div className="phototextlr">
                <div className="text">
                    {
                        <div className="paragraphe-right">{props.content}</div>
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