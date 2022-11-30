import { set } from "lodash"
import { BiBody } from "react-icons/bi"


const WeatherCity = (props) => {
    const { nhietdo, wind, visibility, pressure, humidit, windspeed, clouds, namecity, iconWeather } = props
    const cloud = "cloud"
    const weather_status = "weather-status"






    return (

        <div className="weather_day-forecast">
            <div id="weather-status" className={wind ? wind : "weather-default"}

            >
                <div className="p24">
                    <div className="country">
                        <div className="weather-icon">

                            <img style={{ "position": "absolute", "left": 0, 'width': '51px' }} className="fa-solid fa-cloud-sun" src={`https://openweathermap.org/img/wn/${iconWeather}@2x.png`} />

                        </div>
                        <div className="country-desc">
                            <h3 className="country-name">{namecity}</h3>
                            <span className="weather-feeling">What's the weather</span>
                        </div>
                    </div>

                    {/* <!-- temperature --> */}
                    <div className="weather-temp">
                        <div className="weather-temp-contains">
                            <div className="weather-temp_max">
                                <span className="temp temp_max">{nhietdo}<sup>o</sup>C</span>
                            </div>
                            <div className="weather-temp_min">
                                <span className="temp_min">{nhietdo}<sup>o</sup>C</span>
                            </div>
                        </div>
                        <div className="weather-temp-title">{wind}</div>
                    </div>

                    {/* <!-- weather-more-status --> */}
                    <div className="weather_info">
                        <div className="status pressure">
                            <div className="pressure-title">Pressure</div>
                            <div className="status-desc">{pressure} hPa</div>
                        </div>
                        <div className="status visibility">
                            <div className="visibility-title">Visibility</div>
                            <div className="status-desc">{visibility} m</div>
                        </div>
                        <div className="status humadidy">
                            <div className="humadidy-title">Humadidy</div>
                            <div className="status-desc">{humidit}%</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- wind --> */}
            <div className="day-wind">
                <div className="p24">
                    <div className="country">
                        <div className="weather-icon">
                            <img style={{ "position": "absolute", "left": 0, 'width': '51px' }} className="fa-solid fa-cloud-sun" src={`https://openweathermap.org/img/wn/${iconWeather}@2x.png`} />
                        </div>
                        <div className="country-desc">
                            <h3 className="country-name">Wind</h3>
                            <span className="weather-feeling">Clouds</span>
                        </div>
                    </div>

                    {/* <!-- temp --> */}
                    <div className="weather-temp">
                        <div className="weather-temp-contains">
                            <div className="weather-temp_max">
                                <span className="temp wind-direction">{windspeed}km</span>
                            </div>
                        </div>
                        <div className="weather-temp-title">{wind}</div>
                    </div>
                    {/* <!-- block range --> */}
                    <div className="status wind_block">
                        <div className="wind_block-title">Clouds</div>
                        <div className="wind_block-range">
                            <input className="wind-range" min="0" max="100" step="1" />
                            <div className="wind_block-range-percent" style={{ "width": `${clouds}%` }}></div>
                            <span className="wind-percent" style={{ "left": `calc(${clouds}% - 18px)` }}><span className="wind_value">{clouds}%</span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default WeatherCity