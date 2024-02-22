import React, { useEffect, useState } from "react";
import "./AccessControl.scss";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { getEmployeeDetails } from "../../redux/slice/manageUserSlice/Employee/employeeGetApiSlice";

const AccessControl = ({ handleAccessButtonClick }: any) => {
  const [isAccessTypeVisible, setAccessTypeVisible] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const [details, setDetails] = useState([]);
  const [isPurchaseVisble, setPurchaseVisivle] = useState(false);
  const handleaccesstypeButton = () => {
    setAccessTypeVisible(!isAccessTypeVisible);
    setPurchaseVisivle(false);
  };
  const handlepurchasebutton = () => {
    setPurchaseVisivle(!isPurchaseVisble);
  };
  useEffect(() => {
    const response = dispatch(getEmployeeDetails(null));
    response.then((item) => {
      const filteredArray = item.payload.result.filter(
        (item: any) =>
          item.role !== "Investee" || item.role !== "investee"
      );
      const keyCounts: any = {};

      filteredArray.forEach((obj: any) => {
        obj.module_access.forEach((moduleObj: any) => {
          const key = moduleObj.moduleName;
          if (key != "") {
            const value = moduleObj.accessType;
            if (!keyCounts[key]) {
              keyCounts[key] = {};
            }
            keyCounts[key][value] = (keyCounts[key][value] || 0) + 1;
          }
        });
      });
      const items: any = Object.entries(keyCounts).map(
        ([moduleName, valueCounts]) => ({
          moduleName,
          accessType: valueCounts,
        })
      );
      setDetails(items);
    });
  }, []);

  //=================User Data=====================

  return (
    <div className="accessdetail">
      {true && (
        <div className="overlay-container">
          <div className="access-detail-overlay">
            {/* <button className="close-overlay" onClick={onClose}>
                X
              </button> */}
            {/* ======About Access Types========= */}

            <div className="access-type-dropdown">
              <div className="container-name">Access Detail</div>
              <div className="acess-type-detail">
                <button
                  className="access-type-button"
                  onClick={handleaccesstypeButton}
                >
                  <div className="access-type-heading">About Access Type</div>
                  <svg
                    width="13"
                    height="8"
                    viewBox="0 0 13 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.5 7.73449L0.75 1.98449L2.09167 0.642822L6.5 5.05116L10.9083 0.642822L12.25 1.98449L6.5 7.73449Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>
              <div className="horizontail"></div>
              {isAccessTypeVisible && (
                <div className="accesstypecontent">
                  <h3>Read Only</h3>
                  <p>
                    Details of the plan what kind of features it lends to the
                    user who to ideally assign it to you, the fact that it can
                    be modified at any points. Limits of this type Details of
                    the plan what kind of features it lends to the user who to
                    ideally assign it to you, the fact that it can be modified
                    at any points. Limits of this type
                  </p>
                  <h3>Read and Write</h3>
                  <p>
                    Details of the plan what kind of features it lends to the
                    user who to ideally assign it to you, the fact that it can
                    be modified at any points. Limits of this type Details of
                    the plan what kind of features it lends to the user who to
                    ideally assign it to you, the fact that it can be modified
                    at any points. Limits of this type
                  </p>
                </div>
              )}
            </div>
            {/* ======Purschased Access========= */}
            <div className="purchased-access-container">
              <div className="purchase-detail-data">
                <button
                  className="purchase-access-button"
                  onClick={handlepurchasebutton}
                >
                  <div className="purchase-detail">Purchase Detail</div>

                  <svg
                    width="13"
                    height="8"
                    viewBox="0 0 13 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.5 7.73449L0.75 1.98449L2.09167 0.642822L6.5 5.05116L10.9083 0.642822L12.25 1.98449L6.5 7.73449Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>
              <div className="horizontail"></div>
              {isPurchaseVisble && (
                <div className="purchase-access-container">
                  {details.map((module: any) => (
                    <div key={module}>
                      <table className="purchase-table">
                        <thead>
                          <tr>
                            <th colSpan={2}>
                              {" "}
                              <h2 className="moduleName">
                                {module.moduleName}
                              </h2>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Read Only</td>
                            <td>{module.accessType["Read Only"] || 0}</td>
                          </tr>
                          <tr>
                            <td>Read and Write</td>
                            <td>{module.accessType["Read/Write"] || 0}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessControl;
