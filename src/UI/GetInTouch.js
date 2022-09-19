import React from "react";

const GetInTouch = (props) => {
  return (
      <div className="getInTouch" id={props.id}>
          <div className={props.overlayclass}></div>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-12 col-sm-12 col-md-6">
                    <div className="getInTouchSlogan">
                        <h3>Got a great business idea? Take the next step!</h3>
                        <p>
                            Get all the tools you need to kickstart your business, for just R850.
                        </p>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6">
                      <div className="getInTouchForm" id={props.formid}>
                        <h3>Get in touch with Hola Business!</h3>
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" placeholder="Message"></textarea>
                            </div>
                            <div className="form-group">
                                <input type="submit" value="sign up today !" className="signuptoday" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GetInTouch;
