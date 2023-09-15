import React, { useState, useEffect } from "react";
import "./Carousel.css";

const Carousel = ({ data }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Fonction pour afficher l'image précédente
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? data.length - 1 : prevIndex - 1
        );
    };

    // Fonction pour afficher l'image suivante
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === data.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Utilisez useEffect pour vous assurer que l'index reste valide
    useEffect(() => {
        if (!data || data.length === 0) {
            // Si le tableau de données est vide ou indéfini, ne faites rien
            return;
        }

        if (currentIndex < 0) {
            setCurrentIndex(data.length - 1);
        } else if (currentIndex >= data.length) {
            setCurrentIndex(0);
        }
    }, [currentIndex, data]);

    // Vérification que data existe et que currentIndex est valide
    if (!data || data.length === 0) {
        return <div>Aucune donnée d'image disponible.</div>;
    }

    return (
        <div className="carousel">
            <p className="prev" onClick={prevSlide}>
                Précédent
            </p>
            <div className="carouselImgContainer">
                <img
                    src={data[currentIndex].cover}
                    alt={`Chantier ${currentIndex + 1}`}
                />
            </div>
            <p className="next" onClick={nextSlide}>
                Suivant
            </p>
        </div>
    );
};

export default Carousel;
