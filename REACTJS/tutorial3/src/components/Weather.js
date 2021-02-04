import React, { Component } from 'react'
import fetch  from 'node-fetch'

export default class Weather extends Component {
    state={
        weather:[],
        weatherMain:{}
    }
    getWeather = (city)=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8824903a44f850b08f072bdcf8bbc99d`)
        .then(res=>res.json())
        .then(data=>{
            this.setState({
                weather:data,
                weatherMain:data.main
            })
        })
    }


    render() {
        return (
            <div>
                <button onClick={()=>this.getWeather('Brussels')}>Get Weather</button>
                {console.log(this.state.weather)}
                {console.log(this.state.weatherMain.temp)}
            </div>
        )
    }
}
