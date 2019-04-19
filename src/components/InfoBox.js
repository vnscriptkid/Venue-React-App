import React, { Component } from 'react';
import './InfoBox.scss';

class InfoBox extends Component {
    state = {  }
    render() { 
        console.log(this.props.children);
        return (
            <div className="infobox__outside">
                <div className="infobox">
                    <div className="infobox__img-box centerBlock">
                        <img className="infobox__img" src={this.props.img} alt={this.props.title}/>
                    </div>
                    {this.props.children}
                </div> 
            </div>
        );
    }
}
 
export default InfoBox;