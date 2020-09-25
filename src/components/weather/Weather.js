import React, {useState} from 'react'
import './weather.css'

function Weather(props) {
    
    const [isCelcius, setIsCelcius] = useState(true);

    function toFarenheit(valor) {
        const result = (valor * 1.8) + 32;
        return result
    }
    
    const background = (weather) => {
        switch (weather) {
            case 'Clouds':
                return 'https://images.unsplash.com/photo-1503494201477-5e04f651cfe5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
            case 'Rain':
                return 'https://cdn.pixabay.com/photo/2017/07/25/14/54/rain-2538429_960_720.jpg'                
            default:
                return 'https://cdn.pixabay.com/photo/2016/01/19/17/23/countryside-1149680_960_720.jpg'
        }
    } 

    const toOneforOther = (isCelcius) ? `${Math.round(props.info.main.temp)}°C` : `${Math.round(toFarenheit(Math.round(props.info.main.temp)))}°F`
   
    return(
        <main>
            {(props.info.cod === '404') 
            ? <div className='cityNotFounded'>
                <h1>404 city not founded</h1>
            </div>
            : <div style = {{backgroundImage: `url(${background(props.info.weather[0].main)})`}} className='wrapper'>
                <div className='weather-container'>
                    <div>
                        <h1 onClick={() => setIsCelcius(!isCelcius)} className='tempeture'>{toOneforOther}</h1>
                        <h2>{props.info.name}, Br</h2>
                        <h2>{props.info.weather[0].description}</h2>
                    </div>
                </div>
            </div>}
        </main>
    )
}

export default Weather