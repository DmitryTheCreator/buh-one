import React from "react";
import { Link } from "react-router-dom";
import "../styles/services.css";

const Services = ({history, title}) => {
    return (
        <div className="services">
            <div className="container">
                <div className="services__history">{history}</div>
                <div className="services__title">{title}</div>
                <div className="services__grid">  
                    <Link to="/" className="services__grid-cell">
                        <div className="services__grid-cell-content">
                            <img src="../imgs/services.png" alt="Сервисы" />
                            <div className="services__grid-cell__title">Бухгалтерская услуга 1</div>
                        </div>    
                    </Link>     
                    <Link to="/" className="services__grid-cell">
                        <img src="../imgs/services.png" alt="Сервисы" />
                        <div className="services__grid-cell__title">Бухгалтерская услуга 2</div>
                    </Link>    
                    <Link to="/" className="services__grid-cell">
                        <img src="../imgs/services.png" alt="Сервисы" />
                        <div className="services__grid-cell__title">Бухгалтерская услуга 3</div>
                    </Link>    
                    <Link to="/" className="services__grid-cell">
                        <img src="../imgs/services.png" alt="Сервисы" />
                        <div className="services__grid-cell__title">Бухгалтерская услуга 4</div>
                    </Link>    
                    <Link to="/" className="services__grid-cell">
                        <img src="../imgs/services.png" alt="Сервисы" />
                        <div className="services__grid-cell__title">Бухгалтерская услуга 5</div>
                    </Link>    
                    <Link to="/" className="services__grid-cell">
                        <img src="../imgs/services.png" alt="Сервисы" />
                        <div className="services__grid-cell__title">Бухгалтерская услуга 6</div>
                    </Link>          
                </div>
            </div>
        </div>
    );
}

export default Services;
