import React from "react";

const CourseCard = (props) => { 
  return (
    <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
      <div className={`courseCont ${props.class}`}>
            <div className="courseTop">
                <div className="courseNum">
                  <h6>{props.sl}</h6>
                </div>
                <div className="courseTime">
                  <h6>{props.hours}</h6>
                </div>
            </div>
            <div className="courseBody">
                <h4>{props.title}</h4>
                <p>{props.desc}</p>
            </div>
        </div>
    </div>
  )
}

export default CourseCard
