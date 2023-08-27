import React, { useState } from 'react';
import "../styles/carousel.css";

const Carousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    return (
        <div className="carousel__container">
            {items.map((item, index) => (
            <div key={index} className={`carousel__item ${index === currentIndex ? 'active' : ''}`}>
                <div className="carousel__image-container">
                    <img src={item.image} alt={`Item ${index}`} className="carousel__image" />
                </div>
                <div className="container" >  
                    <div className="carousel__content">                   
                        <div className={`carousel__text ${item.text.length > 20 ? 'long-text' : ''}`}>{item.text}</div>
                        {item.button && <button className={`carousel__button ${item.button.length === 0 ? 'none' : ''}`}>{item.button}</button>}
                    </div>
                </div>  
            </div>
            ))}
            <div className="container">
                <div className="carousel__bottom">
                    <div className="carousel__progress">
                        {items.map((_, index) => (
                            <div key={index} className={`carousel__progress-circle ${index === currentIndex ? 'active' : ''}`}></div>
                        ))}
                    </div>  
                    <div className="carousel__navigation">
                        <button className="carousel__nav-button" onClick={goToPrevious}>
                            <div id="rectangle-prev" className="carousel__rectangle">
                                <img src="../icons/prev-button.svg" alt="Назад" />
                            </div>
                        </button>
                        <button className="carousel__nav-button" onClick={goToNext}>
                            <div id="rectangle-next"  className="carousel__rectangle">
                                <img src="../icons/next-button.svg" alt="Вперед" />
                            </div>
                        </button>
                    </div>
                </div>     
            </div>
        </div>
    );
};

export default Carousel;
