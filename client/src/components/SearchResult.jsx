import React from 'react';
import axios from 'axios';

export default class SearchResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            storage: [],
            productStorage: []
        }
        // this.getAllItems = this.getAllItems.bind(this);
        // this.showProducts = this.showProducts.bind(this);
        this.renderPrice = this.renderPrice.bind(this);
    }

    // getAllItems(){
    //     axios.get('/search')
    //         .then((results) => {
    //             this.setState({
    //                 storage: results.data
    //             })
    //         })
    //         .catch(err=>console.log(err))
    // }

    // showProducts(){
    //     let lowerCasedInput = this.props.currentInput.toLowerCase();
    //     let filteredStorage = [];

    //     for(let item of this.state.storage){
    //         let lowerCasedName = item.name.toLowerCase();
    //         let lowerCasedColor = item.color.toLowerCase();
    //         let lowerCasedType = item.type.toLowerCase();
    //         if(lowerCasedName.includes(lowerCasedInput) ||
    //             lowerCasedColor.includes(lowerCasedInput) ||
    //             lowerCasedType.includes(lowerCasedInput)){
    //                 filteredStorage.push(item);
    //             }
    //     }
    //     let finalStorage = filteredStorage.slice(0, 4)
    //     this.setState({
    //         productStorage: finalStorage
    //     })
    // }

    // componentDidMount(){
    //     this.getAllItems();
    // }
    renderPrice(item) {
        if (item.sale_price) {
            return (<span>
                <span className="search-price-sale">{item.sale_price}</span>
                <span className="search-price-crossed">{item.crossed_price}</span>
            </span>)
        } else {
            return (<span className="search-price-original">{item.price}</span>)
        }
    }

    render() {
        if (this.props.searchFlyout) {
            return (
                <div className="search-results" onClick={this.showProducts}>
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
                                {this.props.productStorage.map((item, index) => (
                                    <li key={index}>
                                        <a>
                                            <div className="image-container" >
                                                <img src={item.image} />
                                            </div>
                                            <div className="search-product-info">
                                                <span className="search-product-subtitle">{item.type}</span>
                                                <span className="search-product-name">{item.name}</span>
                                                <div className="search-price-container">
                                                    {this.renderPrice(item)}
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                ))}
                                {/* <li>
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
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}
