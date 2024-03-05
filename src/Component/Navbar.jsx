import React from 'react'
import { Link , NavLink} from 'react-router-dom'
import './Navbar.css'
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/' >Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
                        <li className="nav-item me-2 mb-lg-0">
                            <Link className='nav-link text-decoration-none' to="/SignIn">SignIn</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link text-primary text-decoration-underline' to="/SignUp">SignUp?</Link>
                        </li>
                    </ul>


                </div>
            </div>
        </nav>

    )
}

export default Navbar