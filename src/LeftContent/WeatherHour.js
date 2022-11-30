const WeatherHour = (props) => {
    const { cityname, List3hour, List5day, show, setshow } = props


    if (List5day.length > 0) {

        console.log("ngày mới:", List5day)
    }

    const currentDate = new Date();
    let hour = currentDate.getHours()



    return (
        <div className="weather_day-forecast">



            {show == true ?
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


                            {List3hour.slice(0, 7).map((value, index) => {

                                const dateTime = new Date(value.dt_txt);
                                if (dateTime > currentDate) {
                                    hour += 3

                                    return (

                                        <li className="chart_item" key={index}>
                                            <div className="chart_hour">{hour > 24 ? hour - 24 : hour}h</div>
                                            <div className="chart_item-icon cloud_icon"><img style={{ "width": '72%' }} className="fa-solid fa-cloud-rain" src={value.weather[0].icon ? `https://openweathermap.org/img/wn/${value.weather[0].icon}@2x.png` : '#'} /></div>
                                            <div className="chart_temp">{value.main.temp}<sup>o</sup>C</div>
                                        </li>




                                    )



                                } else {

                                }




                            })


                            }

                        </ul>
                    </div>
                </div>
                :
                <div className="chart">
                    <div className="chart_header">
                        <h1 className="chart_title">How's the temperature 5 Days !</h1>
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


                            {List5day.map((value, index) => {





                                return (

                                    <li className="chart_item" key={index}>
                                        <div className="chart_hour">{value.date}</div>
                                        <div className="chart_item-icon cloud_icon"><img style={{ "width": '72%' }} className="fa-solid fa-cloud-rain" src={value.day.condition.icon} /></div>
                                        <div className="chart_temp">{value.day.avgtemp_c}<sup>o</sup>C</div>
                                    </li>




                                )








                            })


                            }

                        </ul>
                    </div>
                </div>



            }






            <div className="tomorrow">
                <div className="tomorrow_block p16">
                    <div className="tomorrow_title">
                        <span className="tomorrow_header">tomorrow</span>
                        <div className="tomorrow_position">{cityname}</div>
                    </div>
                    <div>
                        <img src={List5day && List5day.length > 0 ? List5day[1].day.condition.icon : ""} />
                    </div>

                    <div className="tomorrow_status">
                        <div className="tomorrow_temp">{List5day.length > 0 ? List5day[1].day.maxtemp_c : ""}<sup>o</sup>C</div>
                        <div className="tomorrow_desc">{List5day.length > 0 ? List5day[1].day.condition.text : ''}</div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default WeatherHour