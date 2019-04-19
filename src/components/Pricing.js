import React, { Component } from 'react';
import PricingItem from './PricingItem';
import './Pricing.scss';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {
    state = {}
    render() {
        return (<div className="section section--dark text-center light-color pricing">
            <div className="container">
                <h2 className="section-heading mb-2">Pricing</h2>
                <div className="d-flex">
                <Zoom left delay={500}>
                    <div className="pricing__item">
                        <PricingItem>
                            <h3 className="pricingItem__price">$100</h3>
                            <h4 className="pricingItem__type border-bottom border-bottom--orange mb-1">BALCONY</h4>
                            <p className="pricingItem__desc mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptatibus quia laboriosam dolorum omnis quo id dignissimos perspiciatis provident aperiam?</p>
                        </PricingItem>
                    </div>
                </Zoom>
                <Zoom>                
                    <div className="pricing__item">
                        <PricingItem>
                            <h3 className="pricingItem__price">$150</h3>
                            <h4 className="pricingItem__type border-bottom border-bottom--orange mb-1">MEDIUM</h4>
                            <p className="pricingItem__desc mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptatibus quia laboriosam dolorum omnis quo id dignissimos perspiciatis provident aperiam?</p>
                        </PricingItem>
                    </div>
                </Zoom>
                <Zoom right delay={500}>
                    <div className="pricing__item">
                        <PricingItem>
                            <h3 className="pricingItem__price">$250</h3>
                            <h4 className="pricingItem__type border-bottom border-bottom--orange mb-1">STAR</h4>
                            <p className="pricingItem__desc mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptatibus quia laboriosam dolorum omnis quo id dignissimos perspiciatis provident aperiam?</p>
                        </PricingItem>
                    </div>
                </Zoom>
                </div>
            </div>
        </div>);
    }
}

export default Pricing;