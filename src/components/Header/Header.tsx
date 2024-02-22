import React, { useState } from "react";
import CompanyLogo from "../../assets/svg/company-logo.svg";
import Globe from "../../assets/svg/globe.svg";
import User from "../../assets/svg/user.svg";
import Corporates from "../../assets/svg/corporates.svg";
import RealEstate from "../../assets/svg/realEstate.svg";
import Manufacturing from "../../assets/svg/manufacturing.svg";
import Energy from "../../assets/svg/energy.svg";
import Reporting from "../../assets/svg/reporting.svg";
import ClimateScenario from "../../assets/svg/climatescenario.svg";
import CarbonBonds from "../../assets/svg/carbonBonds.svg";
import Benchmarking from "../../assets/svg/benchmarking.svg";
import ArrowDown from "../../assets/svg/arrow-down.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UserProfile from "../UserProfile/UserProfile";
import "./Header.scss";
import { useDispatch } from "react-redux";
import { logoutDetails } from "../../redux/slice/userAuthSlice/Login/userLoginSlice";
import { AppDispatch } from "../../redux/store";

const Header = ({userName}:{userName:string}) => {
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const path = location.pathname;
  const AuthHeader = [
    "/login",
    "/signup",
    "/accountverify",
    "/changepassword",
    "/resetpassword",
  ];
  const [userProfileDropdown, setUserProfileDropdown] = useState(false);
  const navigate= useNavigate();
  const handleProfileLogout = () => {
    localStorage.clear();
    dispatch(logoutDetails(null)).then((result: any) => {
      navigate("/login");
    });
  };
  const emails:string|null=localStorage.getItem("email");
  const randomColor:any=localStorage.getItem("randomcolor");
  const handleProfileClick = () => {
    setUserProfileDropdown(!userProfileDropdown);
  };
  const handleRequestDemo = () =>{
      document.cookie = 'myCookie=cookieValue; path=/; domain=semarketplace.localhost; SameSite=None;Secure';
  }
  // const randomColor = () => {
  //   const letters = '0123456789ABCDEF';
  //   let color = '#';
  //   for (let i = 0; i < 6; i++) {
  //     color += letters[Math.floor(Math.random() * 16)];
  //   }
  //   return color;
  // };
  console.log("oyueoyeoyeoyeoyeoyeoye",userName);
  return (
    <>
      {!AuthHeader.includes(path) ? (
        <div className="header-container">
          <div className="left-container">
            <img src={CompanyLogo} alt="sustainabilty economics" />
            <div className="tagline">Build your platform</div>
            <div className="product-dropdown">
              <span>
                Products <img className="drop-down" src={ArrowDown} alt="x" />
              </span>
              <div className="product-content">
                <div className="product-list">
                  <li>
                    <Link className="link" to="/login">
                      <img src={Energy} alt="Transition Financing" /> Transition
                      Financing
                    </Link>
                  </li>
                  <li>
                    <Link className="link" to="/login">
                      <img src={Reporting} alt="Reporting" /> Reporting
                    </Link>
                  </li>
                  <li>
                    <Link className="link" to="/login">
                      <img
                        src={ClimateScenario}
                        alt="Climate Scenario Analysis"
                      />
                      Climate Scenario Analysis
                    </Link>
                  </li>
                  <li>
                    <Link className="link" to="/login">
                      <img src={CarbonBonds} alt="Carbon Bonds" />
                      Carbon Bonds
                    </Link>
                  </li>
                  <li>
                    <Link className="link" to="/login">
                      <img src={RealEstate} alt="Target Setting" />
                      Target Setting
                    </Link>
                  </li>
                  <li>
                    <Link className="link" to="/login">
                      <img src={Benchmarking} alt="Benchmarking" />
                      Benchmarking
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </div>
          <div className="right-container">
            <button className="request-button" onClick={handleRequestDemo}>Request Demo</button>
            <div className="globe">
              <img src={Globe} alt="globe" />
            </div>
            <div className="userProfile" onClick={handleProfileClick}>
              {/* <img src={User} alt="user" /> */}
              <div className="userImage"  style={{backgroundColor: randomColor}}><div className="userName">{emails && emails[0]?.toUpperCase()}</div></div>
              {userProfileDropdown && (
                <UserProfile handleProfileLogout={handleProfileLogout} />
              )}
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Header;

// style={{ backgroundColor: randomColor() }}