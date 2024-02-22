import React, { ChangeEvent, useState } from "react";
import "./NewEmployeePopUp.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import {
  addEmployee,
  updateEmployee,
} from "../../redux/slice/manageUserSlice/Employee/employeeSlice";
import {
  insertEmployeeDetails,
  updateEmployeeDetails,
  uploadEmployeeDetails,
} from "../../redux/slice/manageUserSlice/Employee/employeeApiSlice";
import Close from "../../assets/svg/Close";
import { useLocation } from "react-router-dom";
// defining the data format for cart
interface Module {
  moduleName: string;
  accessType: string;
}
// defining the data format for the new employee
interface User {
  fname: string;
  role: string;
  email: string;
  module_access: Module[];
}

//component definition with the props
const NewEmployeePopUp = ({
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
  const location = useLocation();
  const sector = location.state.sector;
  const cart = location.state.cart;
  const cartDetails = cart.items;
  const initialUserData: User = {
    fname: "",
    role: "",
    email: "",
    module_access: [{ moduleName: "", accessType: "" }],
  };
  const handleRemoveModule = (index:number) =>{
    const updateModule = details.module_access.filter((item,idx)=> idx!=index )
    setDetails((prevData: any) => ({
      ...prevData,
      module_access: updateModule,
    }));
  }
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setDetails({ ...details, [name]: value });
  };
  const handleNewFieldInput = (
    e: ChangeEvent<HTMLSelectElement>,
    index: any
  ) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    if (edit.length == 0) {
      const lastItemIndex = details.module_access.length - 1;
      const newArray = [...details.module_access];
      newArray[lastItemIndex] = {
        ...newArray[lastItemIndex],
        [name]: value,
      };
      setDetails((prevState: any) => ({
        ...prevState,
        module_access: newArray,
      }));
    } else {
      const updatedData = details.module_access.map((item, idx) =>
        idx === index ? { ...item, [name]: value } : item
      );
      setDetails((prevState: any) => ({
        ...prevState,
        module_access: updatedData,
      }));
    }

  };

  const addNewField = () => {
    setDetails((prevData: any) => ({
      ...prevData,
      module_access: [
        ...prevData.module_access,
        { moduleName: "", accessType: "" },
      ],
    }));
  };
  // const handleRemove = (index:number) => {};
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (edit.length == 0) {
      dispatch(
        addEmployee({
          fname: details.fname,
          email: details.email,
          role: details.role,
          module_access: details.module_access,
        })
      );
      dispatch(
        insertEmployeeDetails({
          fname: details.fname,
          email: details.email,
          role: details.role,
          module_access: details.module_access,
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
        updateEmployee({
          fname: details.fname,
          email: details.email,
          role: details.role,
          module_access: details.module_access,
        })
      );
      dispatch(
        updateEmployeeDetails({
          fname: details.fname,
          email: details.email,
          role: details.role,
          module_access: details.module_access,
        })
      );
      setEdit("");
    }
    setDetails(initialUserData);
  };

  return (
    <div className="addNewUserPopup">
      <div className="popUpHeader">
        <div className="heading">Add New Users</div>
        <button className="popup-closeButton" onClick={onClose}>
          <Close color={"#000"} />
        </button>
      </div>
      <div className="productplanContainer">
        <form className="newEmployeeUserForm" onSubmit={(e) => handleSubmit(e)}>
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
              <label className="label">Role</label>
              <input
                type="text"
                className="input"
                name="role"
                onChange={(e) => handleInput(e)}
                value={details.role}
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
          <h5 className="moduleHeader">Modules</h5>
          {details.module_access.map((field, index) => (
            <div key={index} className="row">
              <div className="form-group">
                <label className="label">Module {index + 1}</label>
                <select
                  id="moduleName"
                  name="moduleName"
                  value={field.moduleName}
                  onChange={(e) => {
                    handleNewFieldInput(e, index);
                  }}
                >
                  <option value="">Select...</option>
                  {cartDetails?.map((item: any, index: number) => (
                    <option key={index} value={item.moduleName}>
                      {item.moduleName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="label">Access Types</label>
                <select
                  id="accessType"
                  name="accessType"
                  value={field.accessType}
                  onChange={(e) => {
                    handleNewFieldInput(e, index);
                  }}
                >
                  <option value="">Select...</option>
                  <option value="Read Only">Read Only</option>
                  <option value="Read/Write">Read/Write</option>
                </select>
              </div>
              <button type="button" className="popup-closeButton" onClick={() =>handleRemoveModule(index)}>
                <Close color={"#000"} />
              </button>
            </div>
          ))}
          <div className="buttonPart addModuleButton">
            <button
              type="button"
              onClick={addNewField}
              className="loginbutton card-button "
            >
              + Add Module
            </button>
          </div>
          <div className="buttonPart addUserButton">
            <button type="submit" className="loginbutton card-button ">
              Add User
            </button>
          </div>
        </form>
        {/* <ExcelFileUploader userData={userData} setUserData={setUserData} /> */}
      </div>
    </div>
  );
};

export default NewEmployeePopUp;
