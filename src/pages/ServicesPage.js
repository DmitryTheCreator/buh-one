import React from "react";
import Services from "../common/Services";

const ServicesPage = ({ servicesRef }) => {
    return (
        <div className="about__content">
            <Services history="Главная / Наши услуги" title="Наши услуги" servicesRef={servicesRef} />
        </div>
    );
}

export default ServicesPage;
