import React from 'react';

const SearchResult = ({ searchFlyout }) => {
    if (searchFlyout) {
        return (
            <div className="search-results">
                <div className="search-results-container">
                    <div className="search-results-suggestions">
                        <ul>
                            <li className="search-results-suggestions-heading">SUGGESTIONS</li>
                            <li>
                                <a>
                                    <span>
                                        <strong>nmd r</strong>
                                                1
                                            </span>
                                    <span className="suggestions-counter">126</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span>
                                        <strong>nmd r</strong>
                                                1
                                            </span>
                                    <span className="suggestions-counter">126</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span>
                                        <strong>nmd r</strong>
                                                1
                                            </span>
                                    <span className="suggestions-counter">126</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span>
                                        <strong>nmd r</strong>
                                                1
                                            </span>
                                    <span className="suggestions-counter">126</span>
                                </a>
                            </li>
                        </ul>
                        <a className="search-see-all">SEE ALL "search input"</a>
                    </div>
                    <div className="search-results-products">
                        <ul>
                            <li className="search-results-products-heading">PRODUCTS</li>
                            <li>
                                <a>
                                    <div className="image-container">
                                        <img src="https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/SAMBAROSE1.webp" />
                                    </div>
                                    <div className="search-product-info">
                                        <span className="search-product-subtitle">Women's Originals</span>
                                        <span className="search-product-name">SAMBAROSE Shoes</span>
                                        <div className="search-price-container">
                                            <span className="search-price-sale">$43</span>
                                            <span className="search-price-crossed">$85</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <div className="image-container">
                                        <img src="https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/NMD_R1_V2.webp" />
                                    </div>
                                    <div className="search-product-info">
                                        <span className="search-product-subtitle">Originals</span>
                                        <span className="search-product-name">NMD_R1 V2 Shoes</span>
                                        <div className="search-price-container">
                                            <span className="search-price-original">$130</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <div className="image-container">
                                        <img src="https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/NMD_R1_V2.webp" />
                                    </div>
                                    <div className="search-product-info">
                                        <span className="search-product-subtitle">Originals</span>
                                        <span className="search-product-name">NMD_R1 V2 Shoes</span>
                                        <div className="search-price-container">
                                            <span className="search-price-original">$130</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <div className="image-container">
                                        <img src="https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/NMD_R1_V2.webp" />
                                    </div>
                                    <div className="search-product-info">
                                        <span className="search-product-subtitle">Originals</span>
                                        <span className="search-product-name">NMD_R1 V2 Shoes</span>
                                        <div className="search-price-container">
                                            <span className="search-price-original">$130</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }else{
        return null;
    }
}

export default SearchResult;