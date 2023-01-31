import moment from 'moment'
import "react-icons/bs"
import { BsFillSunFill } from 'react-icons/bs'

const WeatherTime = (props) => {

    const { sunrise, sunset } = props

    let times = new Date()

    // console.log("time:", times.getHours())


    let sunrisetime = moment.unix(sunrise).format("hh:mm a")
    let sunsetime = moment.unix(sunset).format("hh:mm a")
    let sumtime = 12 + parseInt(sunsetime) - parseInt(sunrisetime)
    let moc = parseInt(sunrisetime)


    let hieumoc = (times.getHours() - moc)

    let temp = hieumoc / sumtime




    return (
        <div className="forecast_time">
            <div className="sunday_icon" style={{ "left": `${hieumoc > 0 && temp < 1 ? (temp - 0.06) * 100 : 88}%` }}><i className="fa-regular fa-sun sunday_icon-img" ><BsFillSunFill /></i></div>
            <div className="time_contains">
                <div className="timeblock">
                    <div className="timeblock_bg" style={{ "width": `${hieumoc > 0 ? temp * 100 : 100}%` }}></div>
                </div>
            </div>
            <input type="range" min="0" max="100" value="100" step="0.1" className="time_range" />
            <div className="time_sunset">
                <div className="sunrise">
                    <div className="sunset_title">Sunrise</div>
                    <div className="sunrise_time-value sunset_time">{sunrisetime}</div>
                </div>
                <div className="sunset">
                    <div className="sunset_title">Sunset</div>
                    <div className="sunset_time-value sunset_time">{sunsetime}</div>
                </div>
            </div>
        </div >

    )
}

export default WeatherTime