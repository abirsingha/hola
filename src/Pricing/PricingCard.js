import React from "react";

const PricingCard = (props) => { 
  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <div className={`pricingInfo ${props.className}`}>
          <div className="step">{props.slno}</div>
          <div className="pricingText">
            <p>{props.desc}</p>
          </div>
      </div>
    </div>
  )
}

export default PricingCard;

