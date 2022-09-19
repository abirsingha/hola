import React from "react";

const TeamMembers = (props) => { 
  return (
    <div className="row mt-5 align-items-center">
      <div className="col-12 col-sm-12 col-md-3">
          <div className="directorImg">
          <img src={props.photo} className="img-fluid" alt="" />
          </div>
      </div>
      <div className="col-12 col-sm-12 col-md-9">
          <div className="directorCont">
            <h4>{props.name}</h4>
            <p>{props.about}</p>
          </div>
      </div>
    </div>
  )
}

export default TeamMembers;
