import React, { useRef } from "react";
import "./Navbar.css";
import logo from "./img/header-logo.svg";
import Button from "../props/Button";
const Navbar = ({ introdactionActives }) => {
  const ActiveNavbar = useRef();
  const HeaderNavbar = useRef();
  const ClickBars = () => {
    ActiveNavbar.current.classList.toggle("activ-navbar");
    introdactionActive();
  };

  return (
    <>
      <header ref={HeaderNavbar} className="Header-Navbars">
        <div className="container Header-Navbar">
          <div className="Navbar-img">
            <img className="fa-bounce" src={logo} alt="" />
          </div>
          <div ref={ActiveNavbar} className="Navbar-links">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Blog</a>
            <a href="">Services</a>
            <a href="">Contacts</a>
          </div>
          <div className="Navbar-btn">
            <Button documentwrite='Sing in'/>
          </div>
          <div className="Click-bars">
            <i onClick={ClickBars} className="fa-solid fa-bars"></i>
          </div>
        </div>
      </header>
      <div ref={ActiveNavbar} className="Navbar-links Navbar-display">
        <a href="">
          Home <i className="fa-solid fa-house "></i>
        </a>
        <a href="">
          About <i className="fa-solid fa-address-card "></i>
        </a>
        <a href="">
          Blog <i class="fa-solid fa-blog"></i>
        </a>
        <a href="">
          Services <i class="fa-brands fa-servicestack"></i>
        </a>
        <a href="">
          Contacts <i class="fa-solid fa-headphones"></i>
        </a>
      </div>
    </>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import "./Navbar.css";
// import logo from "./img/header-logo.svg";

// const Navbar = () => {
//   const [isNavbarActive, setIsNavbarActive] = useState(false);

//   const handleNavbarToggle = () => {
//     setIsNavbarActive(!isNavbarActive);
//   };

//   return (
//     <header className="Header-Navbars">
//       <div className="container Header-Navbar">
//         <div className="Navbar-img">
//           <img src={logo} alt="" />
//         </div>
//         <div className={`Navbar-links ${isNavbarActive ? 'activ-navbar' : ''}`}>
//           <i className="fa-solid fa-x"></i>
//           <a href="">Home</a>
//           <a href="">About</a>
//           <a href="">Blog</a>
//           <a href="">Services</a>
//           <a href="">Contacts</a>
//         </div>
//         <div className="Navbar-btn">
//           <button>Sign-in</button>
//         </div>
//         <div className="Click-bars" onClick={handleNavbarToggle}>
//           <i className="fa-solid fa-bars"></i>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
