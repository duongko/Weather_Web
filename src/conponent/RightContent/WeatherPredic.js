import moment from "moment"
import { BiCalendar } from "react-icons/bi"

const WeatherPredic = (props) => {
    const { show, setshow, List5day } = props


    return (
        <div className="prediction">
            <div className="prediction_title">Weather Prediction</div>
            <div className="prediction_block">
                <div className="prediction_bl prediction_tomorrow">
                    <i className="fa-solid fa-cloud cloud_icon mr16"></i>
                    <div className="prediction_desc">
                        <div className="prediction_info">
                            <div className="info_status">Clouds</div>
                            <div className="prediction_time">{List5day.length > 0 && List5day[1].date}</div>
                        </div>
                        <div className="info_temp">{List5day.length > 0 && List5day[1].day.maxtemp_c}<sup>o</sup>C /{List5day.length > 0 && List5day[1].day.mintemp_c}<sup>o</sup>C</div>
                    </div>
                </div>
                <div className="prediction_bl prediction_nextTomorrow">
                    <i className="fa-solid fa-cloud cloud_icon mr16"></i>
                    <div className="prediction_desc">
                        <div className="prediction_info">
                            <div className="info_status">Clouds</div>
                            <div className="prediction_time">{List5day.length > 0 && List5day[2].date}</div>
                        </div>
                        <div className="info_temp">{List5day.length > 0 && List5day[2].day.maxtemp_c}<sup>o</sup>C /{List5day.length > 0 && List5day[2].day.mintemp_c}<sup>o</sup>C</div>
                    </div>
                </div>
                <div className="next_btn">
                    <div className="btn_block" onClick={() => { setshow(!show) }}>
                        <i className="fa-regular fa-calendar-days" style={{ 'font-size': "16px" }}><BiCalendar /></i>
                        <button className="next_title" >

                            {show == true ? "Next 5 days" : "Back Today"}


                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default WeatherPredic