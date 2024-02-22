import React, { useState, FC } from "react";
import "./Sidebar.scss";
import { Link } from "react-router-dom";
import Arrowbackward from "../../assets/svg/arrow-backward.svg";
import { ReactComponent as Access} from "../../assets/svg/help.svg";
import { ReactComponent as Safety} from "../../assets/svg/safety.svg";
import { ReactComponent as Employee} from "../../assets/svg/employee.svg";
import { ReactComponent as Investee} from "../../assets/svg/investee.svg";

const Sidebar = ({setActiveSubTab, activeTab, setActiveTab, activeSubTab}:{setActiveSubTab:any, activeTab:any, setActiveTab:any, activeSubTab:any}) => {
  
  const handleTabClick = (tab: number) => {
    setActiveTab((prevTab:any) => (prevTab === tab ? null : tab));
    setActiveSubTab(null);
  };

  const handleSubTabClick = (subTab: string) => {
    setActiveSubTab(subTab);
  };

  return (
    <div className="manage-user">
      <div className="sidebar">
        <Link
          className="climate-journey"
          to={{
            pathname: "/continueyourjouney ",
          }}
        >
          <div className="dashboard-content">
            <img src={Arrowbackward} alt="" />
            <h4 className="dashboard-heading">Main Dashboard</h4>
          </div>
        </Link>
        <div
          className={`tab ${activeTab == 1 ? "selected" : ""}`}
          onClick={() => handleTabClick(1)}
        >
          <div className="icon">
            <Access className="sidebar-icon" />
          </div>
          Access Control
        </div>
        <div className="content">
          {activeTab === 1 && (
            <div>
              <div
                className={`subtab ${activeSubTab=='subtab1'?"sub-selected":""}`}
                onClick={() => handleSubTabClick("subtab1")}
              >
                <div className="sub-icon">
                    <Employee className="sidebar-icon" />
                </div>
                Add Employees
              </div>
              <div
                className={`subtab ${activeSubTab=='subtab2'?"sub-selected":""}`}
                onClick={() => handleSubTabClick("subtab2")}
              >
                 <div className="sub-icon">
                    <Investee className="sidebar-icon" />
                </div>
                Add Investees
              </div>
            </div>
          )}
        </div>

        <div
          className={`tab ${activeTab == 2 ? "selected" : ""}`}
          onClick={() => handleTabClick(2)}
        >
          <div className="icon">
            <Safety className="sidebar-icon" />
          </div>
          Terms & Privacy
        </div>
        <div
          className={`tab ${activeTab == 3 ? "selected" : ""}`}
          onClick={() => handleTabClick(3)}
        >
          <div className="icon">
            <Access className="sidebar-icon" />
          </div>
          Contact Support
        </div>
      </div>

    </div>
  );
};

export default Sidebar;
