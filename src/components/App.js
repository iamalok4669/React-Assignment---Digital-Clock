import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        };
        this.intervalId = null;
    }

    render() {

        return(
            <div className="Clock">
                <h3 id="time">{this.getTimeString()}</h3>
            </div>
        )
    }
    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState({
                time:new Date()
            })
        },1*1000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
    getTimeString() {
        const currTime = this.state.time;
        const [hours, min, sec] = [
            currTime.getHours(),
            currTime.getMinutes(),
            currTime.getSeconds()
        ];

        const amOrPm = hours >=12? "PM" : "AM";
        const twel = hours > 12 ? hours-12 : hours;
        const hString = this.padNumberToTwoDigits(twel); 
        const mString = this.padNumberToTwoDigits(min);
        const sString = this.padNumberToTwoDigits(sec);

        const timeString = `${hString}:${mString}:${sString} ${amOrPm}`;
        return timeString;
    }

    padNumberToTwoDigits(num) {
        
        return `${num < 10 ? "0" : ""}${num}`;
    }
}


export default App;
