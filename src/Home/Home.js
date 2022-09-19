import React from "react";
import { Link } from "react-router-dom";
import Header from "../UI/Header";
import Banner from "../UI/Banner";
import AboutCard from "./AboutCard";
import bannerimage from "../Assests/home-character.png";
import image1 from "../Assests/about-1.jpg";
import image2 from "../Assests/about-2.jpg";
import image3 from "../Assests/about-3.jpg";
import helpimg from "../Assests/help.jpg"
import startimg from "../Assests/startimg.png";
import CourseCard from "./CourseCard";
import ContentWithImageRight from "./ContentWithImageRight";
import businessplan from "../Assests/business-plan.jpg";
import ContentWithImageLeft from "./ContentWithImageLeft";
import businessskills from "../Assests/business-skills.jpg";
import TeamMembers from "./TeamMembers";
import team1 from "../Assests/matt-johnston.jpg";
import team2 from "../Assests/megan-stark.jpg";
import GetInTouch from "../UI/GetInTouch";
import Footer from "../UI/Footer";

const ABOUTCONT = [
  {
    title: "Learn what you need to make your business successful",
    description: "Learn and build your business plan at the same time! Hola Business is a 3-part online platform and tool that helps you transform your idea into a successful business model.",
    image: image1,
    id: "a1",
    class: "cont-1"
  },
  {
    title: "Build your own business plan as you learn​",
    description: "Your business plan is the blueprint of your success. As you learn the ins-and-outs of starting a business, you’ll build your business and financial plan as you go.",
    image: image2,
    id: "a2",
    class: "cont-2"
  },
  {
    title: "Practice running a business through a simulator​​",
    description: "Put your skills to the test in unique simulated business environments, to prepare yourself for the real world of business.",
    image: image3,
    id: "a3",
    class: "cont-3"
  }
]
const COURSECONT = [
  {
    slno: 1,
    hours: "1 hr 30 min",
    title: "Business Cycles",
    description: "Learn about the challenges you’ll face in your business journey, and how to solve them.",
    class: "course-1",
    id: "c1"
  },
  {
    slno: 2,
    hours: "1 hr 30 min",
    title: "Business Planning",
    description: "Start laying out the groundwork for your business with research, planning & forecasting.",
    class: "course-2",
    id: "c2"
  },
  {
    slno: 3,
    hours: "1 hr 30 min",
    title: "Setting Up Your Business",
    description: "Set up and register your business correctly. Here¹s what you need to know.",
    class: "course-3",
    id: "c3"
  },
  {
    slno: 4,
    hours: "1 hr 30 min",
    title: "Understanding Costs",
    description: "Gain a detailed understanding of your day-to-day costs and how they impact your strategy.",
    class: "course-4",
    id: "c4"
  },
  {
    slno: 5,
    hours: "1 hr 30 min",
    title: "Pricing for Profit",
    description: "Learn about the challenges you’ll face in your business journey, and how to solve them.",
    class: "course-5",
    id: "c5"
  },
  {
    slno: 6,
    hours: "1 hr 30 min",
    title: "Financial Scorecard",
    description: "Learn about the challenges you’ll face in your business journey, and how to solve them.",
    class: "course-6",
    id: "c6"
  },
  {
    slno: 7,
    hours: "1 hr 30 min",
    title: "Managing Working Capital",
    description: "Learn about the challenges you’ll face in your business journey, and how to solve them.",
    class: "course-7",
    id: "c7"
  }
]

const aboutList = ABOUTCONT.map((about) => (<AboutCard class={about.class} src={about.image} title={about.title} desc={about.description} key={about.id} />))

const courseList = COURSECONT.map((course) => (<CourseCard sl={course.slno} hours={course.hours} title={course.title} desc={course.description} key={course.id} class={course.class} />))

const Home = () => { 
  return (
    <>
      <Header />
      <main>
      <Banner bannerclass="homeBanner" overlayclass="bannerOverlay" heading="LOOKING TO START A BUSINESS?" desc="Hola Business shows you how. We provide you with the business knowledge you need to succeed." src={bannerimage} fillclass="elementor-shape-fill" />
      <div className="aboutSec">
          <div className="container">
              <div className="row">
                  <div className="col-12 col-sm-12 col-md-10 offset-md-1">
                      <div className="aboutHead">
                          <h2>What is Hola Business?</h2>
                          <p>
                              Learn and build your business plan at the same time! Hola Business is a <strong>3-part online platform</strong> and tool that helps you <strong>transform your idea into a successful business model.</strong>
                          </p>
                      </div>
                  </div>
              </div>
              <div className="row">
                  {aboutList}
              </div>
          </div>
      </div>
      <div className="businessSec">
          <div className="container">
              <div className="row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                      <div className="businessLeft">
                          <h4>How can Hola Business <span>help you?</span></h4>
                          <ul>
                              <li><span><i className="fas fa-check"></i></span> Hola Business is geared towards bringing your business to life, dynamically developing your business model and plan</li>
                              <li><span><i className="fas fa-check"></i></span> Work through and solve the practical challenges of starting a business, ensuring you are prepared for the real world of business
                              </li>
                              <li><span><i className="fas fa-check"></i></span> Your business plan will be ready to present to potential investors when you finish the course</li>
                              <li><span><i className="fas fa-check"></i></span> Hola Business is brought to you by instructors with over xx years’ experience business training</li>
                          </ul>
                      </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                      <div className="businessRight">
                        <img src={helpimg} className="img-fluid" alt="" />
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="kickstartSec">
          <div className="kickstartsOverlay"></div>
          <div className="container">
              <div className="row align-items-end">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-4 order-2 order-lg-1 order-xl-1">
                      <div className="kickImg">
                        <img src={startimg} className="img-fluid" alt="" />
                      </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-8 order-1 order-lg-2 oder-xl-2">
                      <div className="kickstartCont">
                          <h4>Get all the tools you need to kickstart your business, for just <span>R850</span>.</h4>
                          <h5>What’s included in the package?</h5>
                          <ul>
                              <li><span><i className="fas fa-check"></i></span> E-learning (7 x online modules)</li>
                              <li><span><i className="fas fa-check"></i></span> A business and financial plan you can present to your bank or other investors</li>
                              <li><span><i className="fas fa-check"></i></span> Accurately develop your vision and mission
                              </li>
                              <li><span><i className="fas fa-check"></i></span> Define your personal and business goals
                              </li>
                              <li><span><i className="fas fa-check"></i></span> Business simulations</li>
                          </ul>
                          <Link to="/">Find out more</Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="courseSec">
          <div className="container">
              <div className="row">
                  <div className="col-12 col-sm-12 col-md-12">
                      <div className="courseHead">
                          <h5>Course Contents</h5>
                          <p>
                              We’ll teach you how to get your business up and running through 7 interactive, in-depth modules:
                          </p>
                      </div>
                  </div>
              </div>
              <div className="row no-gutters">
                  {courseList}
                  <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                      <div className="courseCont course-8">
                          <div className="courseBody">
                              <h2>Estimated time to complete this course</h2>
                              <div className="courseFooter">
                                  <h4>Total</h4>
                                  <h5>12 hr 30 min</h5>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="businessPlan">
          <ContentWithImageRight title="Your Business Plan" subtitle="Ensure you’ve got everything covered in your business and financial plan" desc="Hola Business isn’t just another business and financial plan template site. Instead, as you complete each exercise during the course, your business plan will be created automatically. You’ll get a professional, comprehensive and achievable business plan, providing a roadmap to your business success." src={businessplan} />
        </div>
        <div className="businessSkill">
          <ContentWithImageLeft title="Test Your Business Skills" subtitle="Demo your business skills in our business simulator" desc="In business, you’ll constantly face new challenges and hurdles. The way you deal with them has short- and long-term effects on your business profitability. Put your skills to the test with our intelligent business simulator!" src={businessskills} />
        </div>
        <div className="slogan">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="sloganCont">
                            <h2>Hola Business is South Africa’s only online tool providing a business course, business plan development and business simulations in one complete package!</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="directorsSec">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12">
                        <div className="directorsHeading">
                            <h3>
                                Hola Business is brought to you by:
                            </h3>
                        </div>
                    </div>
                </div>
              <TeamMembers photo={team1} name="Matt Johnston" about="Matt has helped hundreds of employees across South Africa improve their business and entrepreneurship skills. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
              <TeamMembers photo={team2} name="Megan Stark" about="Megan has helped hundreds of employees across South Africa improve their business and entrepreneurship skills. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
            </div>
        </div>
        <GetInTouch overlayclass="getInTouchOverlay" />
        <Footer />
      </main>
    </>
  )
  
}

export default Home;