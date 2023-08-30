import React from "react";
import { Link } from "react-router-dom";
import "../styles/services.css";

const Services = ({history, title, servicesRef}) => {
    const servicesData = [
        { path: "/service#item-1", title: "Бухгалтерская услуга 1", image: "../imgs/services.png" },
        { path: "/service#item-2", title: "Бухгалтерская услуга 2", image: "../imgs/services.png" },
        { path: "/service#item-3", title: "Бухгалтерская услуга 3", image: "../imgs/services.png" },
        { path: "/service#item-4", title: "Бухгалтерская услуга 4", image: "../imgs/services.png" },
        { path: "/service#item-5", title: "Бухгалтерская услуга 5", image: "../imgs/services.png" },
        { path: "/service#item-6", title: "Бухгалтерская услуга 6", image: "../imgs/services.png" }
    ];

    return (
        <div className="services" ref={servicesRef}>
            <div className="container">
                <div className="services__history">{history}</div>
                <div className="services__title">{title}</div>
                <div className="services__grid">
                    {servicesData.map((service, index) => (
                        <Link to={service.path} className="services__grid-cell" key={index}>
                            <img src={service.image} alt="Сервисы" />
                            <div className="services__grid-cell__title">{service.title}</div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Services;
