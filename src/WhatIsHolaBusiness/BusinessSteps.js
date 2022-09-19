import React from "react";

const BusinessSteps = (props) => { 
  return (
    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
        <div className={`businessWrap ${props.class}`}>
            <div className="businessWrapHead">
              <img src={props.src} className="img-fluid" alt="" />
            </div>
            <div className="businessWrapBody">
                <h3>{props.heading}</h3>
                <p>{props.desc}</p>
            </div>
        </div>
    </div>
  )
}

export default BusinessSteps
