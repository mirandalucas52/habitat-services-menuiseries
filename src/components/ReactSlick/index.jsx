import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import data from "../../projects.json";

export const SimpleSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            {data.map((item, index) => (
                <div className="carouselContainer" key={index}>
                    <img src={item.cover} alt={`Slide ${index}`} />
                </div>
            ))}
        </Slider>
    );
};

export default SimpleSlider;
