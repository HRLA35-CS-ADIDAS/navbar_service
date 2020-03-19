import React from 'react';

export default class BottomHeader extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className="header-bottom-container">
                <img className="left-menu-logo" src="https://www.freepnglogos.com/uploads/adidas-logo-png-black-0.png" />
                <div className="main-menu">
                    <div className="nav-flyout">
                        <a id="menu-men" className="menu-department">MEN</a>
                        <div className="flyout-content">
                            <div className="flyout-content-container">
                                <div className="flyout-col">
                                    <div className="flyout-headline">TRENDING</div>
                                    <ul>
                                        <li><a>New Arrivals</a></li>
                                        <li><a>Best Sellers</a></li>
                                        <li className="horizontal-separator">&nbsp;</li>
                                        <li><a>Superstar 2020</a></li>
                                        <li><a>All-White Sneakers</a></li>
                                        <li><a>Ultraboost 20</a></li>
                                        <li><a>Spring Collection</a></li>
                                        <li><a>adicolor Collection</a></li>
                                        <li><a>Play Connected</a></li>
                                    </ul>
                                </div>
                                <div className="flyout-col">
                                    <div className="flyout-headline">SHOES</div>
                                    <ul>
                                        <li><a>New Arrivals</a></li>
                                        <li><a>Originals</a></li>
                                        <li><a>Running</a></li>
                                        <li><a>Soccer</a></li>
                                        <li><a>Basketball</a></li>
                                        <li><a>Football</a></li>
                                        <li><a>Skateboarding</a></li>
                                        <li><a>Workout</a></li>
                                        <li><a>Essentials</a></li>
                                        <li><a>Sandals &amp; Slides</a></li>
                                        <li><a>Hiking &amp; Outdoor</a></li>
                                        <li><a>Golf</a></li>
                                        <li><a>Tennis</a></li>
                                        <li><a>Baseball</a></li>
                                    </ul>
                                </div>
                                <div className="flyout-col">
                                    <div className="flyout-headline">CLOTHING</div>
                                    <ul>
                                        <li><a>New Arrivals</a></li>
                                        <li><a>Pants</a></li>
                                        <li><a>Hoodies &amp; Sweatshirts</a></li>
                                        <li><a>Jackets &amp; Vests</a></li>
                                        <li><a>Track Suits</a></li>
                                        <li><a>Short Sleeve Shirts</a></li>
                                        <li><a>T-Shirts</a></li>
                                        <li><a>Long Sleeve Shirts</a></li>
                                        <li><a>Jerseys</a></li>
                                        <li><a>Tights</a></li>
                                        <li><a>Shorts</a></li>
                                        <li><a>Tank Tops</a></li>
                                        <li><a>Swim</a></li>
                                        <li><a>Socks &amp; Underwear</a></li>
                                    </ul>
                                </div>
                                <div className="flyout-col">
                                    <div className="flyout-headline">ACCESSORIES</div>
                                    <ul>
                                        <li><a>New Arrivals</a></li>
                                        <li><a>Bags &amp; Backpacks</a></li>
                                        <li><a>Hats &amp; Beanies</a></li>
                                        <li><a>Phone Cases</a></li>
                                        <li><a>Watches</a></li>
                                    </ul>
                                </div>
                                <div className="flyout-col">
                                    <div className="flyout-headline">SALE</div>
                                    <ul>
                                        <li><a>Shoes</a></li>
                                        <li><a>Clothing</a></li>
                                        <li><a>Accessories</a></li>
                                        <li className="horizontal-separator">&nbsp;</li>
                                        <li><a>Less than $50</a></li>
                                        <li><a>Less than $100</a></li>
                                    </ul>
                                </div>
                                <div className="flyout-col">
                                    <div className="flyout-headline">COLLECTIONS</div>
                                    <ul>
                                        <li><a>Classic Sneakers</a></li>
                                        <li><a>NMD</a></li>
                                        <li><a>Ultraboost</a></li>
                                        <li><a>Superstar</a></li>
                                        <li><a>Stan Smith</a></li>
                                        <li><a>Y-3</a></li>
                                        <li><a>YEEZY</a></li>
                                        <li className="horizontal-separator">&nbsp;</li>
                                        <li><a>Running</a></li>
                                        <li><a>Soccer</a></li>
                                        <li><a>Outdoor</a></li>
                                        <li><a>Basketball</a></li>
                                        <li><a>Football</a></li>
                                        <li><a>Swim</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bottom-line">
                                <div className="flyout-col">&nbsp;</div>
                                <div className="flyout-col"><a><strong>All Men's Shoes</strong></a></div>
                                <div className="flyout-col"><a><strong>All Men's Clothing</strong></a></div>
                                <div className="flyout-col"><a><strong>All Men's Accessories</strong></a></div>
                                <div className="flyout-col"><a><strong>All Men's Sale</strong></a></div>
                                <div className="flyout-col"></div>
                            </div>
                        </div>
                    </div>
                    <div className="nav-flyout">
                        <a id="menu-women" className="menu-department">WOMEN</a>
                    </div>
                    <div className="nav-flyout">
                        <a id="menu-kids" className="menu-department">KIDS</a>
                    </div>
                    <div className="nav-flyout">
                        <a id="menu-sports" className="menu-others">SPORTS</a>
                    </div>
                    <div className="nav-flyout">
                        <a id="menu-brands" className="menu-others">BRANDS</a>
                    </div>
                    <div className="nav-flyout">
                        <a id="menu-dates" className="menu-others">RELEASE DATES</a>
                    </div>
                </div>
                <div className="right-side-menu">
                    <div className="searchbar-wrapper">
                        <div className="searchbar-container">
                            <div className="search-icon">
                                <div className="search-icon-container">
                                    <img src="https://img.icons8.com/ios-filled/50/000000/search.png" />
                                </div>
                            </div>
                            <form>
                                <input className="search-input" autocomplete="off" placeholder="Search" />
                            </form>
                        </div>
                    </div>
                    <div className="bag-icon">
                        <div className="bag-icon-container">
                            <img src="https://img.icons8.com/small/50/000000/shopping-bag.png" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}