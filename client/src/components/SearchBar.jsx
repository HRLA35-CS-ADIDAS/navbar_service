import React from 'react';
import SearchResult from './SearchResult.jsx'
import axios from 'axios';

export default class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {
            storage: [],
            searchFlyout: false,
            currentInput: '',
            productStorage: []
        }
        this.getAllItems = this.getAllItems.bind(this);
        this.showSearchResults = this.showSearchResults.bind(this);
        this.preventRefresh = this.preventRefresh.bind(this);
        this.showProducts = this.showProducts.bind(this);
    }

    getAllItems() {
        axios.get('/search')
            .then((results) => {
                this.setState({
                    storage: results.data
                })
            })
            .catch(err => console.log(err))
    }

    preventRefresh(e) {
        e.preventDefault();
    }

    showSearchResults(e) {
        this.setState({
            currentInput: e.target.value
        });
        setTimeout(this.showProducts, 0)
        if (e.target.value.length > 1) {
            this.setState({
                searchFlyout: true
            })
        } else {
            this.setState({
                searchFlyout: false
            })
        }
    }

    showProducts() {
        let lowerCasedInput = this.state.currentInput.toLowerCase();
        let filteredStorage = [];

        for (let item of this.state.storage) {
            let lowerCasedName = item.name.toLowerCase();
            let lowerCasedColor = item.color.toLowerCase();
            let lowerCasedType = item.type.toLowerCase();
            if (lowerCasedName.includes(lowerCasedInput) ||
                lowerCasedColor.includes(lowerCasedInput) ||
                lowerCasedType.includes(lowerCasedInput)) {
                filteredStorage.push(item);
            }
        }
        let finalStorage = filteredStorage.slice(0, 4)
        this.setState({
            productStorage: finalStorage
        })
    }

    componentDidMount() {
        this.getAllItems();
    }

    render() {
        return (
            <div className="right-side-menu">
                <div className="searchbar-wrapper">
                    <div className="searchbar-container">
                        <div className="search-icon">
                            <div className="search-icon-container">
                                <img src="https://img.icons8.com/ios-filled/50/000000/search.png" />
                            </div>
                        </div>
                        <form onSubmit={this.preventRefresh}>
                            <input className="search-input" autoComplete="off" placeholder="Search" onChange={this.showSearchResults} />
                        </form>
                    </div>
                    {/* --------- */}
                    <SearchResult searchFlyout={this.state.searchFlyout} currentInput={this.state.currentInput} productStorage={this.state.productStorage}/>
                    {/* <div className="search-results">
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
                                                <img src="https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/SAMBAROSE1.webp"/>
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
                                                <img src="https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/NMD_R1_V2.webp"/>
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
                                                <img src="https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/NMD_R1_V2.webp"/>
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
                                                <img src="https://adidas-fec.s3-us-west-1.amazonaws.com/Shoes/NMD_R1_V2.webp"/>
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
                    </div> */}
                    {/* --------- */}
                </div>
                <div className="bag-icon">
                    <div className="bag-icon-container">
                        <img src="https://img.icons8.com/small/50/000000/shopping-bag.png" />
                        <span className="empty-bag">YOUR BAG IS EMTPY</span>
                    </div>
                </div>
            </div>
        )
    }
}