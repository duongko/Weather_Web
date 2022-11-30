
import axios from "axios";

const keyapi = "fb7ad292e26831a901626351a61542ba"



const GetWeather = (citynameapi) => {


    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${citynameapi}&appid=${keyapi}&units=metric`)
}

const GET3hourForecast = (citynameapi) => {


    return axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${citynameapi}&appid=${keyapi}&units=metric`)


}
const GetdayForecast = (citynameapi) => {

    return axios.get(`http://api.weatherapi.com/v1/forecast.json?key=3fcd1aae29534e7f85883410222911&days=5&q=${citynameapi}}`)
}
export {
    GetWeather, GET3hourForecast, GetdayForecast
}


