import React from "react";
import { Link } from "react-router-dom";
import Footer from "../UI/Footer";
import Header from "../UI/Header";

const Contact = () => { 
  return (
    <>
    <Header />
    <div className="contactWrap">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-7">
                    <div className="contactLeft">
                        <h1>Contact Us</h1>
                        <h2>Have A Question For Us? Get In Touch Here !</h2>
                        <ul>
                            <li><Link to="/"><i className="fas fa-phone-alt"></i> 011 705 2454</Link></li>
                            <li><Link to="/"><i className="far fa-envelope"></i> info@holabusiness.co.za</Link></li>
                        </ul>
                        <address>
                            <span><i className="fas fa-map-marker-alt"></i></span>
                            Fourways gold park<br/>
                            Building 10 (Royal Troone)<br/>
                            Roos Street<br/>
                            Fourways, 2191<br/>
                            Gauteng, South Africa<br/>
                        </address>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-5">
                    <div className="contactRight">
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" placeholder="Message"></textarea>
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Send message" className="btn btn-contact" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
    </>
    
  )
}

export default Contact;