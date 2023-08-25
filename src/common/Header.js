import React from "react";
import { Link } from "react-router-dom";
import Burger from "../components/Burger";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__body">
                    <Link to="/" className="header__name">
                        <img className="header__logo" src="../icons/logo.svg" alt="BuhOne" />
                        <div className="header__title">BuhOne</div>
                    </Link>            
                    <Burger />
                    <div className="header__content">
                        <nav className="header__menu">
                            <ul className="header__info-list">
                                <li className="first-column">
                                    <img className="header__img" src="../icons/phone.svg" alt="Номер" />
                                    <div className="header__text">8 (111) 222-33-44</div>
                                </li>
                                <li className="first-column">
                                    <img className="header__img" src="../icons/clock.svg" alt="Время" />
                                    <div className="header__text">Пн-Пт 10:00-18:00</div>
                                </li>
                                <li className="first-column">
                                    <img className="header__img" src="../icons/mail.svg" alt="Почта" />
                                    <div className="header__text">order@buhone.ru</div>
                                </li>
                                <li className="first-column">
                                    <img className="header__img" src="../icons/location.svg" alt="Расположение" />
                                    <div className="header__text">Невский пр. 130</div>
                                </li>
                            </ul>
                            <ul className="header__menu-list">
                                <li>
                                    <Link to="/" className="header__link">Главная</Link>
                                </li>
                                <li>
                                    <Link to="/" className="header__link">Услуги</Link>
                                </li>
                                <li>
                                    <Link to="/" className="header__link">Кейсы</Link>
                                </li>
                                <li>
                                    <Link to="/" className="header__link">О компании</Link>
                                </li>
                                <li>
                                    <Link to="/" className="header__link">Контакты</Link>
                                </li>
                            </ul>
                            
                        </nav>
                    </div>
                </div>        
            </div>
        </header>
    );
}

export default Header;
