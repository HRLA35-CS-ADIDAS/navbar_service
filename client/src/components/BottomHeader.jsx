import React from 'react';
import MenMenu from './MenMenu.jsx';
import WomenMenu from './WomenMenu.jsx';
import KidsMenu from './KidsMenu.jsx';
import SportsMenu from './SportsMenu.jsx';
import BrandsMenu from './BrandsMenu.jsx';
import ReleaseDatesMenu from './ReleaseDatesMenu.jsx';
import SearchBar from './SearchBar.jsx';

export default class BottomHeader extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className="header-bottom-container">
                <img className="left-menu-logo" src="https://adidas-fec.s3-us-west-1.amazonaws.com/Static+Images/adidas-logo-png-black-0.png" />
                <div className="main-menu">
                    <MenMenu />
                    <WomenMenu />
                    <KidsMenu />
                    <SportsMenu />
                    <BrandsMenu />
                    <ReleaseDatesMenu />
                </div>
                <SearchBar />
            </div>
        )
    }
}