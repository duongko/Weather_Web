import { Navbar } from 'react-bootstrap';
import './App.scss';
import Header from './LeftContent/Header';
import WeatherRight from './conponent/RightContent/WeatherRight';
import WeatherCity from './LeftContent/WeatherCity';
import WeatherHour from './LeftContent/WeatherHour';
import WeatherLeft from './LeftContent/WeatherLeft';
import { useState } from 'react';
import { BsFillBarChartFill } from 'react-icons/bs';
import { FaBars, FaBinoculars, FaDoorClosed, FaWindowClose } from 'react-icons/fa';
import { MdAdminPanelSettings, MdCelebration, MdMic, MdSettingsAccessibility } from 'react-icons/md';
import 'react-icons/bi'
import { BiCalendar } from 'react-icons/bi';


const App = () => {
  const [cityname, setcityname] = useState('HaNoi')
  const [show, setshow] = useState(true)
  const [isphone, setisphone] = useState(true)
  const [wind, setwind] = useState()

  const handlecalendar = () => {

    setshow(!show)
    setisphone(!isphone)
  }

  return (
    <div className="App">


      {/* <div id="toast"></div> */}
      {/* 
            <!--  --> */}
      <div id="weather" className='container'>
        {/* <!-- nav --> */}



        <div className='sidebar'
          onClick={() => setisphone(!isphone)}
        >
          {isphone == true ?

            <FaBars />
            :
            <></>
          }
        </div>
        <div id="nav" className={`col-sm-1 ${isphone ? "hidden" : "show"}  `}>


          <div className='sidebar-close'
            onClick={() => setisphone(!isphone)}
          >
            {isphone == false ?

              <>

                X
              </>
              :
              <></>
            }
          </div>
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
                  <i className="fa-solid fa-chart-column nav_icon-img" style={{ "color": "black", "fontSize": "20px" }}><BsFillBarChartFill /></i>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav_icon">
                  <i className="fa-solid fa-binoculars nav_icon-img" style={{ "color": "black", "fontSize": "20px" }}><FaBinoculars /></i>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav_icon">
                  <i className="fa-solid fa-location-dot nav_icon-img" style={{ "color": "black", "fontSize": "20px" }}>
                    <MdMic />
                  </i>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav_icon"
                  onClick={() => { handlecalendar() }}
                >
                  <i className="fa-regular fa-calendar-days nav_icon-img" style={{ "color": "black", "fontSize": "20px" }}

                  >
                    <BiCalendar />
                  </i>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav_icon">
                  <i className="fa-solid fa-gear nav_icon-img" style={{ "color": "black", "fontSize": "20px" }}><MdSettingsAccessibility /></i>
                </div>
              </li>

            </ul>
          </nav>


        </div>


        {/* <!-- content --> */}
        <div className={`row contains col-sm-11`} >
          <WeatherLeft
            cityname={cityname}
            setcityname={setcityname}
            show={show}
            setshow={setshow}
            wind={wind}
            setwind={setwind}
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

  );
}

export default App;
