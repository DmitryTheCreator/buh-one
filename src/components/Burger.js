import React from "react";

const Burger = ({ onClick, active }) => {
    return (
        <div className={`header__burger ${active ? 'active' : ''}`} onClick={onClick}>
            <span></span>
        </div>
    );
};

export default Burger;
