import React from "react";
import "./Apply.css";
import apply from "./img/apply.svg";
import Button from "../props/Button";
const Apply = () => {
  return (
    <div className="Apply">
      
        <div className="row">
          <div className="apply-left col-12 col-lg-6">
            <img src={apply} alt="" />
          </div>
          <div className="apply-right col-12 col-lg-6">
            <h1>
              Apply AI, Deep Learning <br /> and Data Sciece to solve
            </h1>
            <small>
              Lorem ipsum is placeholder text commonly used in the
              <br />
              graphic, print, and publishing industries for previewing
              <br />
              layouts and visual mockups.
            </small>
            <div className="apply-left-btn">
             <Button documentwrite='Learn More'/>
            </div>
          </div>
        </div>
     
    </div>
  );
};

export default Apply;
