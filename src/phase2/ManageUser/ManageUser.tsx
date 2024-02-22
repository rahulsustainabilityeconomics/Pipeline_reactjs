import { useEffect, useState, useRef } from "react";
import NewEmployeePopUp from "../NewUserPopUp/NewEmployeePopUp";
import NewInvesteePopUp from "../NewUserPopUp/NewInvesteePopUp";
import Sidebar from "../Sidebar/Sidebar";
import AddEmployee from "../UserDetails/AddEmployee";
import "./ManageUser.scss";
import AddInvestee from "../UserDetails/AddInvestee";
import ContactSupport from "../ContactSupport/ContactSupport";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { getEmployeeDetails } from "../../redux/slice/manageUserSlice/Employee/employeeGetApiSlice";
import NewEmployeeUploadPopUp from "../NewUserPopUp/NewEmployeeUploadPopUp";
const ManageUser = () => {
  // variables and state declaration
  const [showPopup, setShowPopup] = useState(false);
  const [uploadPopup, setUploadPopup] = useState(false);
  // close the popup on sideclick 
  const popupRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch<AppDispatch>();
  // event handler for the outside popup click
  const outsidepopup = (event: any) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setShowPopup(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", outsidepopup);
    return () => {
      document.removeEventListener("mousedown", outsidepopup);
    };
  }, []);
  // handler for add user popup 
  const handleButtonClick = () => {
    setShowPopup(true);
  };
  // handler for upload popup click
  const handleUploadClick = () => {
    setUploadPopup(true);
  };
  // handler to close the popup
  const onClose = () => {
    setShowPopup(false);
    setUploadPopup(false);
  };
  // defining the cart format
  interface Module {
    moduleName: string;
    accessType: string;
  }
  // defining the employee data format
  interface Employee {
    fname: string;
    role: string;
    email: string;
    module_access: Module[];
  }

  // defining the investee data format
  interface Investee {
    fname: string;
    email: string;
    company: string;
    isin:string;
    onboarded_status: string;
  }

  // inititalizing the emplyoee and investee data
  const initialEmployeeData: Employee = {
    fname: "",
    role: "",
    email: "",
    module_access: [{ moduleName: "", accessType: "" }],
  };
  const initialInvesteeData: Investee = {
    fname: "",
    email: "",
    company: "",
    isin:"",
    onboarded_status: "",
  };
  // get the employee details from the redux store
  const employeeReduxData = useSelector((state: any) => state.employeeDetails);
  // get the investee details from the redux store  
  const investeeReduxData = useSelector((state: any) => state.investeeDetails);
  // state declaration for the details of all the employees currently present
  const [employeeData, setEmployeeData] = useState<Employee[]>(
    employeeReduxData.employeeData
  );
  // state declaration for the details of all the investee currently present
  const [investeeData, setInvesteeData] = useState<Investee[]>(
    investeeReduxData.investeeData
  );
  // state declaration for the current employee
  const [employeeDetails, setEmployeeDetails] =
    useState<any>(initialEmployeeData);
  // state declaration for the current investee
  const [investeeDetails, setInvesteeDetails] =
    useState<any>(initialInvesteeData);
  // state for managing the edit of the employee and investee
  const [edit, setEdit] = useState<string>("");
  // current activetab like add investee/ add employee
  const [activeSubTab, setActiveSubTab] = useState<string | null>("subtab1");
  // current active tab like access control, privacy policy
  const [activeTab, setActiveTab] = useState<number | null>(1);
  // making call for get employee and adding it to the redux for preexisting data.
  useEffect(() => {
    const response = dispatch(getEmployeeDetails(null));
    const addAttributes = (obj: any) => {
      return {
        fname: obj.firstName,
        email: obj.email,
        role: obj.role,
        module_access: obj.module_access,
      };
    };
    const investeeAttributes = (obj: any) => {
      return {
        fname: obj.firstName,
        email: obj.email,
        company: obj.company,
        onboarding_status: obj.onboarding_status,
      };
    };
    
    response.then((item) => {
      const employeeAPIData = item.payload.result.map(
        (item: any) =>  addAttributes(item)
      ).filter((item:any)=> item.role);
      const investeeAPIData = item.payload.result.filter((item:any)=> !item.role).map(
        (item: any) =>  investeeAttributes(item)
      );

      
      const combinedEmployeeData = employeeAPIData.map(
        (ApiItem: any) => {
          const matchingObj2 = employeeData.find(
            (reduxItem) => ApiItem.email === reduxItem.email
          );
          return { ...ApiItem, ...matchingObj2 };
        }
      );
      const combinedInvesteeData = investeeAPIData.map(
        (ApiItem: any) => {
          const matchingObj2 = investeeData.find(
            (reduxItem) => ApiItem.email === reduxItem.email
          );
          return { ...ApiItem, ...matchingObj2 };
        }
      );
      const uniqueEmployeeData = employeeData.filter(
        (obj2) =>
          !employeeAPIData.some(
            (obj1: any) => obj1.email === obj2.email
          )
      );
      const uniqueInvesteeData = investeeData.filter(
        (obj2) =>
          !investeeAPIData.some(
            (obj1: any) => obj1.email === obj2.email
          )
      );
      combinedEmployeeData.push(...uniqueEmployeeData);
      combinedInvesteeData.push(...uniqueInvesteeData);
      setEmployeeData(combinedEmployeeData);
      setInvesteeData(combinedInvesteeData);
    });
  }, []);
  // handler for employee edit click
  const handleEmployeeEditClick = (email: string) => {
    setEdit(email);
    setShowPopup(true);
    setEmployeeDetails(employeeData.find((user) => user.email === email));
  };
  // handler for investee edit click
  const handleInvesteeEditClick = (email: string) => {
    setEdit(email);
    setShowPopup(true);
    setInvesteeDetails(investeeData.find((user) => user.email === email));
  };
  return (
    <div className="top-container">
      {activeSubTab == "subtab1" && showPopup && (
        <div ref={popupRef} className="dialogue">
          <NewEmployeePopUp
            setUserData={setEmployeeData}
            userData={employeeData}
            onClose={onClose}
            details={employeeDetails}
            setDetails={setEmployeeDetails}
            edit={edit}
            setEdit={setEdit}
          />
        </div>
      )}
      {activeSubTab == "subtab1" && uploadPopup && (
        <div ref={popupRef} className="dialogue">
          <NewEmployeeUploadPopUp onClose={onClose} />
        </div>
      )}
      {activeSubTab == "subtab2" && showPopup && (
        <div ref={popupRef} className="dialogue">
          <NewInvesteePopUp
            setUserData={setInvesteeData}
            userData={investeeData}
            onClose={onClose}
            details={investeeDetails}
            setDetails={setInvesteeDetails}
            edit={edit}
            setEdit={setEdit}
          />
        </div>
      )}

      <div className="sidebar">
        <Sidebar
          setActiveSubTab={setActiveSubTab}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          activeSubTab={activeSubTab}
        />
      </div>
      <div className="table-container">
        {activeSubTab == "subtab1" && (
          <AddEmployee
            userData={employeeData}
            setUserData={setEmployeeData}
            handleEditClick={handleEmployeeEditClick}
            handleButtonClick={handleButtonClick}
            handleUploadClick={handleUploadClick}
          />
        )}
        {activeSubTab == "subtab2" && (
          <AddInvestee
            userData={investeeData}
            setUserData={setInvesteeData}
            handleEditClick={handleInvesteeEditClick}
            handleButtonClick={handleButtonClick}
          />
        )}
        {activeTab == 3 && <ContactSupport />}
      </div>
    </div>
  );
};

export default ManageUser;
