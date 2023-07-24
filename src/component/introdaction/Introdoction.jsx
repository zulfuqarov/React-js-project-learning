import React, { useRef} from "react";
import "./Introdocution.css";
import introrightimg from "./img/intro-right.svg";
import Button from "../props/Button";
// import Companie from "./companie";
import Swipercompanent from "./swipercompanent";


const Introdoction = ({ introdactionActives }) => {
  const IntrodactionHeader = useRef();
  const introdactionActive = () => {
    IntrodactionHeader.current.style.marginTop = "270px";
  };
  return (
    <div className="Introdaction-color">
      <header ref={IntrodactionHeader} className="container Introdaction">
        <div className="row">
          <div className="col-12 col-lg-6 ntrodaction-left">
            <span>Next genaretion platform</span>
            <h1>
              Artificial intelligence <br /> & Syber security
            </h1>
            <small>
              Lorem ipsum is placeholder text commonly used in the graphic,{" "}
              <br />
              print, and publishing industries for previewing layouts and <br />
              br visual mockups.
            </small>
            <div className="Introdaction-left-btn">
              <Button documentwrite="Get started" />
              <Button documentwrite="Watch video" />
            </div>
          </div>
          <div className="col-12 col-lg-6 Introdaction-right">
            <img src={introrightimg} alt="" />
          </div>
        </div>
      </header>
      <section className="companies">
        <Swipercompanent/>      
      </section>
    </div>
  );
};

export default Introdoction;
