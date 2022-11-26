const WeatherCity = () => {
    return (

        <div className="weather_day-forecast">
            <div className="weather-status">
                <div className="p24">
                    <div className="country">
                        <div className="weather-icon">
                            <div className="weather_sun-icon sun-icon">
                                <i className="fa-solid fa-cloud-sun"></i>
                            </div>
                        </div>
                        <div className="country-desc">
                            <h3 className="country-name">HaNoi</h3>
                            <span className="weather-feeling">What's the weather</span>
                        </div>
                    </div>

                    {/* <!-- temperature --> */}
                    <div className="weather-temp">
                        <div className="weather-temp-contains">
                            <div className="weather-temp_max">
                                <span className="temp temp_max">35<sup>o</sup>C</span>
                            </div>
                            <div className="weather-temp_min">
                                <span className="temp_min">35<sup>o</sup>C</span>
                            </div>
                        </div>
                        <div className="weather-temp-title">Few CLouds</div>
                    </div>

                    {/* <!-- weather-more-status --> */}
                    <div className="weather_info">
                        <div className="status pressure">
                            <div className="pressure-title">Pressure</div>
                            <div className="status-desc">1005 hPa</div>
                        </div>
                        <div className="status visibility">
                            <div className="visibility-title">Visibility</div>
                            <div className="status-desc">10 Km</div>
                        </div>
                        <div className="status humadidy">
                            <div className="humadidy-title">Humadidy</div>
                            <div className="status-desc">50%</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- wind --> */}
            <div className="day-wind">
                <div className="p24">
                    <div className="country">
                        <div className="weather-icon">
                            <i className="fa-solid fa-wind"></i>
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
                                <span className="temp wind-direction">5km</span>
                            </div>
                        </div>
                        <div className="weather-temp-title">Few CLouds</div>
                    </div>
                    {/* <!-- block range --> */}
                    <div className="status wind_block">
                        <div className="wind_block-title">Clouds</div>
                        <div className="wind_block-range">
                            <input className="wind-range" type="range" min="0" max="100" value="100" step="1" />
                            <div className="wind_block-range-percent"></div>
                            <span className="wind-percent"><span className="wind_value">20%</span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherCity