import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./FeedbackBox.css";
import React from "react";
import Slider from "react-slick";
import feedbacks from "./feedbacks";



const FeedbackBox = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    };


    return (
        <div className="feedbackbox">
            <Slider {...settings}>
                {
                    feedbacks.map((feedback) => (
                        <div className="box" key={feedback.reviewer_id}>
                            <p>{feedback.text}</p>
                            <h4>{feedback.reviewer}</h4>
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
}

export default FeedbackBox;