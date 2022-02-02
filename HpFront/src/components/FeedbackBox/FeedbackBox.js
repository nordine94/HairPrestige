import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./FeedbackBox.css";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import feedbacks from "./feedbacks";



const FeedbackBox = () => {
    const [matchBig, setMatchBig] = useState(
        window.matchMedia("(min-width: 1500px)").matches
    )
    const [matchMedium, setMatchMedium] = useState(
        window.matchMedia("(min-width: 650px)").matches
    )

    let settings;

    const updateSettings = () => {
        if (matchBig) {
            settings = {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 5,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 4000,
            };
        } else if (matchMedium) {
            settings = {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 4000,
            };
        } else {
            settings = {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 4000,
            };
        }
    }

    useEffect(() => {
        window
            .matchMedia("(min-width: 1500px)")
            .addEventListener('change', e => setMatchBig(e.matches));
        window
            .matchMedia("(min-width: 650px)")
            .addEventListener('change', e => setMatchMedium(e.matches));
    }, []);

    updateSettings();

    

    return (
        <div className="feedbackbox">
            <Slider {...settings}>
                {
                    feedbacks.map((feedback) => (
                        <div className="slider-item">
                            <div className="box" key={feedback.reviewer_id}>
                                <p>{feedback.text}</p>
                                <h4>{feedback.reviewer}</h4>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
}

export default FeedbackBox;