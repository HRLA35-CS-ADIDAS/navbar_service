import React from 'react';

const KidsMenu = () => {
    return (
        <div className="nav-flyout">
            <a id="menu-men" className="menu-department">KIDS</a>
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
                            <li><a>Yeezy</a></li>
                            <li><a>adicolor Collection</a></li>
                            <li><a>Family Matching</a></li>
                            <li><a>Spring Collection</a></li>
                        </ul>
                    </div>
                    <div className="flyout-col">
                        <div className="flyout-headline">YOUTH<br />(AGE 8-14)</div>
                        <ul>
                            <li><a>Boys Shoes</a></li>
                            <li><a>Girls Shoes</a></li>
                            <li><a>Boys Clothing</a></li>
                            <li><a>Girls Clothing</a></li>
                            <li><a>Accessories</a></li>
                        </ul>
                    </div>
                    <div className="flyout-col">
                        <div className="flyout-headline">CHILDREN<br />(AGE 4-8)</div>
                        <ul>
                            <li><a>Boys Shoes</a></li>
                            <li><a>Girls Shoes</a></li>
                            <li><a>Boys Clothing</a></li>
                            <li><a>Girls Clothing</a></li>
                            <li><a>Accessories</a></li>
                        </ul>
                    </div>
                    <div className="flyout-col">
                        <div className="flyout-headline">BABY &amp; TODDLER<br />(AGE 0-4)</div>
                        <ul>
                            <li><a>Shoes</a></li>
                            <li><a>Clothing</a></li>
                        </ul>
                    </div>
                    <div className="flyout-col">
                        <div className="flyout-headline">SALE</div>
                        <ul>
                            <li><a>Youth (Age 8-14)</a></li>
                            <li><a>Children (Age 4-8)</a></li>
                            <li><a>Baby &amp; Toddler (Age 0-4)</a></li>
                            <li className="horizontal-separator">&nbsp;</li>
                            <li><a>Less than $30</a></li>
                            <li><a>Less than $50</a></li>
                        </ul>
                    </div>
                </div>
                <div className="bottom-line">
                    <div className="flyout-col">&nbsp;</div>
                    <div className="flyout-col"><a><strong>All Youth</strong></a></div>
                    <div className="flyout-col"><a><strong>All Children</strong></a></div>
                    <div className="flyout-col"><a><strong>All Baby &amp; Toddler</strong></a></div>
                    <div className="flyout-col"><a><strong>All Kids Sale</strong></a></div>
                    <div className="flyout-col"></div>
                </div>
            </div>
        </div>
    )
}

export default KidsMenu;