import React from 'react';

const Top = () => {

    return (
        <div className="header__top-menu_cover">
            <a href="" className="header__main-menu_cover"></a>
            <a href="/" className="header_logo">
            </a>
            <a href="" className="shopping-cart_cover"></a>
            <ul className="header__top-menu">
                <li className="top-menu_item"><a href="">Sign in/Register</a></li>
                <li className="top-menu_item"><a href="">Stores/Stockists</a></li>
                <li className="top-menu_item hidden-sm"><a href="">Your bag <span>(2)</span></a></li>
            </ul>
        </div>

    );
};

export default Top;
