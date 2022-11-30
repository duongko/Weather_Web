import { useState } from "react"
import "react-icons/fa"
import { FaSearch } from "react-icons/fa"

const Header = (props) => {

    const { setcityname } = props

    const [citysearch, setcitysearch] = useState('')

    const handleSearch = (event) => {
        setcitysearch(event.target.value)



    }

    const hanldeSubmitSearch = (event) => {
        setcityname(citysearch)
        setcitysearch('')



    }

    return (

        <header className="header">
            {/* <!-- info --> */}
            <div className="info">
                <div className="user-logo">
                    <img className="user-logo_img" src="https://mblan1.github.io/weatherApp/assets//img//user-logo.png" alt="userLogo" style={{ "width": "81px" }} />
                </div>
                <div className="user-desc">
                    <h4 className="hello">Hello</h4>
                    <span className="user-name">My Group</span>
                </div>
            </div>

            {/* <!-- search --> */}
            <div className="search">
                <div className="search-input">
                    <div><input className="search-text" type="text" placeholder="Search City..." value={citysearch} onChange={(event) => { handleSearch(event) }} /></div>
                    <button className="search_btn"
                        onClick={() => { hanldeSubmitSearch() }}
                    >
                        <i className="fa-solid fa-magnifying-glass search-icon"><FaSearch /></i>

                    </button>
                </div>
                <i className="fa-regular fa-bell bell-icon"></i>
            </div>
        </header>

    )
}
export default Header