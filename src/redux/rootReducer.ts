import { combineReducers } from "@reduxjs/toolkit";
import signupReducer from "./slice/userAuthSlice/Signup/signupSlice";
import userVerifyReducer from "./slice/userAuthSlice/Accountverify/userVerifySlice"
import cartReducer from "./slice/cartSlice/cartSlice"
import userLoginReducer from "./slice/userAuthSlice/Login/userLoginSlice"
import cartDetailsReducer from "./slice/cartSlice/cartApiSlice"
import employeeDetailsReducer from "./slice/manageUserSlice/Employee/employeeSlice"
import employeeDetailsAPIReducer from "./slice/manageUserSlice/Employee/employeeApiSlice"
import investeeDetailsReducer from "./slice/manageUserSlice/Investee/investeeSlice"
import investeeDetailsAPIReducer from "./slice/manageUserSlice/Investee/investeeApiSlice"
import getUserDetailsAPIReducer  from "./slice/manageUserSlice/Employee/employeeGetApiSlice";
import resendCodeReducer from "./slice/userAuthSlice/ResendCode/resendCodeSlice";
import ConfirmOnboardingReducer from "./slice/manageUserSlice/ConfirmOnboardingSlice";
export const rootReducer = combineReducers({
    signupDetails: signupReducer,
    userVerify: userVerifyReducer,
    cart:cartReducer,
    cartApi: cartDetailsReducer,
    userLogin: userLoginReducer,
    employeeDetails: employeeDetailsReducer,
    employeeDetailsApi: employeeDetailsAPIReducer,
    investeeDetails:investeeDetailsReducer,
    investeeDetailsApi: investeeDetailsAPIReducer,
    getUserDetailsApi: getUserDetailsAPIReducer,
    resendCodeDetails: resendCodeReducer,
    confirmEmployeeOnboardDetails: ConfirmOnboardingReducer
})



