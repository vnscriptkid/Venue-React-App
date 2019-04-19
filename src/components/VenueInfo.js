import React, { Component } from 'react';
import InfoBox from './InfoBox';
import './VenueInfo.scss';
import calendarIcon from '../resources/images/icons/calendar.png'
import locationIcon from '../resources/images/icons/location.png'
import Zoom from 'react-reveal/Zoom';

class VenueInfo extends Component {
    state = {  }
    render() { 
        return ( <div className="info">
            <div className="container d-flex info__container">
                <Zoom duration={500} >
                    <InfoBox img={calendarIcon}>
                        <p className="border-bottom">Event Date & Time</p>
                        <p>7 August 2017</p>
                        <p>@10.00 pm</p>
                    </InfoBox>
                </Zoom>
                <Zoom duration={500} delay={500}>
                    <InfoBox img={locationIcon}>
                        <p className="border-bottom">Event Location</p>
                        <p>345 Speer Street</p>
                        <p>Oakland, CA 9835</p>
                    </InfoBox>
                </Zoom>
            </div>
        </div> );
    }
}
 
export default VenueInfo;