import React, { useRef } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./common/Header";
import Carousel from "./common/Carousel";
import Contacts from "./common/Contacts";
import Footer from "./common/Footer";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ServiceItemPage from "./pages/ServiceItemPage";
import ScrollToTop from "./components/ScrollToTop";

const carousel_items = [
    {
        image: '../imgs/me-1.jpg',
        button: 'Наша презентация',
        text: 'Бухгалтерские услуги в Санкт-Петербурге',
    },
    {
        image: '../imgs/me-2.jpg',
        button: '',
        text: 'Что скрывает за своими очками красивый мужчина?',
    },
    {
        image: '../imgs/me-3.jpg',
        button: '',
        text: '',
    },
    {
        image: '../imgs/me-4.jpg',
        button: '',
        text: 'Возьмите меня на работу!',
    },
];

function App() {
    const mainRef = useRef(null);
    const servicesRef = useRef(null);
    const casesRef = useRef(null);
    const aboutRef = useRef(null);
    const contactsRef = useRef(null);

    return (      
        <div className="layout">
            <ScrollToTop />
            <Header mainRef={mainRef} servicesRef={servicesRef} casesRef={casesRef} aboutRef={aboutRef} contactsRef={contactsRef} /> 
            <Carousel items={carousel_items} mainRef={mainRef} />
            <div className="content">
                <Routes>
                    <Route path="/" element={<MainPage casesRef={casesRef} />} />
                    <Route path="/about" element={<AboutPage aboutRef={aboutRef} />} />
                    <Route path="/services" element={<ServicesPage servicesRef={servicesRef} />} />
                    <Route path="/service" element={<ServiceItemPage />} />
                </Routes>
            </div>
            <Contacts contactsRef={contactsRef} />
            <Footer />
        </div>
    );
}

export default App;
