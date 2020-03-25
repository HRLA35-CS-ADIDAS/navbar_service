import React from 'react';

const TopHeader = ({ showModal }) => {
    return (
        <div className="header-top-container">
            <a>also visit <img className="reebok" src="./reebok-logo.png" /></a>
            <a>help</a>
            <a>order tracker and returns</a>
            <a onClick={showModal}>join creators club</a>
            <a>creators club</a>
            <a>log in</a>
        </div>
    )
}

export default TopHeader;