import { useEffect, useState } from "react"
import { BiBody } from "react-icons/bi"
import { Outlet } from "react-router-dom"
import { GetWeather, GET3hourForecast, GetdayForecast } from "../conponent/apiService/apiService"
import Header from "./Header"
import WeatherCity from "./WeatherCity"
import WeatherHour from "./WeatherHour"

const WeatherLeft = (props) => {

    // const [cityname, setcityname] = useState('ha noi')
    const { cityname, setcityname, show, setshow } = props


    const [namecity, setnamecity] = useState('')
    const [List3hour, setList3hour] = useState([])
    const [List5day, setList5day] = useState([])

    const [iconWeather, seticonWeather] = useState([])


    const [nhietdo, setnhietdo] = useState('')
    const [wind, setwind] = useState()
    const [windspeed, setwindspeed] = useState()

    const [visibility, setvisibility] = useState('')
    const [clouds, setclouds] = useState('')

    const [pressure, setpressure] = useState('')
    const [humidit, sethumidity] = useState('')


    useEffect(() => {

        Weather()
        GET3hour()
        GETDay()
    }, [cityname])


    const Weather = async () => {

        let res = await GetWeather(cityname)
        console.log("weather res:", res)
        if (res.data) {

            setnhietdo(res.data.main.temp)
            setwind(res.data.weather[0].description)
            setvisibility(res.data.visibility)
            setpressure(res.data.main.pressure)
            sethumidity(res.data.main.humidity)
            setwindspeed(res.data.wind.speed)
            setclouds(res.data.clouds.all)
            setnamecity(res.data.name)
            seticonWeather(res.data.weather[0].icon)





        }


    }
    const GET3hour = async () => {

        let res = await GET3hourForecast(cityname)
        // console.log("3hour forecast", res.data.list)

        if (res.data.list) {
            setList3hour(res.data.list)
        } else {
            alert('không có thành phố bạn tìm')
        }



    }
    const GETDay = async () => {

        let res = await GetdayForecast(cityname)
        console.log("Day forecast", res.data)

        if (res.data.forecast.forecastday) {

            setList5day(res.data.forecast.forecastday)
        }

    }


    return (
        <div id="content">
            {/* <!-- header --> */}
            <Header

                cityname={cityname}
                setcityname={setcityname} />

            {/* <!-- day --> */}
            <WeatherCity

                cityname={cityname}
                setcityname={setcityname}
                nhietdo={nhietdo}
                wind={wind}
                visibility={visibility}
                pressure={pressure}
                humidit={humidit}
                windspeed={windspeed}
                clouds={clouds}
                namecity={namecity}
                iconWeather={iconWeather}



            />

            {/* <!-- content forecast --> */}
            <WeatherHour
                wind={wind}
                cityname={cityname}
                List3hour={List3hour}
                List5day={List5day}
                show={show}
                setshow={setshow}
            />

        </div>

    )
}
export default WeatherLeft