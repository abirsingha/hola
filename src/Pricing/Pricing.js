import React from "react";
import { Link } from "react-router-dom";
import Header from "../UI/Header";
import PricingCard from "./PricingCard";
import payfastLogo from "../Assests/payfast-logo.png";
import Footer from "../UI/Footer";

const PRICING = [
  {
    sl: 1,
    description: "Access to Hola Business for 365 days.",
    class: "step-one",
    id: "p1"
  },
  {
    sl: 2,
    description: "Step-by-step tutorial to build your business plan.",
    class: "step-two",
    id: "p2"
  },
  {
    sl: 3,
    description: "7 x online modules, walking you through the business startup process.",
    class: "step-three",
    id: "p3"
  },
  {
    sl: 4,
    description: "The Hola Business Game, where you hone your skills in a realistic simulation.",
    class: "step-four",
    id: "p4"
  },
  {
    sl: 5,
    description: "All the essential technical, legal and administrative resources you need.",
    class: "step-five",
    id: "p5"
  },
  {
    sl: 6,
    description: "Useful case studies to show and guide you along the way.",
    class: "step-six",
    id: "p6"
  }
  
]

const priceList = PRICING.map((data) => (<PricingCard className={data.class} slno={data.sl} desc={data.description} key={data.id} />))

const Pricing = () => { 
  return (
    <>
      <Header />
      <div className="homeBanner pricing-banner">
            <div className="bannerOverlay pricing-overlay"></div>
            <div className="bannerInfo">
                <div className="container">
                    <div className="row no-gutters align-items-center">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <div className="bannerLeft pricing-left">
                                <h1>PRICING</h1>
                                <h2>Sign up to Hola Business<br/> today for just</h2>
                                <h3>R1 499</h3>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <div className="bannerRight pricing-right">
                                <ul>
                                    <li><span><i className="fas fa-check"></i></span>Registering is quick and easy</li>
                                    <li><span><i className="fas fa-check"></i></span>Secure, fast payment with PayFast</li>
                                    <li><span><i className="fas fa-check"></i></span>Get instant access to the dashboard</li>
                                    <li><span><i className="fas fa-check"></i></span>Guaranteed confidentiality of your business idea</li>
                                </ul>
                                <Link to="/">Start creating my Plan !</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bannerBtm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
					<path className="elementor-shape-fill" fill="3C91DA" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path>
				</svg>
            </div>
      </div>
      <div class="pricingInner">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
                <div class="pricingHead">
                    <h4>What you get:</h4>
                </div>
            </div>
          </div>
          <div className="row">
            {priceList}
          </div>
        </div>
      </div>
      <div className="pricingSignup">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <h5>Sign up today, for just R1 499</h5>
                    <Link to="/">Register now </Link>
                </div>
            </div>
        </div>
    </div>

    <div className="payfast">
        <img src={payfastLogo} className="img-fluid" alt="" />
      </div>
      <Footer />
    </>
  )
}

export default Pricing;
