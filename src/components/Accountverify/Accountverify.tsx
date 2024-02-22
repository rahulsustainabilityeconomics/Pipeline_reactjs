import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectsignupResponse } from "../../redux/slice/userAuthSlice/Signup/signupDetails.selector";
import { AppDispatch } from "../../redux/store";
import { insertverifydetails } from "../../redux/slice/userAuthSlice/Accountverify/userVerifySlice";
import CompanyLogo from "../../assets/svg/company-logo.svg";
import { useNavigate } from "react-router-dom";
import login from "../../assets/svg/login.svg";
import "./Accountverify.scss";
import { resendcode } from "../../redux/slice/userAuthSlice/ResendCode/resendCodeSlice";

// component definition
const Accountverify: React.FC = () => {
  //hooks and varible declaration
  const reduxStore = useSelector((state: any) => state.userVerify);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const signupdata = useSelector(selectsignupResponse);
  const { result } = signupdata;
  const [verify, setVerify] = useState<string>("");

  //handle input change for verification code input
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setVerify(e.target.value);
  };
  // handle submit action for the account verification page
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = result.email;
    dispatch(
      insertverifydetails({
        email: email,
        code: verify,
      })
    ).then((res) => {
      if (res.payload?.result?.success == true) {
        setError("");
        navigate("/");
      }
      if (res.payload?.error) {
        setError(res.payload?.error);
      }
    });
  };

  const handleResend =()=>{
    dispatch(resendcode(result.email));
  }
  return (
    <div className="account-verify">
      <div className="company">
        <img className="mobileLogo" src={CompanyLogo} />
        <div className="colorHeading">Sustainability </div>{" "}
        <div> Marketplace</div>
      </div>
      <img className="login-image" src={login} alt="image" />
      <div className="verify-container">
        <div className="main">
          <div className="verify">Verify your Account</div>
          <div className="verification">
            We've send a verification code to your email.{" "}
            <span onClick={handleResend}>Resend code</span>
          </div>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="codepart">
              <label htmlFor="verify">
                Verification Code <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="number"
                name="verify"
                onChange={(e) => handleInput(e)}
                value={verify}
              />
              {error ? (
                  <div className="error">{error}</div>
                ) : (
                  ""
                )}
              <div className="buttonPart">
                <button type="submit" className="card-button mt-1">
                  {reduxStore.isLoading ? (
                    <div>Loading...</div>
                  ) : (
                    <div>Verify Account</div>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Accountverify;
