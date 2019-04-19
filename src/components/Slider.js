import React, { Component } from 'react';
import SlickSlider from "react-slick";
import slide_one from '../resources/images/slide_one.JPG';
import slide_two from '../resources/images/slide_two.JPG';
import slide_three from '../resources/images/slide_three.JPG';
import Countdown from './Countdown';
import './Slider.scss';

class Slider extends Component {
    state = {}

    renderImages = () => {
        return [slide_one, slide_two, slide_three].map(item => (
            <div key={item}>
                <div style={{ 
                    height: `${window.innerHeight}px`, 
                    background: `linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), url(${item})`, 
                    backgroundSize: 'cover' }}>
                </div>
            </div>
        ))
    }

    reRender = () => {
        this.forceUpdate();
    }
    
    componentDidMount() {
        window.addEventListener('resize', this.reRender);
    }
    
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            autoplay: true
        };

        return (
            <div style={{ height: `${window.innerHeight}px`, overflow: 'hidden', position: 'relative' }}>
                <SlickSlider {...settings}>
                    {this.renderImages()}
                </SlickSlider>
                <div className="slider__middle-text">
                    <h1>September 08, 1995</h1> 
                </div>
                <Countdown />
            </div>
        );
    }
}

export default Slider;