import React from 'react';

export default class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {

        }
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
        )
    }
}