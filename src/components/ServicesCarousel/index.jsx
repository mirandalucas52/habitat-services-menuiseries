import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import data from "../../services.json";
import "./ServicesCarousel.css";

export const ServicesCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1350,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true,
                    infinite: true,
                    speed: 1000,
                },
            },
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                    infinite: true,
                    speed: 1000,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    infinite: true,
                    speed: 1000,
                },
            },
        ],
    };

    return (
        <div className="servicesCarouselContainer">
            <Slider {...settings}>
                {data.map((item, index) => (
                    <div className="servicesCarousel" key={index}>
                        <div className="servicesCarouselBorderImg">
                            <img src={item.cover} alt={`Slide ${index}`} />
                        </div>
                        <p>{item.title}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ServicesCarousel;
