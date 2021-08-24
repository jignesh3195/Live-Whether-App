import React, { Component } from 'react'
import ReactAnimatedWeather from 'react-animated-weather';


const defaults = {
    icon: 'PARTLY_CLOUDY_DAY',
    color: 'hsl(185, 93%, 48%)',
    size: 140,
    animate: true
};

class Whethers extends Component {
    
    state = {
        city: "",
        temp: "",
        country: "",
        weatherState: "",
        weathermood: "",
        humidity: "",
        pressure: "",
        speed: "",
    }


    componentDidMount() {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=ahmedabad&appid=078d8ca7cd8ef72fe7bbf93d8063c59e&units=metric`)
            .then((Response) => Response.json())
            .then((data) => {
                console.log(data);
                this.setState
                    ({ city: data.name, temp: Math.round(data.main.temp), country: data.sys.country, weatherState: data.main.feelslike, humidity: data.main.humidity, pressure: data.main.pressure, speed: data.wind.speed })
            })
    }
    render() {
        return (
            <>

                <article className="widget">
                    <div className="weatherIcon">
                        <ReactAnimatedWeather className="wicon"
                            icon={defaults.icon}
                            color={defaults.color}
                            size={defaults.size}
                            animate={defaults.animate}
                        />
                        <i className={`wi ${this.state.weatherState}`}></i>
                    </div>

                    <div className="weatherInfo">
                        <div className="temperature">
                            <span>{this.state.temp}&deg;</span>
                        </div>

                        <div className="description">
                            <div className="weatherCondition">{this.state.weathermood}</div>
                            <div className="place">
                                {this.state.city}, {this.state.country}
                            </div>
                        </div>
                    </div>

                    <div className="date"> {new Date().toLocaleString()} </div>

                    {/* our 4column section  */}
                    <div className="extra-temp">
                        <div className="temp-info-minmax">
                            <div className="two-sided-section">
                                <p>
                                    <i className={"wi wi-sunset"}></i>
                                </p>
                                <p className="extra-info-leftside">
                                    {this.state.timeStr} PM <br />
                                    Sunset
                                </p>
                            </div>

                            <div className="two-sided-section">
                                <p>
                                    <i className={"wi wi-humidity"}></i>
                                </p>
                                <p className="extra-info-leftside">
                                    {this.state.humidity} <br />
                                    Humidity
                                </p>
                            </div>
                        </div>

                        <div className="weather-extra-info">
                            <div className="two-sided-section">
                                <p>
                                    <i className={"wi wi-rain"}></i>
                                </p>
                                <p className="extra-info-leftside">
                                    {this.state.pressure} <br />
                                    Pressure
                                </p>
                            </div>

                            <div className="two-sided-section">
                                <p>
                                    <i className={"wi wi-strong-wind"}></i>
                                </p>
                                <p className="extra-info-leftside">
                                    {this.state.speed} <br />
                                    Speed
                                </p>
                            </div>
                        </div>
                    </div>
                </article>
            </>
        );
    }
}

export default Whethers;
