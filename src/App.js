import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./common/Header";
import Carousel from "./common/Carousel";
import Contacts from "./common/Contacts";
import Footer from "./common/Footer";
import Start from "./pages/Start";
import About from "./pages/About";

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
    return (
        <div className="layout">
            <Header /> 
            <Carousel items={carousel_items} />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Start />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;
