import React, { ChangeEvent, FormEvent, useState } from "react";
import "./ResetPassword.scss";
import { useDispatch, useSelector } from "react-redux";
import login from "../../assets/svg/login.svg";
import { Link, useNavigate } from "react-router-dom";
import { AppDispatch } from "../../redux/store";
import { resetPasswordapi } from "../../redux/slice/userAuthSlice/Resetpassword/resetPasswordSlice";
import { resetOtpapi } from "../../redux/slice/userAuthSlice/Resetpassword/resetOtpSlice";
import CompanyLogo from "../../assets/svg/company-logo.svg";

// data format for reset password
interface FormData {
  email: string;
  verificationCode: string;
  newPassword: string;
}
interface OtpData {
  email?: string;
}

const ResetPassword: React.FC = () => {
  // hooks and calls declaration
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState<FormData>({
    email: "",
    verificationCode: "",
    newPassword: "",
  });
  const [otpData, setOtpData] = useState<OtpData>({
    email: "",
  });
  // handle submit action
  const handleOTPSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(resetPasswordapi(otpData)).then((res) => {
      if (res.payload?.error) {
        setError(res.payload?.error);
        setLoading(false);
      }
      if (res.payload?.result?.success) {
        setLoading(true);
        setError("");
        setFormData((prevData: any) => ({
          ...prevData,
          email: otpData.email,
        }));
      }
    });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(resetOtpapi(formData)).then((res) => {
      if (res.payload?.error) {
        setError(res.payload?.error);
      }
      if (res.payload?.message) {
        navigate("/login");
      }
    });
  };

  // handle input change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="reset">
      <div className="company">
        <img className="mobileLogo" src={CompanyLogo} />
        <div className="colorHeading">Sustainability </div>{" "}
        <div> Marketplace</div>
      </div>
      <img className="reset-image" src={login} alt="image" />
      <div className="main-part">
        <h2 className="heading">Reset Password</h2>
        <div className="body">
          {!loading ? (
            <form onSubmit={handleOTPSubmit}>
              <div className="formPart">
                <div className="rest-form-part">
                  <label htmlFor="email" className="label">
                    E-mail <span style={{ color: "red" }}>*</span>
                  </label>
                  <div className="resetOtp">
                    <input
                      type="email"
                      className="input"
                      name="email"
                      onChange={(e) =>
                        setOtpData((prevData) => ({
                          ...prevData,
                          email: e.target.value,
                        }))
                      }
                      value={otpData.email}
                    />
                    <button type="submit" className="submitOtp">
                      {loading ? "Loading..." : "Send OTP"}
                    </button>
                  </div>
                  {error ? <div className="error">{error}</div> : ""}
                </div>
              </div>
            </form>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="formPart">
                <div className="rest-form-part">
                  <label htmlFor="email" className="label">
                    E-mail <span style={{ color: "red" }}>*</span>
                  </label>
                  <div className="resetOtp">
                    <input
                      type="email"
                      className="input"
                      name="email"
                      onChange={handleChange}
                      value={formData.email}
                    />
                  </div>
                </div>
                <div className="rest-form-part">
                  <label htmlFor="Otp" className="label">
                    OTP <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    className="input"
                    name="verificationCode"
                    onChange={handleChange}
                    value={formData.verificationCode}
                  />
                </div>
                <div className="rest-form-part">
                  <label htmlFor="newPassword" className="label">
                    New Password <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="password"
                    className="input"
                    name="newPassword"
                    onChange={handleChange}
                    value={formData.newPassword}
                  />
                </div>
              </div>
              <h4 className="subheading">
                Don't have an account?{" "}
                <span>
                  {" "}
                  <Link className="signup-link" to="/signup">
                    Sign up
                  </Link>
                </span>{" "}
              </h4>
              {error ? <div className="error">{error}</div> : ""}
              <div className="captcha-part mt-1">
                <div className="buttonPart">
                  <button type="submit" className="loginbutton card-button">
                    Reset Password
                  </button>
                </div>
                {/* <span>&rarr;</span> */}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
