// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import Burger from "../components/Burger";
// import "../styles/header.css";

// const Header = ({ infoRef, aboutRef, contactsRef }) => {
//     const [burgerState, setBurgerState] = useState(false);
//     const location = useLocation();

//     const toggleMenu = () => {
//         if (window.innerWidth <= 767) {
//             setBurgerState(burgerState => !burgerState);
//             if (!burgerState) {
//                 document.body.classList.add('menu-active');
//             } else {
//                 document.body.classList.remove('menu-active');
//             }
//         }
//     };

//     const scrollToComponent = (component) => {
//         if (component.current) {
//             setTimeout(() => {
//                 component.current.scrollIntoView({ behavior: 'smooth' });
//                 toggleMenu();
//             }, 50); 
//         }
//     };

//     const handleLinkClick = (component) => {
//         // Если находимся на той же странице, то сразу скроллируем к компоненту
//         // В противном случае происходит переход на страницу и после загрузки происходит скролл
//         if (location.pathname === component.path) {
//             scrollToComponent(component.ref);
//         }
//     };

//     // const handleAboutClick = () => {
//     //     scrollToComponent(aboutRef);
//     // };

//     // const handleInfoClick = () => {
//     //     scrollToComponent(infoRef);
//     // };

//     // const handleAboutClick = () => {
//     //     scrollToComponent(aboutRef);
//     // };

//     // const handleContactsClick = () => {
//     //     scrollToComponent(contactsRef);
//     // };

//     useEffect(() => {
//         const handleResize = () => {
//             if (window.innerWidth > 767) {
//                 document.body.classList.remove('menu-active');
//             }
//         };

//         window.addEventListener('resize', handleResize);

//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, []);

//     const menuLinks = [
//         { path: "/", text: "Главная" },
//         { path: "/services", text: "Услуги" },
//         { path: "/", text: "Кейсы", ref: infoRef },
//         { path: "/about", text: "О компании", ref: aboutRef },
//         { path: location.pathname, text: "Контакты", ref: contactsRef }
//     ];

//     return (
//         <header className="header">
//             <div className="container">
//                 <div className="header__body">
//                     <Link to="/" className="header__name">
//                         <img className="header__logo" src="../icons/logo.svg" alt="BuhOne" />
//                         <div className="header__title">BuhOne</div>
//                     </Link>            
//                     <Burger onClick={toggleMenu} active={burgerState} />
//                     <div className="header__content">
//                         <nav className={`header__menu ${burgerState ? 'active' : ''}`}>
//                             <ul className="header__info-list">
//                                 <li>
//                                     <img className="header__img" src="../icons/phone.svg" alt="Номер" />
//                                     <div className="header__text">8 (111) 222-33-44</div>
//                                 </li>
//                                 <li>
//                                     <img className="header__img" src="../icons/clock.svg" alt="Время" />
//                                     <div className="header__text">Пн-Пт 10:00-18:00</div>
//                                 </li>
//                                 <li>
//                                     <img className="header__img" src="../icons/mail.svg" alt="Почта" />
//                                     <div className="header__text">order@buhone.ru</div>
//                                 </li>
//                                 <li>
//                                     <img className="header__img" src="../icons/location.svg" alt="Расположение" />
//                                     <div className="header__text">Невский пр. 130</div>
//                                 </li>
//                             </ul>
//                             {/* <ul className="header__menu-list">
//                                 <li>
//                                     <Link to="/" className="header__link" onClick={toggleMenu}>Главная</Link>
//                                 </li>
//                                 <li>
//                                     <Link to="/services" className="header__link" onClick={toggleMenu}>Услуги</Link>
//                                 </li>
//                                 <li>
//                                     <Link to="/" className="header__link" onClick={handleInfoClick}>Кейсы</Link>
//                                 </li>
//                                 <li>
//                                     <Link to="/about" className="header__link" onClick={handleAboutClick}>О компании</Link>
//                                 </li>
//                                 <li>
//                                     <Link to={location.pathname} className="header__link" onClick={handleContactsClick}>Контакты</Link>
//                                 </li>
//                             </ul>                         */}
//                              <ul className="header__menu-list">
//                                 {menuLinks.map((link, index) => (
//                                     <li key={index}>
//                                         <Link
//                                             to={link.path}
//                                             className="header__link"
//                                             onClick={() => handleLinkClick(link)}>
//                                             {link.text}
//                                         </Link>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </nav>
//                     </div>
//                 </div>        
//             </div>
//         </header>
//     );
// }

// export default Header;


import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Burger from "../components/Burger";
import "../styles/header.css";

const Header = ({ mainRef, servicesRef, casesRef, aboutRef, contactsRef }) => {
    const [burgerState, setBurgerState] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        if (window.innerWidth <= 767) {
            setBurgerState(burgerState => !burgerState);
            if (!burgerState) {
                document.body.classList.add('menu-active');
            } else {
                document.body.classList.remove('menu-active');
            }
        }
    };

    const handleLinkClick = (path) => {
        if (window.innerWidth <= 767) {
            setBurgerState(false);
            document.body.classList.remove('menu-active');
        }
        if (path === "#cases") {
            window.location.href = "/#cases";
        } else {
            const currentURL = new URL(location.pathname, window.location.href);
            const newPath = new URL(path, currentURL.href).pathname;
            window.history.pushState(null, "", newPath);
        }
    };

    useEffect(() => {
        if (location.pathname === "/" && mainRef.current) {
            setTimeout(() => {
                mainRef.current.scrollIntoView({ behavior: 'smooth' });
            }, 50);
        }
        if (location.pathname === "/services" && servicesRef.current) {
            setTimeout(() => {
                servicesRef.current.scrollIntoView({ behavior: 'smooth' });
            }, 50);
        }
        if (location.hash === "#cases" && casesRef.current) {
            setTimeout(() => {
                casesRef.current.scrollIntoView({ behavior: 'smooth' });
            }, 50);
        }
        if (location.pathname === "/about" && aboutRef.current) {
            setTimeout(() => {
                aboutRef.current.scrollIntoView({ behavior: 'smooth' });
            }, 50);
        }
        if (location.hash === "#contacts" && contactsRef.current) {
            setTimeout(() => {
                contactsRef.current.scrollIntoView({ behavior: 'smooth' });
            }, 50);
        }
    }, [location, mainRef, servicesRef, casesRef, aboutRef, contactsRef]);

    const menuItems = [
        { path: "/", text: "Главная", ref: mainRef },
        { path: "/services", text: "Услуги", ref: servicesRef },
        { path: "#cases", text: "Кейсы", ref: casesRef },
        { path: "/about", text: "О компании", ref: aboutRef },
        { path: "#contacts", text: "Контакты", ref: contactsRef }
    ];

    return (
        <header className="header">
            <div className="container">
                <div className="header__body">
                    <Link to="/" className="header__name" onClick={() => handleLinkClick("/")}>
                        <img className="header__logo" src="../icons/logo.svg" alt="BuhOne" />
                        <div className="header__title">BuhOne</div>
                    </Link>
                    <Burger onClick={toggleMenu} active={burgerState} />
                    <div className="header__content">
                        <nav className={`header__menu ${burgerState ? 'active' : ''}`}>
                        <ul className="header__info-list">
                                 <li>
                                     <img className="header__img" src="../icons/phone.svg" alt="Номер" />
                                     <div className="header__text">8 (111) 222-33-44</div>
                                 </li>
                                 <li>
                                     <img className="header__img" src="../icons/clock.svg" alt="Время" />
                                     <div className="header__text">Пн-Пт 10:00-18:00</div>
                                 </li>
                                 <li>
                                     <img className="header__img" src="../icons/mail.svg" alt="Почта" />
                                     <div className="header__text">order@buhone.ru</div>
                                 </li>
                                 <li>
                                     <img className="header__img" src="../icons/location.svg" alt="Расположение" />
                                     <div className="header__text">Невский пр. 130</div>
                                 </li>
                             </ul>
                             <ul className="header__menu-list">
                                {menuItems.map((menuItem, index) => (
                                    <li key={index}>
                                        <Link
                                            to={menuItem.path}
                                            className="header__link"
                                            onClick={() => handleLinkClick(menuItem.path)}>
                                            {menuItem.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;