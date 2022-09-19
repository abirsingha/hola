import React from "react";
import { Link } from "react-router-dom";
import Header from "../UI/Header";
import Banner from "../UI/Banner";
import bannerimg from "../Assests/about-2-character.png";
import img1 from "../Assests/how-it-1.png";
import img2 from "../Assests/how-it-2.png";
import GetInTouch from "../UI/GetInTouch";
import Footer from "../UI/Footer";

const HowItWorks = () => { 
  return (
    <>
      <Header />
      <Banner bannerclass="aboutBanner" overlayclass="aboutBannerOverlay" src={bannerimg} heading="About Hola Business" desc="Hola Business is an innovative new online platform designed to provide the tools you need to start your business and achieve the success you dream of." fillclass="about-elementor-shape-fill" />
      <div className="howItWorksHead">
        <div className="container">
            <div className="row mb-4">
                <div className="col-12 col-sm-12 col-md-12">
                    <div className="worksHead">
                        <h5>Here’s how it works:</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="howitworksWrap">
        <div className="container">
            <div className="row no-gutters">
                <div className="col-11 col-sm-11 col-md-5 offset-1 offset-sm-1 offset-md-0 order-2 order-md-1 order-lg-1">
                    <div className="howitworksImg">
                      <img src={img1} className="img-fluid" alt="" />
                    </div>
                </div>
                <div className="col-1 col-sm-1 col-md-2 order-1 order-md-2 order-lg-2">
                    <div className="deviderWrap">
                        <h5>1</h5>
                    </div>
                </div>
                <div className="col-11 col-sm-11 col-md-5 offset-1 offset-sm-1 offset-md-0 order-3 order-md-3 order-lg-3">
                    <div className="howitworksCont">
                        <h4>Step One</h4>
                        <p>
                            Once you are registered, you’ll be directed to the Hola Business Learning Centre.
                        </p>
                        <p>
                            This will be the main dashboard where you can begin new course modules, manage the completed sections of your business plan, access essential resources and more.
                        </p>
                        <Link to="/">Register Now</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="howitworksWrap">
        <div className="container">
            <div className="row no-gutters">
                <div className="col-11 col-sm-11 col-md-5 offset-1 offset-sm-1 offset-md-0 order-3 order-md-1">
                    <div className="howitworksCont">
                        <h4>Step Two</h4>
                        <p>
                            Start by taking the course. Through 7 interactive modules developed by leading South African entrepreneurs, you’ll learn how to start your business.
                        </p>
                    </div>
                </div>
                <div className="col-1 col-sm-1 col-md-2 order-1 order-md-2 order-lg-2 order-md-2">
                    <div className="deviderWrap">
                        <h5>2</h5>
                    </div>
                </div>
                <div className="col-11 col-sm-11 col-md-5 offset-1 offset-sm-1 offset-md-0 order-1 order-md-3">
                    <div className="howitworksImg">
                      <img src={img2} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="howitworksWrap">
        <div className="container">
            <div className="row no-gutters">
                <div className="col-11 col-sm-11 col-md-5 offset-1 offset-sm-1 offset-md-0 order-2 order-md-1 order-lg-1">
                    <div className="howitworksImg">
                      <img src={img1} className="img-fluid" alt="" />
                    </div>
                </div>
                <div className="col-1 col-sm-1 col-md-2 order-1 order-md-2 order-lg-2">
                    <div className="deviderWrap">
                        <h5>3</h5>
                    </div>
                </div>
                <div className="col-11 col-sm-11 offset-1 col-md-5 offset-1 offset-sm-1 offset-md-0 order-3 order-md-3 order-lg-3">
                    <div className="howitworksCont">
                        <h4>Step Three</h4>
                        <p>
                            Once you are registered, you’ll be directed to the Hola Business Learning Centre.
                        </p>
                        <p>
                            This will be the main dashboard where you can begin new course modules, manage the completed sections of your business plan, access essential resources and more.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="btmHeading">
                        <h1>All of this for just R850, once off, valid for 1 year.</h1>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <GetInTouch id="aboutGetInTouch" overlayclass="aboutgetInTouchOverlay" formid="aboutGetInTouchCont"/>
      <Footer />
    </>
  )
}

export default HowItWorks;