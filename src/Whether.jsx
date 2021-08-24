import React, { Component } from 'react'

class Whether extends Component {
    state = {
        city: "",
        temp: "",
        country: "",
    }
    componentDidMount() {
        fetch("http://api.openweathermap.org/data/2.5/weather?q=mumbai&appid={ApiKey}&units=metric")
            .then((Response) => Response.json())
            .then((data) => {
                console.log(data);
                this.setState({ city: data.name, temp: Math.round(data.main.temp), country: data.sys.country })
            })
    }
    render() {
        return (
            <>
                <div>
                    <div className="card col-4 mx-auto my-5 bg-image">
                        <div className="card-body">
                            <h5 className="card-title text-white">{this.state.city}</h5>
                            <h6 className="card-subtitle mb-2">{this.state.country}</h6>
                            <h1 className="text-white">{this.state.temp}°C</h1>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Whether;
