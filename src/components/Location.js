import React, { Component } from 'react';
import './Location.scss';

class Location extends Component {
    state = {  }

    say() {
        console.log('I am Location');
    }
    
    render() { 
        return ( <div className="location">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14896.747609991373!2d105.8466438!3d21.0252063!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abebf87e0011%3A0x647af200da508d2b!2sHanoi+Opera+House!5e0!3m2!1sen!2s!4v1555657497747!5m2!1sen!2s" 
                width="100%" 
                height="450" 
                frameBorder="0" 
                allowFullScreen
                title="map"
            ></iframe>
            <p className="location__title">LOCATION</p>
        </div> );
    }
}
 
export default Location;