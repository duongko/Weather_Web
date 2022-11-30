const Weather5days = (props) => {


    const { cityname, List3hour, List5day } = props
    if (List5day.lenght > 0) {

        console.log("ngày mới:", List5day[1].day.maxtemp_c)
    }

    const currentDate = new Date();
    let hour = currentDate.getHours()



    return (
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
    )
}
export default Weather5days