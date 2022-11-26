const Header = () => {

    return (

        <header className="header">
            {/* <!-- info --> */}
            <div className="info">
                <div className="user-logo">
                    <img className="user-logo_img" src="./assets//img//user-logo.png" alt="userLogo" />
                </div>
                <div className="user-desc">
                    <h4 className="hello">Hello</h4>
                    <span className="user-name">My Group</span>
                </div>
            </div>

            {/* <!-- search --> */}
            <div className="search">
                <div className="search-input">
                    <div><input className="search-text" type="text" placeholder="Search City..." /></div>
                    <button className="search_btn">
                        <i className="fa-solid fa-magnifying-glass search-icon"></i>
                    </button>
                </div>
                <i className="fa-regular fa-bell bell-icon"></i>
            </div>
        </header>

    )
}
export default Header