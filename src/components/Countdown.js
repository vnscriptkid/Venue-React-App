import React, { Component } from 'react';
import './Countdown.scss';

class Countdown extends Component {
    state = {  
        birthOfDung: new Date('September 08, 2019 00:00:00').getTime(),
        days: null,
        hours: null,
        mins: null,
        seconds: null
    }

    componentDidMount() {
        setInterval(() => {
            const timeInMils = this.state.birthOfDung - Date.now();
            // console.log(this.convertFromMils(timeInMils));
            const { days, hours, mins, seconds } = this.convertFromMils(timeInMils);
            this.setState({ days, hours, mins, seconds })
        }, 1000);
    }

    convertFromMils = (mils) => {
        const days = Math.floor(mils / 1000 / 3600 / 24);
        const hours = Math.floor(mils / 1000 / 3600 % 24);
        const mins = Math.floor(mils / 1000 / 60 % 60);
        const seconds = Math.floor(mils / 1000 % 60);
        
        return { days, hours, mins, seconds };
    }
    
    render() { 
        const { days, hours, mins, seconds } = this.state;
        return ( <div className="countdown" style={{ position: 'absolute', bottom: 0, left: 0 }}>
            <span className="countdown__title">Event Start In</span>
            <div className="countdown__time-left">
                <span className="countdown__unit-box">
                    <span className="countdown__number">{days}</span> 
                    <span className="countdown__under-number">days</span> 
                </span>
                <span className="countdown__unit-box">
                    <span className="countdown__number">{hours}</span> 
                    <span className="countdown__under-number">hours</span> 
                </span>
                <span className="countdown__unit-box">
                    <span className="countdown__number">{mins}</span> 
                    <span className="countdown__under-number">mins</span> 
                </span>
                <span className="countdown__unit-box">
                    <span className="countdown__number">{seconds}</span> 
                    <span className="countdown__under-number">seconds</span> 
                </span>
            </div>
        </div> );
    }
}
 
export default Countdown;