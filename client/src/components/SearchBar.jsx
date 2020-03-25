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
            productStorage: [],
            suggestionStorage: []
        }
        this.getAllItems = this.getAllItems.bind(this);
        this.showSearchResults = this.showSearchResults.bind(this);
        this.preventRefresh = this.preventRefresh.bind(this);
        this.showProducts = this.showProducts.bind(this);
        this.showSuggestions = this.showSuggestions.bind(this);
        this.renderX = this.renderX.bind(this);
        this.clearSearchInput = this.clearSearchInput.bind(this);
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
        setTimeout(this.showProducts, 0);
        setTimeout(this.showSuggestions, 0);
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

        let finalStorage = filteredStorage.slice(0, 4);
        this.setState({
            productStorage: finalStorage
        });
    }

    showSuggestions(){
        let lowerCasedInput = this.state.currentInput.toLowerCase();
        let filteredStorage = {};

        for (let item of this.state.storage) {
            let lowerCasedName = item.name.toLowerCase();
            let lowerCasedColor = item.color.toLowerCase();
            let lowerCasedType = item.type.toLowerCase();
            if(lowerCasedName.includes(lowerCasedInput)){
                if(filteredStorage[lowerCasedName]){
                    filteredStorage[lowerCasedName]++;
                }else{
                    if(Object.keys(filteredStorage).length < 8){
                        filteredStorage[lowerCasedName] = 1;
                    }
                }
            }
            if(lowerCasedColor.includes(lowerCasedInput)){
                if(filteredStorage[lowerCasedColor]){
                    filteredStorage[lowerCasedColor]++;
                }else{
                    if(Object.keys(filteredStorage).length < 8){
                        filteredStorage[lowerCasedColor] = 1;
                    }
                }
            }
            if(lowerCasedType.includes(lowerCasedInput)){
                if(filteredStorage[lowerCasedType]){
                    filteredStorage[lowerCasedType]++;
                }else{
                    if(Object.keys(filteredStorage).length < 8){
                        filteredStorage[lowerCasedType] = 1;
                    }
                }
            }
        }

        let finalStorage = [];
        for(let key in filteredStorage){
            finalStorage.push([key, filteredStorage[key]])
        }
        this.setState({
            suggestionStorage: finalStorage
        });
    }

    renderX(){
        if(this.state.currentInput.length > 0){
            return (
                <img src="https://adidas-fec.s3-us-west-1.amazonaws.com/Static+Images/close-x-mark.png"/>
            )
        }else{
            return (
                <img src="https://adidas-fec.s3-us-west-1.amazonaws.com/Static+Images/search-icon.png" />
            )
        }
    }

    clearSearchInput(){
        this.setState({
            currentInput: '',
            searchFlyout: false
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
                        <div className="search-icon" onClick={this.clearSearchInput}>
                            <div className="search-icon-container">
                                {this.renderX()}
                            </div>
                        </div>
                        <form onSubmit={this.preventRefresh}>
                            <input className="search-input" autoComplete="off" placeholder="Search" value={this.state.currentInput} onChange={this.showSearchResults} onClick={this.clearSearchInput}/>
                        </form>
                    </div>
                    <SearchResult searchFlyout={this.state.searchFlyout} currentInput={this.state.currentInput} productStorage={this.state.productStorage} suggestionStorage={this.state.suggestionStorage}/>
                </div>
                <div className="bag-icon">
                    <div className="bag-icon-container">
                        <img src="https://adidas-fec.s3-us-west-1.amazonaws.com/Static+Images/shopping-bag-icon.png" />
                        <span className="empty-bag">YOUR BAG IS EMTPY</span>
                    </div>
                </div>
            </div>
        )
    }
}