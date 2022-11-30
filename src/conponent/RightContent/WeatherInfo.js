const WeatherInfo = (props) => {
    const { namecity, nhietdo, country } = props

    return (
        <div className="forecast_header">
            <div className="forecast_city">
                <div className="city_status">Clouds</div>
                <div className="city_name">{namecity},{country}</div>
            </div>
            <div className="forecast_temp">
                <div className="city_temp">{nhietdo}<sup>o</sup>C</div>
            </div>
        </div>


    )
}

export default WeatherInfo