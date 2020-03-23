import React from 'react';
import TopHeader from './TopHeader.jsx';
import BottomHeader from './BottomHeader.jsx';

const NavBar = () => {
    return (
        <div>
            <div id="navbar">
                <div className="header-top">
                    <TopHeader />
                </div>
                <div className="header-bottom">
                    <BottomHeader />
                </div>
            </div>
            <div className="promo-bar">
                <div className="promo-container">
                    <div className="promo-element">
                        <img id="truck-logo" src="https://img.icons8.com/windows/50/000000/in-transit.png" />
                        <div className="promo-item">FREE SHIPPING OVER $49 AND FREE RETURNS</div>
                    </div>
                    <div className="promo-element">
                        <img src="https://www.freepnglogos.com/uploads/adidas-logo-png-black-0.png" />
                        <div className="promo-item">JOIN THE ADIDAS CREATORS CLUB</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;