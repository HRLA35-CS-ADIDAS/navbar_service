import React from 'react';

class TopHeader extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className="header-top-container">
                <a>also visit <img className="reebok" src="./reebok-logo.png" /></a>
                <a>help</a>
                <a>order tracker and returns</a>
                <a>join creators club</a>
                <a>creators club</a>
                <a>log in</a>
            </div>
        )
    }
}

export default TopHeader;