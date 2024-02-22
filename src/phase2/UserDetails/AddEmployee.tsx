import React, { ChangeEvent, useState } from "react";
import "./AddEmployee.scss";
import removeUser from "../../assets/svg/removeUser.svg";
import editUser from "../../assets/svg/editUser.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectEmployeeResponse } from "../../redux/slice/manageUserSlice/Employee/employeeDetails.selector";
import { AppDispatch } from "../../redux/store";
import { removeEmployee } from "../../redux/slice/manageUserSlice/Employee/employeeSlice";
import AccessControl from "./AccessControl";
import { deleteEmployeeDetails } from "../../redux/slice/manageUserSlice/Employee/employeeDeleteApiSlice";

interface Module {
  moduleName: string;
  accessType: string;
}

interface Employee {
  fname: string;
  role: string;
  email: string;
  module_access: Module[];
}

const moduleColor = ["#FFD6D6", "#E3F6D4", "#D6EBFF"];

const AddEmployee = ({
  userData,
  setUserData,
  handleEditClick,
  handleButtonClick,
  handleUploadClick,
}: {
  userData: Employee[];
  setUserData: any;
  handleEditClick: any;
  handleButtonClick: any;
  handleUploadClick: any;
}) => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const [dropdown, setDropdown] = useState(false);
  const [subDropDown, setSubDropDown] = useState(false);
  const [filter, setFilter] = useState("");
  const [isOverlayvisible, setOverlayVisible] = useState(false);
  const [searchResult, setSearchResult] = useState<Employee[]>([]);
  const [filterResult, setFilterResult] = useState<Employee[]>([]);
  const handleRemoveClick = (email: string) => {
    setUserData(userData.filter((user) => user.email !== email));
    dispatch(deleteEmployeeDetails({ email }));
    // dispatch(removeEmployee(email));
  };
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
    const searchedData = userData.filter((item) =>
      Object.values(item).some((value) =>
        typeof value === "string"
          ? value.toLowerCase().includes(search.toLowerCase())
          : Array.isArray(value) &&
            value.some((innerItem) =>
              Object.values(innerItem).some(
                (innerValue) =>
                  typeof innerValue === "string" &&
                  innerValue.toLowerCase().includes(search.toLowerCase())
              )
            )
      )
    );
    setSearchResult(searchedData);
  };
  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFilter(e.target.value);

    const filteredData = userData.filter((item) =>
      Object.values(item).some(
        (value) =>
          Array.isArray(value) &&
          value.some((innerItem) =>
            Object.values(innerItem).some(
              (innerValue) =>
                typeof innerValue === "string" &&
                innerValue.toLowerCase().includes(filter.toLowerCase())
            )
          )
      )
    );
    setFilterResult(filteredData);
  };
  const handleAccessButtonClick = () => {
    setOverlayVisible(!isOverlayvisible);
  };
  const subMenu = ["Role", "Module", "EFGH", "IJKL"];
  const innerSubMenu = ["kooko", "kooko", "kooko", "kooko"];
  return (
    <>
      <div className="tableHeader">
        <div className="buttonPart">
          <button
            type="button"
            onClick={handleAccessButtonClick}
            className="loginbutton card-button "
          >
            Access Details +
          </button>
          <div className="access-detail">
            {isOverlayvisible && <AccessControl />}
          </div>
        </div>
        <div className="rightHeader">
          <div className="search-container">
            <div className="search-icon">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                  stroke="#808080"
                  style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
                />
                <path
                  d="M20.9984 20.9984L16.6484 16.6484"
                  stroke="#808080"
                  style={{
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "1.5",
                  }}
                />
              </svg>
            </div>
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
              value={search}
              onChange={(e) => handleSearchChange(e)}
            />
          </div>
          <div className="filter-container">
            <div className="filter-icon">
              <svg
                width="18"
                height="18"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.1069 13.5018H13.8528M15.4753 11.916V15.1702M19.8294 13.5202C19.8294 14.336 19.6003 15.106 19.1969 15.766C18.8132 16.4105 18.2682 16.9439 17.6156 17.3136C16.963 17.6833 16.2253 17.8766 15.4753 17.8743C14.7256 17.8747 13.9886 17.6806 13.3364 17.3111C12.6841 16.9415 12.1387 16.4092 11.7536 15.766C11.3384 15.0906 11.1194 14.313 11.1211 13.5202C11.1211 11.1185 13.0736 9.16602 15.4753 9.16602C17.8769 9.16602 19.8294 11.1185 19.8294 13.5202Z"
                  stroke="#808080"
                  style={{
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: "10",
                  }}
                />
                <path
                  d="M18.9668 3.68565V5.72065C18.9668 6.46315 18.4993 7.38898 18.041 7.85648L16.4277 9.27732C16.1154 9.20301 15.7953 9.16609 15.4743 9.16732C13.0727 9.16732 11.1202 11.1198 11.1202 13.5215C11.1202 14.3373 11.3493 15.1073 11.7527 15.7673C12.0918 16.3357 12.5593 16.8215 13.1277 17.1698V17.4815C13.1277 18.0407 12.761 18.7832 12.2935 19.0582L11.001 19.8923C9.80016 20.6348 8.13182 19.8007 8.13182 18.3157V13.4115C8.13182 12.7607 7.75599 11.9265 7.38932 11.4682L3.86932 7.76482C3.41099 7.29732 3.03516 6.46315 3.03516 5.91315V3.77732C3.03516 2.66815 3.86932 1.83398 4.88682 1.83398H17.1152C18.1327 1.83398 18.9668 2.66815 18.9668 3.68565Z"
                  stroke="#808080"
                  style={{
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: "10",
                  }}
                />
              </svg>
            </div>
            <input
              type="text"
              className="filter"
              placeholder="Filter"
              value={filter}
              onChange={(e) => handleFilterChange(e)}
              onClick={() => setDropdown((prev) => !prev)}
            />
            <>
              <ul className={`dropdown ${dropdown ? "show" : "notShow"}`}>
                {subMenu.map((submenu, index) => (
                  <li key={index} className="menu-items">
                    <a onMouseEnter={() => setSubDropDown((prev) => !prev)}>
                      {submenu}
                    </a>
                    <ul
                      className={`subdropdown ${
                        subDropDown ? "subShow" : "notSubShow"
                      }`}
                    >
                      {submenu == "GHG" &&
                        innerSubMenu.map((submen, idx) => (
                          <li key={idx} className="menu-items">
                            <a>{submen}</a>
                          </li>
                        ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </>
          </div>
          <div className="buttonPart">
            <button
              type="submit"
              className="loginbutton card-button "
              onClick={handleButtonClick}
            >
              + Add Users
            </button>
          </div>
          <div className="buttonPart">
            <button
              type="submit"
              className="loginbutton card-button "
              onClick={handleUploadClick}
            >
              + Upload file
            </button>
          </div>
        </div>
      </div>
      <table className="userDetailsTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Module</th>
            <th>Access Type</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {(search == ""
            ? filter == ""
              ? userData
              : filterResult
            : searchResult
          ).map((item, index) => (
            <tr key={index}>
              <td>{item.fname}</td>
              <td>{item.email}</td>
              <td>{item.role}</td>
              <td>
                <ul>
                  {item.module_access &&
                    item.module_access.length > 0 &&
                    item?.module_access.map((subItem, index) => (
                      <li
                        key={index}
                        style={{ backgroundColor: moduleColor[index] }}
                      >
                        {subItem.moduleName}
                      </li>
                    ))}
                </ul>
              </td>
              <td>
                <ul>
                  {item.module_access &&
                    item.module_access.length > 0 &&
                    item?.module_access.map((subItem, index) => (
                      <li
                        key={index}
                        style={{ backgroundColor: moduleColor[index] }}
                      >
                        {subItem.accessType}
                      </li>
                    ))}
                </ul>
              </td>
              <td>
                <div className="userEditButton">
                  <button
                    className="editButton"
                    onClick={() => handleEditClick(item.email)}
                  >
                    <img src={editUser} alt="x" className="editUser" />
                  </button>
                  <button
                    className="editButton"
                    onClick={() => handleRemoveClick(item.email)}
                  >
                    <img src={removeUser} alt="x" className="removeUser" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AddEmployee;
