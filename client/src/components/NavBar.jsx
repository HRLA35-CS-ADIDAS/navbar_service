import React from 'react';
import TopHeader from './TopHeader.jsx';
import BottomHeader from './BottomHeader.jsx';

const NavBar = () => {
    return (
        <div>
            <div className="header-top">
                <TopHeader />
            </div>

            <div className="header-bottom">
                <BottomHeader />
            </div>
        </div>
    )
}

export default NavBar;