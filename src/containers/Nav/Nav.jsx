import "./Nav.scss"
import logo from "../../data/images/logo.webp"
import profile from "../../data/images/profile.jpeg"
const Nav = (props) => {

    return (
        <div className="nav">
            <div className="nav__logo">
                <img src = {logo} alt = "logo" />
                <h1>Relay<span className="nav__logo__io">.io</span></h1>
            </div>
            <div className="nav__profile">
                <img src= {profile} alt = "profile picture" />
                .
            </div>
        </div>
    )
}

export default Nav;