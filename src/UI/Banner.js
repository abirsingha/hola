import React from "react";

const Banner = (props) => { 
  return (
      <div className={props.bannerclass}>
          <div className={props.overlayclass}></div>
          <div className="bannerInfo">
              <div className="container">
                  <div className="row no-gutters">
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                          <div className="bannerLeft">
                              <h1 className="home-heading">{props.heading}</h1>
                              <p>{props.desc}</p>
                          </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                          <div className="bannerRight">
                            <img src={props.src} className="img-fluid" alt="" />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="bannerBtm">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                <path className={props.fillclass} d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path>
            </svg>
        </div>
    </div>
  )
}

export default Banner;