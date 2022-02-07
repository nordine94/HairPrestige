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
                        props.content.map((e, index) => (
                            <div className="paragraphe-left" key={`carte-content-${index}`}>
                                <div>{e}</div>
                            </div>
                        ))

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
                    props.content.map((e, index) => (
                        <div className="paragraphe-right" key={`carte-content-${index}`}>
                            <div>{e}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default PhotoTextLR;