import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import './Footer.scss';

class Footer extends Component {

    constructor(props) {
        super(props);
        this.anotherRef = React.createRef();
    }
    
    state = {  }

    componentDidMount() {
        // console.log(this._footer);
        // console.log(this.anotherRef.current);
        // window._footer = this._footer;
    }
    
    render() { 
        return ( <div className="footer text-center light-color" ref={footer => this._footer = footer}>
            <div className="container" ref={this.anotherRef}>
                <Fade>
                    <h2 className="footer__heading">The Venue</h2>
                    <p className="footer__copyright">React 2019. All rights reserved!</p>
                </Fade>
            </div>
        </div> );
    }
}
 
export default Footer;