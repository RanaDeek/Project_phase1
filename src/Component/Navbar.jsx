import React from 'react'
import { Link , NavLink} from 'react-router-dom'
import './Navbar.css'
import pic from "../assets/1.png"
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <img src={pic} alt="Logo" className="image" />
                <Link className="navbar_name" to='/' >Fashion Shop</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Products">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Categories">Categories</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Cart">Cart</NavLink>
                        </li>

                    </ul>
                    <ul className="d-flex list-unstyled">
                        <li className="nav-item1">
                            <Link className='nav-link text-decoration-none' to="/SignIn">SignIn</Link>
                        </li>
                        <li className="nav-item1">
                            <Link className='nav-link text-decoration-underline' to="/SignUp">SignUp?</Link>
                        </li>
                    </ul>


                </div>
            </div>
        </nav>

    )
}

export default Navbar