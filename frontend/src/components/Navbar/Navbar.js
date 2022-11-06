import { Link } from "react-router-dom"

import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to={"/"} className="navbar-link">Home</Link>
            <Link to={"/projects"} className="navbar-link">Projects</Link>
        </div>
    )
}

export default Navbar