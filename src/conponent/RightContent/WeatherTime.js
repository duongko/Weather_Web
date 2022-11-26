const WeatherTime = () => {

    return (
        <div className="forecast_time">
            <div className="sunday_icon"><i className="fa-regular fa-sun sunday_icon-img"></i></div>
            <div className="time_contains">
                <div className="timeblock">
                    <div className="timeblock_bg"></div>
                </div>
            </div>
            <input type="range" min="0" max="100" value="100" step="0.1" className="time_range" />
            <div className="time_sunset">
                <div className="sunrise">
                    <div className="sunset_title">Sunrise</div>
                    <div className="sunrise_time-value sunset_time">05:43 am</div>
                </div>
                <div className="sunset">
                    <div className="sunset_title">Sunset</div>
                    <div className="sunset_time-value sunset_time">5:59 pm</div>
                </div>
            </div>
        </div>

    )
}

export default WeatherTime