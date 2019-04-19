import React, { Component } from 'react';
import './PricingItem.scss';

class PricingItem extends Component {
    state = {  }
    render() { 
        return ( <div className="pricingItem">
            {this.props.children}
            <button className="btn btn--pricing">PURCHASE TICKETS</button>
        </div> );
    }
}
 
export default PricingItem;