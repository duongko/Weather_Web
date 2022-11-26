const WeatherHour = () => {


    return (
        <div className="weather_day-forecast">
            <div className="chart">
                <div className="chart_header">
                    <h1 className="chart_title">How's the temperature today !</h1>
                    <ul className="chart_icons">
                        <li className="chart_icon">
                            <i className="fa-solid fa-temperature-low status_icon"></i>
                        </li>
                        <li className="chart_icon"><i className="fa-solid fa-umbrella status_icon"></i></li>
                        <li className="chart_icon"><i className="fa-solid fa-wind status_icon"></i></li>
                    </ul>
                </div>

                {/* <!-- chart --> */}
                <div className="weather_chart">
                    <ul className="chart_lists">
                        <li className="chart_item">
                            <div className="chart_hour">12</div>
                            <div className="chart_item-icon cloud_icon"></div>
                            <div className="chart_temp">33<sup>o</sup>C</div>
                        </li>
                        <li className="chart_item">
                            <div className="chart_hour">12</div>
                            <div className="chart_item-icon cloud_icon"></div>
                            <div className="chart_temp">33<sup>o</sup>C</div>
                        </li>
                        <li className="chart_item">
                            <div className="chart_hour">12</div>
                            <div className="chart_item-icon cloud_icon"></div>
                            <div className="chart_temp">33<sup>o</sup>C</div>
                        </li>
                        <li className="chart_item">
                            <div className="chart_hour">12</div>
                            <div className="chart_item-icon cloud_icon"></div>
                            <div className="chart_temp">33<sup>o</sup>C</div>
                        </li>
                        <li className="chart_item">
                            <div className="chart_hour">12</div>
                            <div className="chart_item-icon cloud_icon"></div>
                            <div className="chart_temp">33<sup>o</sup>C</div>
                        </li>
                        <li className="chart_item">
                            <div className="chart_hour">12</div>
                            <div className="chart_item-icon cloud_icon"></div>
                            <div className="chart_temp">33<sup>o</sup>C</div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="tomorrow">
                <div className="tomorrow_block p16">
                    <div className="tomorrow_title">
                        <span className="tomorrow_header">Tomorrow</span>
                        <div className="tomorrow_position">New York</div>
                    </div>

                    <div className="tomorrow_status">
                        <div className="tomorrow_temp">24<sup>o</sup>C</div>
                        <div className="tomorrow_desc">Light Rain</div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default WeatherHour