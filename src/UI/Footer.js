import React from "react";
import { Link } from "react-router-dom";
import Logowhite from "../Assests/logo-white.png"

const Footer = () => { 
  return (
    <footer>
        <div className="topFooter">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-4">
                        <div className="footerLeft">
                          <img src={Logowhite} className="img-fluid" />
                            <p>
                                Hola Business is your step-by-step guid to building your proffessional business plan.
                                <Link to="/">Read more</Link>
                            </p>

                            <Link to="/" className="phone">(+27) 011 705 2545</Link>
                            <address>
                                Fourways Gold Park<br/>Roos Street, Fourways 2191
                            </address>
                            <p>Follow us:</p>
                            <ul>
                                <li>
                                    <Link to="/"><i className="fab fa-facebook"></i></Link>
                                </li>
                                <li>
                                    <Link to="/"><i className="fab fa-twitter"></i></Link>
                                </li>
                                <li>
                                    <Link to="/"><i className="fab fa-linkedin"></i></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-8">
                        <div className="footerRight">
                            <h4>Quick Links</h4>
                            <ul>
                                <li>
                                    <span><i className="fas fa-angle-right"></i></span><Link to="/">How To Start Your Own Business</Link>
                                </li>
                                <li>
                                    <span><i className="fas fa-angle-right"></i></span><Link to="/">Starting Your Own Business</Link>
                                </li>
                                <li>
                                    <span><i className="fas fa-angle-right"></i></span><Link to="/">How To Start My Own Business</Link>
                                </li>
                                <li>
                                    <span><i className="fas fa-angle-right"></i></span><Link to="/">How To Start Your Own Small Business</Link>
                                </li>
                                <li>
                                    <span><i className="fas fa-angle-right"></i></span><Link to="/">Starting Your Own Business In South Africa</Link>
                                </li>
                                <li>
                                    <span><i className="fas fa-angle-right"></i></span><Link to="/">How To Write A Business Plan</Link>
                                </li>
                                <li>
                                    <span><i className="fas fa-angle-right"></i></span><Link to="/">How To Write A Financial Business Plan</Link>
                                </li>
                                <li>
                                    <span><i className="fas fa-angle-right"></i></span><Link to="/">Business Plan Template</Link>
                                </li>
                                <li>
                                    <span><i className="fas fa-angle-right"></i></span><Link to="/">Steps To Starting Your Own Business</Link>
                                </li>
                                <li>
                                    <span><i className="fas fa-angle-right"></i></span><Link to="/">classNamees For Starting a Small Business</Link>
                                </li>
                                <li>
                                    <span><i className="fas fa-angle-right"></i></span><Link to="/">Courses To Help Start A Business</Link>
                                </li>
                                <li>
                                    <span><i className="fas fa-angle-right"></i></span><Link to="/">Financial Business Plan Template</Link>
                                </li>
                                <li>
                                    <span><i className="fas fa-angle-right"></i></span><Link to="/">How To Start Your Own Company</Link>
                                </li>
                                <li>
                                    <span><i className="fas fa-angle-right"></i></span><Link to="/">Financial Plan Template</Link>
                                </li>
                                <li>
                                    <span><i className="fas fa-angle-right"></i></span><Link to="/">How To Draft A Business Plan</Link>
                                </li>
                                <li>
                                    <span><i className="fas fa-angle-right"></i></span><Link to="/">How To Write a Business Plan Step By Step</Link>
                                </li>
                                <li>
                                    <span><i className="fas fa-angle-right"></i></span><Link to="/">Writing A Business Plan</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="btmFooter">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div className="copyright">
                            <p className="mb-0">
                                Copyright 2020 Hola Business. All Rights Reserved
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="otherLinks">
                            <ul className="mb-0">
                                <li><Link href="#">Privacy Policy</Link></li>
                                <li><Link href="#">Terms & Conditions</Link></li>
                                <li><Link href="#">Legal Notic</Link></li>
                                <li><Link href="#">Sitemap</Link></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;
