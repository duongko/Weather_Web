import { IconBase } from 'react-icons'
import { BsFillBarChartFill } from 'react-icons/bs'
import 'react-icons/md'
import { MdAnalytics } from 'react-icons/md'

const Navbar = () => {



    return (

        <div id="nav">

            <BsFillBarChartFill />
            <div >
                <div className="nav-logo">
                    <img src="https://mblan1.github.io/weatherApp/assets/img/weather-logo.gif" alt="Logo" className="logo-img" />
                    <span className="logo-title">Dev Weather</span>
                </div>
            </div>

            <nav className="navbar">
                <ul className="nav-list">
                    <li className="nav-item">

                        https://mblan1.github.io/weatherApp/assets/img/weather-logo.gif

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
        </div>


    )
}
export default Navbar