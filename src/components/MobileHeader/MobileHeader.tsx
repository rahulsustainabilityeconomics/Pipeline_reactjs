import React, { useState } from "react";
import "./MobileHeader.scss";
import CompanyLogo from "../../assets/svg/company-logo.svg";
import { ReactComponent as ArrowTop } from "../../assets/svg/ArrowTop.svg";
import { ReactComponent as ArrowDown } from "../../assets/svg/ArrowDown.svg";
import gfg from "../../assets/svg/mobilegfg.svg";
import target from "../../assets/svg/MobileTargett.svg";
import climate from "../../assets/svg/MobileClimate.svg";
import reporting from "../../assets/svg/Mobilereport.svg";
import transition from "../../assets/svg/MobileTransition.svg";
import carbon from "../../assets/svg/MobileCarbon.svg";
import bench from "../../assets/svg/MobileBench.svg";
import account from "../../assets/svg/MobileAccount.svg";
import contact from "../../assets/svg/Mobilecontact.svg";
import sign from "../../assets/svg/Mobilesignout.svg";
import { useLocation } from "react-router-dom";

const MobileHeader = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const location = useLocation();
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (e: any) => {
    e.stopPropagation();
    setDropdown(!dropdown);
  };
  const path = location.pathname;
  const AuthHeader = [
    "/login",
    "/signup",
    "/accountverify",
    "/changepassword",
    "/resetpassword",
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <>
      {!AuthHeader.includes(path) && (
        <div className="MobileHeader">
          <div className="mobileheaderleft">
            <div className="logo">
              <img className="mobileLogo" src={CompanyLogo} alt="" />
            </div>
            <div className="mobileheadermiddle">
              <div className="sustain">Sustainability</div>
              <div className="market">Marketplace</div>
            </div>
          </div>
          <div className="mobileheaderright">
            <div className="burger-menu">
              <div
                className={`hamburger ${isMenuOpen ? "open" : ""} `}
                onClick={toggleMenu}
              >
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                {isMenuOpen && (
                  <div className="menu">
                    <div className="menu-heading">
                      <h1 className="menu-title">Build your Platform</h1>
                      <div className="menu-content">
                        <div className="header-dropdown">
                          <h3 className="module"> Module</h3>

                          <div className="arrow" onClick={toggleDropdown}>
                            {dropdown ? <ArrowTop /> : <ArrowDown />}
                          </div>
                        </div>
                        {dropdown && (
                          <div className="dropdown-content">
                            <div className="dropdown-items">
                              <img src={gfg} alt="" />
                              GFG Accounting
                            </div>
                            <div className="dropdown-items">
                              <img src={target} alt="" />
                              Target Setting
                            </div>
                            <div className="dropdown-items">
                              <img src={climate} alt="" />
                              Climate Scenario Analysis
                            </div>
                            <div className="dropdown-items">
                              <img src={reporting} alt="" />
                              Reporting
                            </div>
                            <div className="dropdown-items">
                              <img src={transition} alt="" />
                              Transition Financing
                            </div>
                            <div className="dropdown-items">
                              <img src={carbon} alt="" />
                              Carbon Bonds
                            </div>
                            <div className="dropdown-items">
                              <img src={bench} alt="" />
                              Benchmarking
                            </div>
                          </div>
                        )}
                        <div className="menu-items">
                          <div className="menu-dropdown-items">
                            <img src={account} alt="" />
                            Account Settings
                          </div>
                          <div className="menu-dropdown-items">
                            <img src={contact} alt="" />
                            Contact Support
                          </div>
                          <div className="menu-dropdown-items">
                            <img src={sign} alt="" />
                            Sign Out
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileHeader;

{
  /* <img src={gfg} alt="" />Item 1</div> 
                     <div><img src="" alt="" />Item 1</div> */
}
