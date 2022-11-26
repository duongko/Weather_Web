const WeatherPredic = () => {

    return (
        <div className="prediction">
            <div className="prediction_title">Weather Prediction</div>
            <div className="prediction_block">
                <div className="prediction_bl prediction_tomorrow">
                    <i className="fa-solid fa-cloud cloud_icon mr16"></i>
                    <div className="prediction_desc">
                        <div className="prediction_info">
                            <div className="info_status">Clouds</div>
                            <div className="prediction_time">Sep 20</div>
                        </div>
                        <div className="info_temp">33<sup>o</sup>C /33<sup>o</sup>C</div>
                    </div>
                </div>
                <div className="prediction_bl prediction_nextTomorrow">
                    <i className="fa-solid fa-cloud cloud_icon mr16"></i>
                    <div className="prediction_desc">
                        <div className="prediction_info">
                            <div className="info_status">Clouds</div>
                            <div className="prediction_time">Sep 20</div>
                        </div>
                        <div className="info_temp">33<sup>o</sup>C /33<sup>o</sup>C</div>
                    </div>
                </div>
                <div className="next_btn">
                    <div className="btn_block">
                        <i className="fa-regular fa-calendar-days"></i>
                        <button className="next_title">Next 5 days</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default WeatherPredic