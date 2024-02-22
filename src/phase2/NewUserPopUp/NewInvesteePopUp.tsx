import React, { ChangeEvent, useState } from "react";
import "./NewInvesteePopUp.scss"; // Create a CSS file for styling the popup.
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { addInvestee, updateInvestee } from "../../redux/slice/manageUserSlice/Investee/investeeSlice";
import { insertInvesteeDetails, updateInvesteeDetails } from "../../redux/slice/manageUserSlice/Investee/investeeApiSlice";
import Close from "../../assets/svg/Close";
interface User {
  fname: string;
  email: string;
  company: string;
  isin:string,
  onboarded_status: string;
}
const NewInvesteePopUp = ({
  onClose,
  setUserData,
  userData,
  details,
  setDetails,
  edit,
  setEdit,
}: {
  onClose: any;
  setUserData: any;
  userData: User[];
  details: User;
  setDetails: any;
  edit: string;
  setEdit: any;
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const initialUserData: User = {
    fname: "",
    email: "",
    company: "",
    isin:"",
    onboarded_status: "",
  };
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const fname = e.target.name;
    const value = e.target.value;
    setDetails({ ...details, [fname]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (edit.length == 0) {
      dispatch(
        addInvestee({
          name: details.fname,
          email: details.email,
          company: details.company,
          isin:details.isin
        })
      );
      dispatch(
        insertInvesteeDetails({
          fname: details.fname,
          email: details.email,
          company_name: details.company,
          isin:details.isin
        })
      );
      setUserData([...userData, details]);
    } else {
      const updatedUserData: any = userData.map((user) =>
        user.email === edit ? details : user
      );
      setDetails(details);
      setUserData(updatedUserData);
      dispatch(
        updateInvestee({
          name: details.fname,
          email: details.email,
          company: details.company,
          isin:details.isin
        })
      );
      dispatch(
        updateInvesteeDetails({
          fname: details.fname,
          email: details.email,
          company_name: details.company,
          isin:details.isin
        })
      );
      setEdit("");
      // const updatedUserData: any = userData.map((user) =>
      //   user.email === edit ? details : user
      // );
      // setDetails(details);
      // setUserData(updatedUserData);
      // setEdit("");
    }
    setDetails(initialUserData);
  };

  return (
    <div className="addNewUserPopup">
      <div className="popUpHeader">
        <h5>Add New Users</h5>
        <button className="popup-closeButton" onClick={onClose}>
          {/* <div className="popup-cross">
                        {" "}
                        <img className="image" src={cross} alt="" />
                    </div> */}
          <Close color={"#000"} />
        </button>
      </div>
      <div className="productplanContainer">
        <form className="newUserForm" onSubmit={(e) => handleSubmit(e)}>
          <div className="row">
            <div className="form-group">
              <label className="label">Name</label>
              <input
                type="text"
                className="input"
                name="fname"
                onChange={(e) => handleInput(e)}
                value={details.fname}
              />
            </div>
            <div className="form-group">
              <label className="label">Company</label>
              <input
                type="text"
                className="input"
                name="company"
                onChange={(e) => handleInput(e)}
                value={details.company}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              name="email"
              onChange={(e) => handleInput(e)}
              value={details.email}
            />
          </div>
          <div className="form-group">
            <label className="label">ISIN</label>
            <input
              type="text"
              className="input"
              name="isin"
              onChange={(e) => handleInput(e)}
              value={details.isin}
            />
          </div>
          <div className="buttonPart addUserButton">
            <button type="submit" className="loginbutton card-button ">
              Add User
            </button>
          </div>
        </form>
        <hr />
      </div>
    </div>
  );
};

export default NewInvesteePopUp;
