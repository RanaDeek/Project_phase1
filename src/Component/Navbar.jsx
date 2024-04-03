import React, { useContext, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import './Navbar.css'
import pic from "../assets/1.png"
import { UserContext } from '../Context/User'
import { BiSolidSun } from "react-icons/bi";
import { BsMoon } from "react-icons/bs";

function Navbar() {
    const { userName, setUserToken, setUserName } = useContext(UserContext); // Get the value from context
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('usertoken');
        setUserToken(null);
        setUserName(null);
        navigate('/SignIn');
    }
    const [isClicked, setIsClicked] = useState(false)
    const [mode, setMode] = useState('light');
    const toggleMode = () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
        const body = document.body;
        body.classList.toggle('dark');
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <img src={pic} alt="Logo" className="image" />
                <div className='row'>
                    <Link className="navbar_name" to='/' >Deek's Shop</Link>
                    <h5>Welcome {userName} </h5>
                </div>

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
                    <div className={mode === 'dark' ? 'dark' : ''}>
                        <button className="dark-mode-btn click" onClick={toggleMode}>
                            {mode === 'dark' ? <BsMoon className='mode' /> : <BiSolidSun className='mode' />}
                        </button>
                    </div>
                    {
                        userName ?
                            <>
                                <ul className="d-flex list-unstyled ">
                                    <li className="nav-item">
                                        <NavLink className="nav-link logout" onClick={logout}>LogOut</NavLink>
                                    </li>
                                </ul>

                            </>
                            :
                            <>
                                <ul className="d-flex list-unstyled">

                                    <li className="nav-item1">
                                        <Link className='nav-link1' to="/SignIn">Sign In</Link>
                                    </li>
                                    <li className="nav-item1">

                                        <Link className='nav-link1 text-white' to="/SignUp">Sign Up?</Link>
                                    </li>
                                </ul>
                            </>
                    }

                </div>
            </div>
        </nav>

    )
}

export default Navbar