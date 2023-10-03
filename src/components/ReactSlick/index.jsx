import React, { useRef } from "react";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import data from "../../projects.json";

export const SimpleSlider = () => {
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const goToPreviousSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const goToNextSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    return (
        <div className="carousel">
            <button onClick={goToPreviousSlide}>Précédent</button>
            <Slider {...settings} ref={sliderRef}>
                {data.map((item, index) => (
                    <div className="carouselContainer" key={index}>
                        <img src={item.cover} alt={`Slide ${index}`} />
                    </div>
                ))}
            </Slider>
            <button onClick={goToNextSlide}>Suivant</button>
        </div>
    );
};

export default SimpleSlider;
