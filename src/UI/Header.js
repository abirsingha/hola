import React, {useState, useRef, useEffect} from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../Assests/logo.png";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    const node = useRef();
    const clickOutside = (e) => { 
        if (node.current.contains(e.target)) { 
            setIsOpen(isOpen);
            return;
        }
        setIsOpen(false);
    }
    useEffect(() => {
        document.addEventListener('click', clickOutside);
        return () => {
        document.removeEventListener('click', clickOutside);
        }
    }, [clickOutside]);


  return (
    <header className="">
        <div className="container">
            <div className="row d-flex align-items-center no-gutters">
                <div className="col-3 col-sm-4 col-md-4 col-lg-2 col-xl-2 order-1 order-sm-1 order-md-1 order-lg-1 order-xl-1">
                    <div className="logo">
                      <Link to="/"><img src={Logo} className="img-fluid" alt="Hola" /></Link>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-7 order-3 order-sm-3 order-md-3 order-lg-2 order-xl-2">
                    <div className="siteNavigation">
                        <nav className="navbar navbar-expand-xl">
                            <button className="navbar-toggler menuIconBtn" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                              <div className="menuIcon" ref={node} onClick={toggleMenu}><span></span><span></span><span></span></div>
                            </button>

                            <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navigation">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                          <NavLink className="nav-link"  to="/what-is-hola-business">What is hola business</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/how-it-works">How It Works</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/pricing">Pricing</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="col-7 col-sm-8 col-md-7 col-lg-4 col-xl-3 order-2 order-sm-2 order-md-2 order-lg-3 order-xl-3 text-right">
                    <div className="loginBtnArea">
                        <ul className="mb-0">
                            <li><a href="https://hola-admin.web.app" rel="noreferrer" target="_blank" className="login">Login</a></li>
                            <li><a href="https://hola-admin.web.app" target="_blank" rel="noreferrer" className="">Sign Up</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header;
