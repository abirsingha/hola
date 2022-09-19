import React from "react";

const AboutCard = (props) => { 
  return (
    <div className="col-12 col-sm-12 col-md-12 col-lg-4">
      <div className={`aboutCont ${props.class}`}>
          <div className="aboutImg">
            <img src={props.src} className="img-fluid" alt="" />
          </div>
          <div className="aboutBody">
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
          </div>
      </div>
    </div>
  )
}

export default AboutCard;
