import React from 'react';

const SportsMenu = () => {
    return (
        <div className="nav-flyout">
            <a id="menu-sports" className="menu-others">SPORTS</a>
            <div className="flyout-content">
                <div className="flyout-content-container">
                    <div className="flyout-col">
                        <div className="flyout-headline">RUNNING</div>
                        <img src="https://adidas-fec.s3-us-west-1.amazonaws.com/Static+Images/menu-running.jpg" />
                        <ul>
                            <li><a>Shoes</a></li>
                            <li><a>Clothing</a></li>
                            <li><a>Accessories</a></li>
                            <li className="horizontal-separator">&nbsp;</li>
                            <li><a>Ultraboost</a></li>
                            <li><a>Solar</a></li>
                            <li><a>Adizero</a></li>
                            <br />
                            <li><a>Boston Marathon</a></li>
                            <li className="horizontal-separator">&nbsp;</li>
                            <li><a><strong>All Running</strong></a></li>
                        </ul>
                    </div>
                    <div className="flyout-col">
                        <div className="flyout-headline">SOCCER</div>
                        <img src="https://adidas-fec.s3-us-west-1.amazonaws.com/Static+Images/menu-soccer.jpg" />
                        <ul>
                            <li><a>Shoes</a></li>
                            <li><a>Clothing</a></li>
                            <li><a>Accessories</a></li>
                            <li className="horizontal-separator">&nbsp;</li>
                            <li><a>Predator</a></li>
                            <li><a>X</a></li>
                            <li><a>Nemeziz</a></li>
                            <li><a>Copa</a></li>
                            <li><a>GMR</a></li>
                            <li className="horizontal-separator">&nbsp;</li>
                            <li><a><strong>All Soccer</strong></a></li>
                        </ul>
                    </div>
                    <div className="flyout-col">
                        <div className="flyout-headline">OUTDOOR</div>
                        <img src="https://adidas-fec.s3-us-west-1.amazonaws.com/Static+Images/menu-outdoor.jpg" />
                        <ul>
                            <li><a>Shoes</a></li>
                            <li><a>Clothing</a></li>
                            <li className="horizontal-separator">&nbsp;</li>
                            <li><a>Hiking</a></li>
                            <li><a>Trail Running</a></li>
                            <li><a>Mountain Biking</a></li>
                            <li><a>Climbing</a></li>
                            <li className="horizontal-separator">&nbsp;</li>
                            <li><a>TERREX</a></li>
                            <li><a>Five Ten</a></li>
                            <li className="horizontal-separator">&nbsp;</li>
                            <li><a><strong>All Outdoor</strong></a></li>
                        </ul>
                    </div>
                    <div className="flyout-col">
                        <div className="flyout-headline">BASKETBALL</div>
                        <img src="https://adidas-fec.s3-us-west-1.amazonaws.com/Static+Images/menu-basketball.jpg" />
                        <ul>
                            <li><a>Shoes</a></li>
                            <li><a>Clothing</a></li>
                            <li><a>Accessories</a></li>
                            <li className="horizontal-separator">&nbsp;</li>
                            <li><a>James Harden</a></li>
                            <li><a>Damian Lillard</a></li>
                            <li><a>Donovan Mitchell</a></li>
                            <li className="horizontal-separator">&nbsp;</li>
                            <li><a><strong>All Basketball</strong></a></li>
                        </ul>
                    </div>
                    <div className="flyout-col">
                        <div className="flyout-headline">BASEBALL</div>
                        <img src="https://adidas-fec.s3-us-west-1.amazonaws.com/Static+Images/menu-baseball.png" />
                        <ul>
                            <li><a>Shoes</a></li>
                            <li><a>Clothing</a></li>
                            <li><a>Accessories</a></li>
                            <li className="horizontal-separator">&nbsp;</li>
                            <li><a>Afterburner</a></li>
                            <li><a>Adizero</a></li>
                            <li><a>Icon</a></li>
                            <li className="horizontal-separator">&nbsp;</li>
                            <li><a><strong>All Baseball</strong></a></li>
                        </ul>
                    </div>
                    <div className="separate flyout-col">
                        <div className="flyout-headline">OTHER SPORTS</div>
                        <ul>
                            <li><a>Training</a></li>
                            <li><a>Snowboarding</a></li>
                            <li><a>Hockey</a></li>
                            <li><a>Football</a></li>
                            <li><a>Skateboarding</a></li>
                            <li><a>Golf</a></li>
                            <li><a>Yoga</a></li>
                            <li><a>Tennis</a></li>
                            <li><a>Lacrosse</a></li>
                            <li><a>Voleyball</a></li>
                            <li><a>Weightlifting</a></li>
                            <li><a>Boxing</a></li>
                            <li><a>Swim</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SportsMenu;