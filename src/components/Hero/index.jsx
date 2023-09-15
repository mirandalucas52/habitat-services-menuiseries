import "./Hero.css";
import heroImg from "../../assets/backroundmonatagnard.jpg";
import React, { useState, useEffect } from "react";

function Hero() {
    const texts = ["Artisan professionnel", "Expert alu / bois / PVC"];
    const [textIndex, setTextIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const textChangeInterval = setInterval(() => {
            setIsVisible(false);

            setTimeout(() => {
                setTextIndex((prevIndex) =>
                    prevIndex === texts.length - 1 ? 0 : prevIndex + 1
                );

                setIsVisible(true);
            }, 800);
        }, 3000);

        return () => clearInterval(textChangeInterval);
    }, [texts.length]);

    return (
        <section className="heroSection">
            <img src={heroImg} alt="fond accueil" />
            <article>
                {isVisible ? (
                    <h1 className="heroTextEnter">{texts[textIndex]}</h1>
                ) : (
                    <h1 className="heroTextExit">{texts[textIndex]}</h1>
                )}
                <h2>
                    Platrerie <br /> & Isolation
                </h2>
            </article>
        </section>
    );
}

export default Hero;
