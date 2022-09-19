import React from "react";

const ContentWithImageLeft = (props) => { 
  return (
    <div className="container">
        <div className="row align-items-center no-gutters">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 order-2 order-lg-1 order-xl-1">
                <div className="bisunessSkillImg">
                  <img src={props.src} className="img-fluid" alt="" />
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 order-1 order-lg-2 order-xl-2">
                <div className="bisunessSkillCont">
                    <h3>{props.title}</h3>
                    <h4>{props.subtitle}</h4>
                    <p>{props.desc}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContentWithImageLeft;
