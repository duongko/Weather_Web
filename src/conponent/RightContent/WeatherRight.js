import WeatherInfo from "./WeatherInfo"
import WeatherPredic from "./WeatherPredic"
import WeatherTime from "./WeatherTime"

const WeatherRight = () => {

    return (


        <div id="forecast">
            <div className="forecast_contains">
                <WeatherInfo />

                <WeatherTime />
                <div className="forecast_uvi">
                    <div className="uvi">
                        <i className="fa-regular fa-sun uvi-icon"></i>
                        <div className="uvi_body">
                            <div className="uvi_title">
                                <div className="uvi_value">20 UVI</div>
                                <div className="uvi_cc">Moderate</div>
                            </div>
                            <div className="uvi_desc">Moderate risk of from UV rays</div>
                        </div>
                    </div>
                </div>

                {/* <!-- weather prediction --> */}
                <WeatherPredic />
            </div>
        </div>
    )
}
export default WeatherRight