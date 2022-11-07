import "./Nav.scss"
import logo from "../../data/images/logo.webp"
const Nav = (props) => {

    return (
        <div className="nav">
            <div className="nav__logo">
                <img src = {logo} alt = "logo" />
                <h1>Relay<span className="nav__logo__io">.io</span></h1>
            </div>
            <div className="nav__profile">
                TEST
            </div>
        </div>
    )
}

export default Nav;