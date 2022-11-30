import { Navbar } from 'react-bootstrap';
import './App.scss';
import Header from './LeftContent/Header';
import WeatherRight from './conponent/RightContent/WeatherRight';
import WeatherCity from './LeftContent/WeatherCity';
import WeatherHour from './LeftContent/WeatherHour';
import WeatherLeft from './LeftContent/WeatherLeft';
import { useState } from 'react';
import { BsFillBarChartFill } from 'react-icons/bs';
import { FaBinoculars } from 'react-icons/fa';
import { MdAdminPanelSettings, MdCelebration, MdSettingsAccessibility } from 'react-icons/md';
import 'react-icons/bi'
import { BiCalendar } from 'react-icons/bi';


const App = () => {
  const [cityname, setcityname] = useState('HaNoi')
  const [show, setshow] = useState(true)

  return (
    <div className="App">


      <div id="main">
        <div id="toast"></div>
        {/* 
            <!--  --> */}
        <div id="weather">
          {/* <!-- nav --> */}
          <aside id="nav">
            <div >
              <div className="nav-logo">
                <img src="https://mblan1.github.io/weatherApp/assets/img/weather-logo.gif" alt="Logo" className="logo-img" />
                <span className="logo-title">Dev Weather</span>
              </div>
            </div>

            <nav className="navbar">
              <ul className="nav-list">
                <li className="nav-item">
                  <div className="nav_icon active">
                    <i className="fa-solid fa-chart-column nav_icon-img" style={{ "color": "black" }}><BsFillBarChartFill /></i>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav_icon">
                    <i className="fa-solid fa-binoculars nav_icon-img" style={{ "color": "black" }}><FaBinoculars /></i>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav_icon">
                    <i className="fa-solid fa-location-dot nav_icon-img" style={{ "color": "black" }}></i>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav_icon"
                    onClick={() => { setshow(!show) }}
                  >
                    <i className="fa-regular fa-calendar-days nav_icon-img" style={{ "color": "black" }}

                    >
                      <BiCalendar />
                    </i>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav_icon">
                    <i className="fa-solid fa-gear nav_icon-img" style={{ "color": "black" }}><MdSettingsAccessibility /></i>
                  </div>
                </li>

              </ul>
            </nav>
          </aside>

          {/* <!-- content --> */}
          <div className="contains">
            <WeatherLeft
              cityname={cityname}
              setcityname={setcityname}
              show={show}
              setshow={setshow}
            />

            {/* <!-- forecast --> */}
            <WeatherRight

              cityname={cityname}
              show={show}
              setshow={setshow}
            />
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
