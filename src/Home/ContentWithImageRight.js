import React from "react";

const ContentWithImageRight = (props) => {
  return (
    <div className="container">
        <div className="row align-items-center no-gutters">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                <div className="bisunessPlanCont">
                    <h3>{props.title}</h3>
                    <h4>{props.subtitle}</h4>
                    <p>{props.desc}</p>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                <div className="bisunessPlanImg">
                  <img src={props.src} className="img-fluid" alt="" />
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default ContentWithImageRight;
