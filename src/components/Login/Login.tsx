import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import login from "../../assets/svg/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AppDispatch } from "../../redux/store";
import { insertLoginDetailsapi } from "../../redux/slice/userAuthSlice/Login/userLoginSlice";
import "./Login.scss";
import eye from "../../assets/svg/eye.svg";
import eyeslash from "../../assets/svg/eyeslash.svg";
import CompanyLogo from "../../assets/svg/company-logo.svg";

// login data interface
interface UserData {
  email: string;
  password: string;
}
// login initial data
const initialUserData: UserData = {
  email: "",
  password: "",
};

const Login = ({setUserName}:{setUserName:any}) => {
  // hooks and variables declaration
  const reduxStore = useSelector((state: any) => state.userLogin);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const location = useLocation();
  const [details, setDetails] = useState<UserData>(initialUserData);
  const [errors, setErrors] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // handler for input change in the fields
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setDetails({ ...details, [name]: value });
  };
  // handle submit action
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUserName(details.email);
    localStorage.setItem("email",details.email);
    //sending action to the redux to make API call
    dispatch(
      insertLoginDetailsapi({
        email: details.email,
        password: details.password,
      })
    ).then((res) => {
      if (res.payload?.result?.success) {
        setErrors("");
        setDetails({
          email: "",
          password: "",
        });
        navigate("/");
        // window.location.reload();
      }
      else{
        console.log(res);  
        setErrors(res?.payload?.error);
        if(res?.payload?.error == "New password is required.")
        {
          navigate("/changePassword", {state: "newUser"})
        }
      }
    });

    const randomColor = () => {
      const red = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);
      return `rgb(${red}, ${green}, ${blue})`;
      };
      
      const colorResult=randomColor();
      console.log("color",colorResult);
      localStorage.setItem("randomcolor",colorResult);
  };

  return (
    <div className="login">
      <div className="company">
        <img className="mobileLogo" src={CompanyLogo} />
        <div className="colorHeading">Sustainability </div>{" "}
        <div> Marketplace</div>
      </div>
      <img className="login-image" src={login} alt="image" />
      <div className="main-part">
        <h2 className="heading">Welcome to Sustainable <span className="colorHeading"> Marketplace</span></h2>
        <div className="auth">
          <Link to="/login" className={`${location.pathname==="/login"? 'activeClass':''}`}>Login</Link>
          <Link to="/signup" className={`${location.pathname==="/signup"? 'activeClass':''}`}>Signup</Link>
        </div>
        <div className="body">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="formPart">
              <div className="rest-form-part">
                <label htmlFor="email" className="label">
                  E-mail <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="email"
                  className="input"
                  name="email"
                  onChange={(e) => handleInput(e)}
                  value={details.email}
                />
              </div>
              <div className="rest-form-part">
                <div className="password-container">
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
              <div className="sign-up-to-account">
                <h4 className="subheading">
                  Don't have an account? {" "} 
                  <span>
                    <Link className="signup-link" to="/signup">
                      {" "}
                      Sign up
                    </Link>
                  </span>
                </h4>
                <div>
                  {" "}
                  <Link className="resetpassword-link" to="/resetpassword">
                    Forgot Password?
                  </Link>
                </div>
              </div>
              <div className="captcha-part">
                {errors ? <div className="error">{errors}</div> : ""}
                <div className="buttonPart">
                  <button type="submit" className="loginbutton card-button">
                    {reduxStore.isLoading ? (
                      <div>Loading...</div>
                    ) : (
                      <div>Log In</div>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Login;
