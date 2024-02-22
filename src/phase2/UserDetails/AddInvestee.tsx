import React, { useState } from "react";
import "./AddInvestee.scss";
import removeUser from "../../assets/svg/removeUser.svg";
import editUser from "../../assets/svg/editUser.svg";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { removeInvestee } from "../../redux/slice/manageUserSlice/Investee/investeeSlice";
import AccessControl from "./AccessControl";
import { deleteEmployeeDetails } from "../../redux/slice/manageUserSlice/Employee/employeeDeleteApiSlice";
import { investeeResendInvite } from "../../redux/slice/manageUserSlice/Investee/investeeResendSlice";

interface Investee {
  fname: string;
  email: string;
  company: string;
  onboarded_status: string;
}

const moduleColor = ["#FFD6D6", "#E3F6D4", "#D6EBFF"];

const AddInvestee = ({
  userData,
  setUserData,
  handleEditClick,
  handleButtonClick,
}: {
  userData: Investee[];
  setUserData: any;
  handleEditClick: any;
  handleButtonClick: any;
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [isOverlayvisible, setOverlayVisible] = useState(false);
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const handleRemoveClick = (email: string) => {
    setUserData(userData.filter((user) => user.email !== email));
    dispatch(removeInvestee(email));
    dispatch(deleteEmployeeDetails({ email }));
  };
  const handleResendInvite = () =>{
    const emailObject:any=[];
    for(let i=0;i<selectedRows.length;++i)
    { 
        const emailItem:any={}
        emailItem["email"]=selectedRows[i];
        emailObject.push(emailItem);
    }
    console.log(emailObject);
    // console.log(selectedRows.map((item:any)=> {["email"]:item.email}));
    dispatch(investeeResendInvite({ user: emailObject }));
  }
  const handleCheckboxChange = (email:string) => {
    setSelectedRows((prevSelectedRows) => {
      if (prevSelectedRows?.includes(email)) {
        return prevSelectedRows?.filter((currentEmail:string) => currentEmail !== email);
      } else {
        return [...prevSelectedRows, email];
      }
    });
  };
  const handleResendClick = (email: any) => {
    let user: any = [{ email: email }];
    dispatch(investeeResendInvite({ user: user }));
  };
  const handleAccessButtonClick = () => {
    setOverlayVisible(!isOverlayvisible);
  };
  return (
    <>
      <div className="tableHeader">
        <div className="leftHeader">
          <div className="buttonPart">
            <button
              type="submit"
              onClick={handleAccessButtonClick}
              className="loginbutton card-button "
            >
              Access Details +
            </button>
            <div className="access-detail">
              {isOverlayvisible && <AccessControl />}
            </div>
          </div>
          <div className="buttonPart">
            <button type="submit" className="loginbutton card-button " onClick={handleResendInvite}>
              Resend Invites
            </button>
          </div>
        </div>

        <div className="rightHeader">
          <div className="buttonPart">
            <button
              type="submit"
              className="loginbutton card-button "
              onClick={handleButtonClick}
            >
              + Add Users
            </button>
          </div>
        </div>
      </div>
      <table className="userDetailsTable">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
            <th>Onboarding</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {userData.map((item) => (
            <tr>
              <td><input type='checkbox' checked={selectedRows?.includes(item.email)}
            onChange={() => handleCheckboxChange(item.email)}/></td>
              <td>{item.fname}</td>
              <td>{item.email}</td>
              <td>{item.company}</td>
              <td>
                {item.onboarded_status ? (
                  <div>Onboarded</div>
                ) : (
                  <div
                    className="resendLink"
                    onClick={() => handleResendClick(item.email)}
                  >
                    Invite Again
                  </div>
                )}
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

export default AddInvestee;