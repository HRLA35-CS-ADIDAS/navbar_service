import React from 'react';
import TopHeader from './TopHeader.jsx';
import BottomHeader from './BottomHeader.jsx';
import CreatorModal from './CreatorModal.jsx';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false
        }
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal(){
        this.setState({
            isModalVisible: true
        })
    }

    hideModal(){
        this.setState({
            isModalVisible: false
        })
    }

    render() {
        return (
            <div>
                <div id="navbar">
                    <div className="header-top">
                        <TopHeader showModal={this.showModal}/>
                    </div>
                    <div className="header-bottom">
                        <BottomHeader />
                    </div>
                </div>
                <div className="promo-bar">
                    <div className="promo-container">
                        <div className="promo-element">
                            <img id="truck-logo" src="https://img.icons8.com/windows/50/000000/in-transit.png" />
                            <div className="promo-item">FREE SHIPPING OVER $49 AND FREE RETURNS</div>
                        </div>
                        <div className="promo-element">
                            <img src="https://www.freepnglogos.com/uploads/adidas-logo-png-black-0.png" />
                            <div className="promo-item">JOIN THE ADIDAS CREATORS CLUB</div>
                        </div>
                    </div>
                </div>
                <CreatorModal isModalVisible={this.state.isModalVisible} hideModal={this.hideModal}/>
            </div>
        )
    }
}