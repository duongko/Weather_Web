import { Navbar } from 'react-bootstrap';
import './App.scss';
import Header from './conponent/Header';
import WeatherRight from './conponent/RightContent/WeatherRight';
import WeatherCity from './conponent/WeatherCity';
import WeatherHour from './conponent/WeatherHour';


const App = () => {
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
                <img src="./assets/img/weather-logo.gif" alt="Logo" className="logo-img" />
                <span className="logo-title">Dev Weather</span>
              </div>
            </div>

            <nav className="navbar">
              <ul className="nav-list">
                <li className="nav-item">
                  <div className="nav_icon active">
                    <i className="fa-solid fa-chart-column nav_icon-img"></i>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav_icon">
                    <i className="fa-solid fa-binoculars nav_icon-img"></i>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav_icon">
                    <i className="fa-solid fa-location-dot nav_icon-img"></i>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav_icon">
                    <i className="fa-regular fa-calendar-days nav_icon-img"></i>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav_icon">
                    <i className="fa-solid fa-gear nav_icon-img"></i>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav_icon">
                    <i className="fa-regular fa-moon nav_icon-img"></i>
                  </div>
                </li>
              </ul>
            </nav>
          </aside>

          {/* <!-- content --> */}
          <div className="contains">
            <div id="content">
              {/* <!-- header --> */}
              <Header />

              {/* <!-- day --> */}
              <WeatherCity />

              {/* <!-- content forecast --> */}
              <WeatherHour />
            </div>

            {/* <!-- forecast --> */}
            <WeatherRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
