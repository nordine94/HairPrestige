import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";



const FeedbackBox = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    };

    const feedbacks = [
        {
            "text": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, eos.",
            "author": "Bob"
        },
        {
            "text": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, eos.",
            "author": "Bob2"
        },
        {
            "text": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, eos.",
            "author": "Bob3"
        },
        {
            "text": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, eos.",
            "author": "Bob"
        },
        {
            "text": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, eos.",
            "author": "Bob2"
        },
        {
            "text": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, eos.",
            "author": "Bob3"
        }
    ]
    return (
        <Slider {...settings}>
            {
                feedbacks.map((feedback) => (
                    <div className="box" key={feedback.author}>
                        <p>{feedback.text}</p>
                        <h4>{feedback.author}</h4>
                    </div>
                ))
            }
        </Slider>
    );
}

export default FeedbackBox;