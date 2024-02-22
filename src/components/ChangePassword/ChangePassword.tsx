import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import login from "../../assets/svg/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AppDispatch } from "../../redux/store";
import { changePasswordapi } from "../../redux/slice/userAuthSlice/Changepassword/changePasswordSlice";
import "./ChangePassword.scss";
import CompanyLogo from "../../assets/svg/company-logo.svg";
import { confirmemployeeonboarddetails } from "../../redux/slice/manageUserSlice/ConfirmOnboardingSlice";

//data format for change password page
interface FormData {
  email: string;
  password: string;
  newPassword: string;
}

const ChangePassword: React.FC = () => {
  // variable and hooks declaration
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    newPassword: "",
  });
  const userType = location.state;
  
  // handler for the submit event
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //dispatching action to redux store to make API call for change password
    if (userType == null) {
      dispatch(changePasswordapi(formData)).then((res) => {
        if (res.payload?.result?.success == true) {
          setError("");
          navigate("/login");
        }
        if (res.payload?.error) {
          setError(res.payload?.error);
        }
      });
    } else {
      dispatch(confirmemployeeonboarddetails(formData)).then((res) => {
        if (res.payload?.success == true) {
          setError("");
          navigate("/login");
        }
        if (res.payload?.error) {
          setError(res.payload?.error);
        }
      });
    }
  };

  // handler for change in input fields
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="changePassword">
      <div className="company">
        <img src={CompanyLogo} />
        <div className="colorHeading">Sustainability </div>{" "}
        <div> Marketplace</div>
      </div>

      <img className="changePassword-image" src={login} alt="image" />
      <div className="main-part">
        <h2 className="heading">Change Password</h2>
        <div className="body">
          <form onSubmit={handleSubmit}>
            <div className="formPart">
              <div className="rest-form-part">
                <label htmlFor="email" className="label">
                  E-mail <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="email"
                  className="input"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>
              <div className="rest-form-part">
                <label htmlFor="password" className="label">
                  Password <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder=""
                  className="password"
                  onChange={handleChange}
                  value={formData.password}
                />

                <label htmlFor="password" className="label">
                  New Password <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="password"
                  name="newPassword"
                  placeholder=""
                  className="password"
                  onChange={handleChange}
                  value={formData.newPassword}
                />
              </div>
              <h4 className="subheading">
                Don't have an account?{" "}
                <span>
                  {" "}
                  <Link className="changepassword-link" to="/signup">
                    Sign up
                  </Link>
                </span>{" "}
              </h4>
              {error ? <div className="error">{error}</div> : ""}
              <div className="captcha-part mt-1">
                <div className="buttonPart">
                  <button type="submit" className="card-button">
                    Change Password
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
