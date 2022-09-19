import React from "react";
import Header from "../UI/Header";
import Banner from "../UI/Banner";
import BusinessSteps from "./BusinessSteps";
import { Link } from "react-router-dom";
import bannerimg from "../Assests/about-character.png";
import icon1 from "../Assests/icon-1.png";
import icon2 from "../Assests/icon-2.png";
import founderimg from "../Assests/founder.png";
import GetInTouch from "../UI/GetInTouch";
import Footer from "../UI/Footer";

const STEPS = [
  {
    icon: icon1,
    heading: "1 x Complete Start-Up Business Course",
    desc: "7 in-depth business modules, tailored for the entrepreneur needing to gain knowledge in how start a successful business.",
    class: "step-1",
    id: "s1"
  },
  {
    icon: icon2,
    heading: "Create your Customised Business Plan",
    desc: "As you work through the questions in each module, Holla Business will automatically generate your professional, ready-to-use business plan.",
    class: "step-2",
    id: "s2"
  },
  {
    icon: icon2,
    heading: "Create your Customised Financial Plan",
    desc: "Working through the Financials sections of the course will automatically generate a detailed financial plan for your business.",
    class: "step-3",
    id: "s3"
  },
  {
    icon: icon2,
    heading: "Practice Business Simulations",
    desc: "Put your new business skills to the test in a realistic business simulation, and see if you can get Frosty’s Ice Cream a tasty annual profit.",
    class: "step-4",
    id: "s4"
  },
  {
    icon: icon2,
    heading: "Your Vision & Mission",
    desc: "These important principles help keep you focussed. Hola Business will help you craft an effective vision and mission.",
    class: "step-5",
    id: "s5"
  },
  {
    icon: icon2,
    heading: "Essential Resources",
    desc: "All the important technical, tax, legal stuff and more, collected for you in 1 place.",
    class: "step-6",
    id: "s6"
  }
]

const stepList = STEPS.map((step) => (<BusinessSteps src={step.icon} heading={step.heading} desc={step.desc} class={step.class} key={step.id} />))


const WhatIsHolaBusiness = () => { 
  return (
    <>
      <Header />
      <Banner bannerclass="whatBanner" overlayclass="whatBannerOverlay" heading="Do you have a great business idea, but not sure where to start?" desc="Hola Business is your essential business starter pack. Through this unique online platform, you’ll learn how to get your business off the ground, while formulating your business and financial plans at the same time." src={bannerimg} fillclass="what-elementor-shape-fill" />
      <div className="holaBusiness">
          <div className="container">
              <div className="row">
                  <div className="col-12 col-sm-12 col-md-12">
                      <div className="holaHeading">
                          <p>
                              Here’s what you get when you sign up with
                          </p>
                          <h2>Hola Business:</h2>
                      </div>
                  </div>
              </div>
              <div className="row">
                {stepList}
              </div>
          </div>
      </div>
      <div className="slogan">
          <div className="container">
              <div className="row">
                  <div className="col-sm-12">
                      <div className="sloganCont">
                          <h2>Hola Business is your essential business starter pack, for anyone looking to start a business for the first time, or just improve your business knowledge.</h2>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="founderSec">
          <div className="container">
              <div className="row">
                  <div className="col-12 col-sm-12">
                      <div className="founderHead">
                          <h2>Why <span>you need</span> Hola Business<br/>A message from the founder:</h2>
                      </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-sm-12 col-md-6">
                      <div className="founderImg">
                        <img src={founderimg} className="img-fluid" alt="" />
                      </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                      <div className="founderTalk">
                          <p>
                              “Hi! I’m Matt Johnson, the founder of Hola Business. You’re probably here because you’ve got a good business idea, and you’re looking for help in turning it into reality. You probably do have a good idea; that’s not why most businesses fail. Most of the
                              time, businesses fail not because of a bad business idea, but because of a lack of realistic, accurate planning and business strategy. I’m here to help ensure you don’t go there.
                          </p>
                          <p>
                              This is how Hola Business can help you. Through this unique online platform, you’ll learn and apply the essential skills you need to run a successful business, and get a professional, fully customised business and financial plan that’s ready to present
                              to potential investors. Hola Business is much more than just a course; it’s your complete business starter pack
                          </p>
                          <p>
                              The world of business can be very challenging – but even more rewarding. Through our innovative new platform, I’d like to help <span>you</span> start <span>your business</span> and reach your goals.”
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="findOutMore">
          <div className="findOutMoreOverlay"></div>
          <div className="container">
              <div className="row">
                  <div className="col-12 col-sm-12 col-md-12">
                      <div className="findCont">
                          <h3>For just R850, you’ll develop the critical knowledge and know-how you need to run a successful start up business.</h3>
                          <Link to="/" className="findoutmore">Find out more</Link>
                          <p>
                              Your membership is valid for 1 year and can be renewed.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="howitworksThired">
          <div className="container">
              <div className="row">
                  <div className="col-12 col-sm-12 col-md-12">
                      <div className="btmHeading">
                          <h1>All of this for just R850, once off, valid for 1 year.</h1>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <GetInTouch id="what-getInTouch" overlayclass="what-getInTouchOverlay" formid="whatis-getInTouch" />
      <Footer/>
    </>
  )
}


export default WhatIsHolaBusiness;