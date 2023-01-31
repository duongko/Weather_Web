import WeatherInfo from "./WeatherInfo"
import WeatherPredic from "./WeatherPredic"
import WeatherTime from "./WeatherTime"
import { GetdayForecast, GetWeather } from "../apiService/apiService"
import { useEffect, useState } from "react"
import { BsFillSunFill } from "react-icons/bs"
const WeatherRight = (props) => {





    const { cityname, show, setshow } = props
    const [namecity, setnamecity] = useState('')
    const [nhietdo, setnhietdo] = useState('')

    const [sunrise, setsunrise] = useState()
    const [sunset, setsunset] = useState()
    const [uv, setuv] = useState()



    const [country, setcountry] = useState('VN')
    const [List5day, setList5day] = useState([])
    useEffect(() => {

        Weather()
        GETDay()

    }, [cityname])




    const Weather = async () => {

        let res = await GetWeather(cityname)
        // console.log("weather:", res.data)
        if (res.data) {
            setnamecity(res.data.name)

            setnhietdo(res.data.main.temp)
            setcountry(res.data.sys.country)
            setsunrise(res.data.sys.sunrise)
            setsunset(res.data.sys.sunset)


        }



    }
    const GETDay = async () => {

        let res = await GetdayForecast(cityname)


        if (res.data.forecast.forecastday) {

            setuv(res.data.current.uv)
            setList5day(res.data.forecast.forecastday)
        }

    }

    return (


        <div className="forecast col-sm-3">
            <div className="forecast_contains">
                <WeatherInfo
                    namecity={namecity}
                    nhietdo={nhietdo}
                    country={country}

                />

                <WeatherTime

                    sunrise={sunrise}
                    sunset={sunset}

                />
                <div className="forecast_uvi">
                    <div className="uvi">
                        <i className="fa-regular fa-sun uvi-icon"><BsFillSunFill /></i>
                        <div className="uvi_body">
                            <div className="uvi_title">
                                <div className="uvi_value">{uv} UVI</div>
                                <div className="uvi_cc">Moderate</div>
                            </div>
                            <div className="uvi_desc">Moderate risk of from UV rays</div>
                        </div>
                    </div>
                </div>

                {/* <!-- weather prediction --> */}
                <WeatherPredic
                    show={show}
                    setshow={setshow}
                    List5day={List5day}
                />
            </div>
        </div>
    )
}
export default WeatherRight