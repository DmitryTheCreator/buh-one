import { useState } from "react";

const Burger = () => {
    const [burgerState, setBurgerState] = useState(false);
    
    const burgerClick = () => {
        setBurgerState(burgerState => !burgerState);
    };

    let toggleClassCheck;
    if (burgerState){
        toggleClassCheck = 'active';
        document.querySelectorAll('.header__menu')
        .forEach(element => element.classList.add(toggleClassCheck));
        document.querySelectorAll('body')
        .forEach(element => element.classList.add('lock'));
    }
    else{
        toggleClassCheck = '';
        document.querySelectorAll('.header__menu')
        .forEach(element => element.classList.remove('active'));
        document.querySelectorAll('body')
        .forEach(element => element.classList.remove('lock'));
    }

    return(
        <div className={`header__burger ${toggleClassCheck}`} onClick={burgerClick}>
            <span></span>
        </div>
    );
};

export default Burger;
