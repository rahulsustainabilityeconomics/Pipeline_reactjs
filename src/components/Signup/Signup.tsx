import React, { ChangeEvent, useCallback, useState } from "react";
import { Flex } from "../../styles/Flex";
import { useDispatch, useSelector } from "react-redux";
import signup from "../../assets/svg/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { selectsignupResponse } from "../../redux/slice/userAuthSlice/Signup/signupDetails.selector";
import { AppDispatch } from "../../redux/store";
import { signupDetails } from "../../redux/slice/userAuthSlice/Signup/signupSlice";
import eye from "../../assets/svg/eye.svg";
import eyeslash from "../../assets/svg/eyeslash.svg";
import CompanyLogo from "../../assets/svg/company-logo.svg";

import "./Signup.scss";
//user data interface
interface UserData {
  firstName: string;
  lastName: string;
  cemail: string;
  cpassword: string;
  password: string;
  company_name: string;
}
// error data interface
interface ErrorData {
  firstName: string;
  lastName: string;
  email: string;
}
interface ValidationData {
  upperCase: boolean;
  lowerCase: boolean;
  specialCase: boolean;
  length: boolean;
  number: boolean;
}

//initial user data
const initialUserData: UserData = {
  firstName: "",
  lastName: "",
  cemail: "",
  cpassword: "",
  password: "",
  company_name: "",
};
//initial error data
const ferrors: ErrorData = {
  firstName: "",
  lastName: "",
  email: "",
};

const initialValidationData: ValidationData = {
  upperCase: false,
  lowerCase: false,
  specialCase: false,
  length: false,
  number: false,
};

const Signup: React.FC = () => {
  // variables and hooks declaration
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const location = useLocation();
  const reduxStore = useSelector((state: any) => state.signupDetails);
  const [details, setDetails] = useState<UserData>(initialUserData);
  const [feerrors, setfeErrors] = useState<ErrorData>(ferrors);
  const [errors, setErrors] = useState<string>("");
  const [validation, setValidation] = useState(initialValidationData);
  const [showError, setShowError] = useState<boolean>(true);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  // input handler for the changing attributes
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    if (name == "password") {
      if (value.length >= 8) {
        setValidation((prev) => ({ ...prev, length: true }));
      } else {
        setValidation((prev) => ({ ...prev, length: false }));
      }
      if (/[A-Z]/.test(value)) {
        setValidation((prev) => ({ ...prev, upperCase: true }));
      } else {
        setValidation((prev) => ({ ...prev, upperCase: false }));
      }
      if (/[a-z]/.test(value)) {
        setValidation((prev) => ({ ...prev, lowerCase: true }));
      } else {
        setValidation((prev) => ({ ...prev, lowerCase: false }));
      }
      if (/[0-9]/.test(value)) {
        setValidation((prev) => ({ ...prev, number: true }));
      } else {
        setValidation((prev) => ({ ...prev, number: false }));
      }
      if (/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(value)) {
        setValidation((prev) => ({ ...prev, specialCase: true }));
      } else {
        setValidation((prev) => ({ ...prev, specialCase: false }));
      }
    }

    setDetails({ ...details, [name]: value });
  };

  //checbox handler
  const [isChecked, setChecked] = useState(false);
  const checkboxChangeHanlder = () => {
    setChecked(!isChecked);
  };

  // Error Validation Function
  let isValid: boolean;
  // function to validate form for fname, lname, email
  const validateForm = () => {
    isValid = true;
    const newErrors = { ...feerrors };
    if (!details.firstName) {
      newErrors.firstName = "First Name is Required";
      isValid = false;
    }
    if (!details.lastName) {
      newErrors.lastName = "Last Name is Required";
      isValid = false;
    }
    if (!details.cemail) {
      newErrors.email = "Email is required";
    }
    setfeErrors(newErrors);
    return isValid;
  };
  //handler for submit action
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setfeErrors({
      firstName: "",
      lastName: "",
      email: "",
    });

    const response = await dispatch(
      signupDetails({
        fname: details.firstName,
        lname: details.lastName,
        email: details.cemail,
        password: details.password,
        confirmPassword: details.cpassword,
        company_name: details.company_name,
      })
    );
    setDetails({
      firstName: "",
      lastName: "",
      cemail: "",
      cpassword: "",
      password: "",
      company_name: "",
    });
    setErrors(response?.payload?.error);
    //navigating to the verfication after successful signup
    if (!response?.payload?.error) {
      navigate("/accountverify");
    }
  };

  return (
    <div className="signup">
      <div className="company">
        <img className="mobileLogo" src={CompanyLogo} />
        <div className="colorHeading">Sustainability </div>{" "}
        <div> Marketplace</div>
      </div>
      <img className="signup-image" src={signup} alt="image" />
      <div className="main-part">
        <h2 className="heading">
          Welcome to Sustainable{" "}
          <span className="colorHeading"> Marketplace</span>
        </h2>
        <div className="auth">
          <Link
            to="/login"
            className={`${location.pathname === "/login" ? "activeClass" : ""}`}
          >
            Login
          </Link>
          <Link
            to="/signup"
            className={`${
              location.pathname === "/signup" ? "activeClass" : ""
            }`}
          >
            Signup
          </Link>
        </div>
        <div className="body">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="formPart">
              <div className="namepartflex">
                <div className="name-part">
                  <label htmlFor="firstName" className="label">
                    First Name <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    className="input"
                    type="text"
                    name="firstName"
                    onChange={(e) => handleInput(e)}
                    value={details.firstName}
                  />
                </div>
              </div>
              <div>
                <div className="name-part">
                  <label htmlFor="lastName" className="label">
                    Last Name <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    className="input"
                    name="lastName"
                    onChange={(e) => handleInput(e)}
                    value={details.lastName}
                  />
                </div>
              </div>
              <div className="rest-form-part">
                <label htmlFor="cemail" className="label">
                  Email <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="email"
                  className="input"
                  name="cemail"
                  onChange={(e) => handleInput(e)}
                  value={details.cemail}
                />
                {/* {showError ? <div style={{ color: "red" }}>{errors.cemail}</div> : ""} */}
              </div>
              <div className="rest-form-part">
                <label htmlFor="company_name" className="label">
                  Company Name <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  className="input"
                  name="company_name"
                  onChange={(e) => handleInput(e)}
                  value={details.company_name}
                />
                {/* {showError ? <div style={{ color: "red" }}>{errors.cemail}</div> : ""} */}
              </div>
              <div className="rest-form-part">
                <div className="hide-password">
                  <label htmlFor="password" className="label">
                    Password <span style={{ color: "red" }}>*</span>
                  </label>
                  <div className="eye">
                    <button
                      type="button"
                      className="eye-button"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <div className="eye-icon">
                          <img src={eye} alt="x" />
                          Show
                        </div>
                      ) : (
                        <div className="eye-icon">
                          <img src={eyeslash} />
                          Hide
                        </div>
                      )}
                    </button>
                  </div>
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder=""
                  className="password"
                  onChange={(e) => handleInput(e)}
                  value={details.password}
                />
              </div>
              <div className="rest-form-part">
                <label htmlFor="cpassword" className="label">
                  Confirm Password <span style={{ color: "red" }}> *</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="cpassword"
                  placeholder=""
                  className="cpassword"
                  onChange={(e) => handleInput(e)}
                  value={details.cpassword}
                />
                <ul className="passwordError">
                  {validation.length ? (
                    <li style={{ color: "green" }}>Use 8 or more character</li>
                  ) : (
                    <li style={{ color: "red" }}>Use 8 or more character</li>
                  )}
                  {validation.upperCase ? (
                    <li style={{ color: "green" }}>One Uppercase character</li>
                  ) : (
                    <li style={{ color: "red" }}>One Uppercase character</li>
                  )}
                  {validation.specialCase ? (
                    <li style={{ color: "green" }}>One Special character</li>
                  ) : (
                    <li style={{ color: "red" }}>One Special character</li>
                  )}
                  {validation.lowerCase ? (
                    <li style={{ color: "green" }}>One Lowercase character</li>
                  ) : (
                    <li style={{ color: "red" }}>One Lowercase character</li>
                  )}
                  {validation.number ? (
                    <li style={{ color: "green" }}>One number</li>
                  ) : (
                    <li style={{ color: "red" }}>One number</li>
                  )}
                </ul>
                {showError ? <div style={{ color: "red" }}>{errors}</div> : ""}
                {showError ? (
                  <div style={{ color: "red" }}>{feerrors.firstName}</div>
                ) : (
                  ""
                )}
                {showError ? (
                  <div style={{ color: "red" }}>{feerrors.lastName}</div>
                ) : (
                  ""
                )}
                {showError ? (
                  <div style={{ color: "red" }}>{feerrors.email}</div>
                ) : (
                  ""
                )}
              </div>
              <div className="notify-container">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={checkboxChangeHanlder}
                />
                <div className="email-verify">
                  Receive marketing and event emails from us.
                </div>
              </div>
              <div className="rest-form-part">
                <h4>
                  By creating an account, you agree to the{" "}
                  <a href="">Terms of use</a> and <a href="">Privacy Policy.</a>
                </h4>
              </div>
              <div className="captcha-part mt-1">
                <div className="buttonPart">
                  <button type="submit" className="signupbutton card-button">
                    {reduxStore.isLoading ? (
                      <div>Loading...</div>
                    ) : (
                      <div className="create-account">Create an account</div>
                    )}
                  </button>
                </div>
              </div>
              <h4 className="subheading">
                Already have an account?
                <span>
                  <Link className="login-link" to="/login">
                    Log in
                  </Link>
                </span>
              </h4>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
