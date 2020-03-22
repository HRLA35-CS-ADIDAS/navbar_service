import React from 'react';

export default class SearchResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}

        this.renderPrice = this.renderPrice.bind(this);
        this.renderSuggestion = this.renderSuggestion.bind(this);
    }

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

    renderSuggestion(suggestion){
        let word = suggestion[0];
        let curr = this.props.currentInput;
        let currIndex = word.indexOf(curr);
        let start = word.substring(0, currIndex);
        let end = word.substring(currIndex + curr.length, word.legnth)
        return(
            <span className="search-suggestion-name">
                {start}<strong>{curr}</strong>{end}
            </span>
        )
    }

    render() {
        if (this.props.searchFlyout) {
            return (
                <div className="search-results" onClick={this.showProducts}>
                    <div className="search-results-container">
                        <div className="search-results-suggestions">
                            <ul>
                                <li className="search-results-suggestions-heading">SUGGESTIONS</li>
                                    {this.props.suggestionStorage.map((suggestion, index) => (
                                        <li key={index}>
                                            <a>
                                                {this.renderSuggestion(suggestion)}
                                                <span className="suggestions-counter">{suggestion[1]}</span>
                                            </a>
                                        </li>
                                    ))}
                            </ul>
                            <a className="search-see-all">SEE ALL "{this.props.currentInput}"</a>
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
