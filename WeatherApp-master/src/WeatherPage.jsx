import React from "react";

export default function PrintData({weather}) {
    return <div className="uk-text-center">
        <h1 className="uk-card uk-card-primary uk-card-hover uk-card-body uk-light"> <img  width="75" height="75" src={"https://openweathermap.org/img/wn/"+ weather.weather[0].icon + ".png"}/> {weather.name} <img  width="75" height="75" src={"https://openweathermap.org/img/wn/"+ weather.weather[0].icon + ".png"}/> </h1>
        <h3 className="uk-card uk-card-hover uk-card-small uk-card-default uk-card-body"> {(weather.main.temp - 273.15).toFixed(1) + '°C'}</h3>
        <div className="uk-flex-inline uk-flex-center uk-flex-middle">
            <div className="uk-card uk-card-hover uk-card-default uk-card-body"><h5> Min. {(weather.main.temp_min - 273.15).toFixed(1) + '°C'}</h5></div>
            <div className="uk-card uk-card-hover uk-card-default uk-card-body uk-margin-left"><h5> Max. {(weather.main.temp_max - 273.15).toFixed(1) + '°C'}</h5></div>
        </div>
        <h5>
            <div className="uk-card uk-card-hover uk-card-small uk-card-default uk-card-body"><h5> Percepita: {(weather.main.feels_like - 273.15).toFixed(1) + '°C'}</h5></div>
            <div className="uk-card uk-card-hover uk-card-small uk-card-default uk-card-body"><h5> Umidità: {weather.main.humidity + '%'}</h5></div>
            <div className="uk-card uk-card-hover uk-card-small uk-card-default uk-card-body"><h5> Pressione: {weather.main.pressure + ' hPa'}</h5></div>
        </h5>
    </div>
}