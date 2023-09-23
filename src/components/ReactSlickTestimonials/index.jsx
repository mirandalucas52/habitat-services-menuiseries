import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import "./ReactSlickTestimonials.css";

export const SliderTestimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="carouselTestimonials">
            <Slider {...settings}>
                <div>
                    <p>
                        Nous avons fait appel à l'entreprise pour la réfection
                        de la peinture de notre appartement et nous sommes
                        tombés sur une super équipe, très pro et de bons
                        conseils. Un très bon relationnel tout au long des
                        travaux. La peinture conseillée est de très bonne
                        qualité et le rendu final est superbe. Merci encore !
                    </p>
                    <span>C M</span>
                </div>
                <div>
                    <p>
                        Nous avons fait appel à Habitat Services pour le
                        remplacement de deux portes donnant sur notre véranda.
                        Le résultat est à la hauteur de nos espérances. Rendu
                        très propre et matériau de qualité. Notre pièce à vivre
                        a même gagné en clarté. Un très bon contact préalable
                        pour bien comprendre nos besoins, et une réalisation
                        rapide et sur mesure. Bref, nous sommes ravis et
                        recommandons les services de M. Athane et son équipe !
                    </p>
                    <span>babi king</span>
                </div>
                <div>
                    <p>
                        Intervention pour le remplacement d'une porte de
                        copropriété sur mesure. Mr Athane a su nous conseiller
                        et nous orienter vers une porte ressemblante à
                        l'ancienne pour conserver l'esthétique original. Le
                        montage a été parfaitement réalisé. Je recommande
                        vivement.
                    </p>
                    <span>Sylvain Leroy</span>
                </div>
                <div>
                    <p>
                        Entreprise ayant fait la peinture de toutes les surfaces
                        de ma maison, pose des meubles de sdb, création de
                        placards sur mesure dans les chambres, pose d'un volet
                        roulant extérieur et rénovation du parquet à l'étage
                        (ponçage + nouvelle teinte). Travail propre dans
                        l'ensemble. Se renseigner sur les délais qui peuvent
                        être légèrement plus longs que prévu.
                    </p>
                    <span>Sandor Blasek</span>
                </div>
            </Slider>
        </div>
    );
};

export default SliderTestimonials;
