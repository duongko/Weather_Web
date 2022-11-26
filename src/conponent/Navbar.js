const Navbar = () => {



    return (
        <>
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
        </>

    )
}
export default Navbar