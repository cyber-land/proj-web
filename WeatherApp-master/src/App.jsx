import React,{useState,useEffect} from 'react';
import PrintData from './WeatherPage';

const API_KEY =  "d5eadf8e319f2c179bf8c1501a4338f5"

function App() {
  const [weather,setWeather] = useState({})
  const [city, setCity] = useState("")


  function CercaDati(ev) {
    ev.preventDefault()

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    .then(res => res.json())
    .then(body => setWeather(body))
    return false   
    
  }

  useEffect(() => {
    if (!weather) return
  }, [weather])
    
  return (
    <div className="mainDiv">
      <nav class="uk-navbar-container" uk-navbar>
        <div class="uk-navbar-center">
          <div className="uk-navbar-item">
            <form onSubmit={(ev) => CercaDati(ev)} className="uk-search uk-search-navbar">
              <span uk-search-icon></span>
              <input value={city} onChange={(ev)=> setCity(ev.target.value)} className="uk-search-input" type="search" placeholder="Search location..."></input>
            </form>
          </div>
        </div>
      </nav>

      {(typeof weather.main != "undefined") ? (
        <PrintData weather={weather}/>
        ) : ('')}
    </div>
  );
}

export default App;