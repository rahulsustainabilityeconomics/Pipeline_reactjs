//auth api's

const authApis = {

}

const DashboardApi = {

}
const CartApi = {
    cartdetails:() =>`${process.env.REACT_APP_BASE_URL}/cart/getCart`,
    moduledetails:()=> `${process.env.REACT_APP_BASE_URL}/cart/getModules`,
    addtocart:() =>`${process.env.REACT_APP_BASE_URL}/cart/addToCart`,
    removefromcart:() =>`${process.env.REACT_APP_BASE_URL}/cart/removeFromCart`,
    checkout:() =>`${process.env.REACT_APP_BASE_URL}/cart/buyItems`
}

const manageUserApi = {
    addemployee:() =>`${process.env.REACT_APP_BASE_URL}/onboard/employee`,
    updateemployee:() =>`${process.env.REACT_APP_BASE_URL}/onboard/updateEmployee`,
    updateinvestee:() => `${process.env.REACT_APP_BASE_URL}/onboard/updateInvestee`,
    resendinvite:() =>`${process.env.REACT_APP_BASE_URL}/onboard/resendTemporaryPassword`,
    addinvestee:() =>`${process.env.REACT_APP_BASE_URL}/onboard/investee`,
    getuserdetails:() =>`${process.env.REACT_APP_BASE_URL}/onboard/getEmployeesAndInvestees`,
    deleteuser:()=>`${process.env.REACT_APP_BASE_URL}/admin/deleteUser`,
    uploademployee:() => `${process.env.REACT_APP_BASE_URL}/onboard/employeesList`,
    confirmemployeeonboardingdetails:()=>`${process.env.REACT_APP_BASE_URL}/onboard/confirmEmployeeInvesteeOnboarding`    
}


// const NPVDetails = {
//     getNPVDetails: (invester_name: string) => `${process.env.REACT_APP_BASE_URL}/api/v1/pcaf/get-asset-class-summary?investor_name=${invester_name}`
// }


// Authentication API
const userLoginDetails = {
    logindetails: () => `${process.env.REACT_APP_BASE_URL}/auth/login`,
    signupdetails: () => `${process.env.REACT_APP_BASE_URL}/auth/signup`,
    userverifydetails:()=>`${process.env.REACT_APP_BASE_URL}/auth/verify`,
    resetpassworddetails:()=>`${process.env.REACT_APP_BASE_URL}/auth/forgotPassword`,
    resetotppassworddetails:()=>`${process.env.REACT_APP_BASE_URL}/auth/confirmPasswordReset`,
    changepassworddetails:()=>`${process.env.REACT_APP_BASE_URL}/auth/changePassword`,
    logoutdetails:()=>`${process.env.REACT_APP_BASE_URL}/auth/signout`,
    resendcode:()=>`${process.env.REACT_APP_BASE_URL}/auth/resendCode`
}


const path = {
    ...authApis,
    ...DashboardApi,
    ...userLoginDetails,
    ...CartApi,
    ...manageUserApi
}

export default path;
