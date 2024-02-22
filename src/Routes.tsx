import React from "react";
import { Route, Routes } from "react-router-dom";
import Modules from "./components/Home/Modules/Modules";
import Login from "./components/Login/Login";
import Accountverify from "./components/Accountverify/Accountverify";
import Signup from "./components/Signup/Signup";
import Sectors from "./ProductPlatform/Sectors/Sectors";
import ReadMoreCategory from "./ProductPlatform/ReadMore/ReadMoreCategory";
import ProductPlatform from "./ProductPlatform/ProductPlatform";
import ManageUser from "./phase2/ManageUser/ManageUser";
import ClimateJourney from "./phase2/ClimateJourney/ClimateJourney";
import Submission from "./ProductPlatform/Submission/Submission";
import ProtectedRoute from "./ProtectedRoute";
import Thankyou from "./ProductPlatform/Submission/ThankYou/ThankYou";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import ChangePassword from "./components/ChangePassword/ChangePassword";
import SubModules from "./components/Home/SubModules/SubModules";
import OrderHistory from "./components/UserProfile/OrderHistory/OrderHistory";

interface RouteConfig {
  path: string;
  element: React.ReactNode;
  exact?: boolean;
}

const routes: RouteConfig[] = [
  {
    path: "/",
    element: (
      <ProtectedRoute>
        {" "}
        <Modules />{" "}
      </ProtectedRoute>
    ),
  },
  { path: "/login", element: <Signup/> },
  { path: "/signup", element: <Signup /> },
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <Modules />
      </ProtectedRoute>
    ),
  },
  {
    path: "/persona",
    element: (
      <ProtectedRoute>
        <SubModules />
      </ProtectedRoute>
    ),
  },
  { path: "/accountverify", element: <Accountverify /> },
  {
    path: "/product-platform",
    element: (
      <ProtectedRoute>
        <ProductPlatform />
      </ProtectedRoute>
    ),
  },
  {
    path: "/sectors",
    element: (
      <ProtectedRoute>
        <Sectors />
      </ProtectedRoute>
    ),
  },
  {
    path: "/readmore",
    element: (
      <ProtectedRoute>
        <ReadMoreCategory />
      </ProtectedRoute>
    ),
  },
  {
    path: "/manageusers",
    element: <ManageUser />,
  },
  {
    path: "/submission",
    element: (
      <ProtectedRoute>
        {" "}
        <Submission />{" "}
      </ProtectedRoute>
    ),
  },
  {
    path: "/continueyourjouney",
    element: (
      <ProtectedRoute>
        {" "}
        <ClimateJourney />{" "}
      </ProtectedRoute>
    ),
  },
  {
    path: "/thankyou",
    element: (
      <ProtectedRoute>
        {" "}
        <Thankyou />{" "}
      </ProtectedRoute>
    ),
  },
  { path: "/resetpassword", element: <ResetPassword /> },
  { path: "/changepassword", element: <ChangePassword /> },
  {path:'/orderhistory', element:<OrderHistory/>},
];

const RouteConfig = ( {setUserName}:{setUserName:any}) => (
  <Routes>
    {routes.map((route, index) => (
      route.path=="/login"? <Route key={index} path={route.path} element={<Login setUserName={setUserName}/>}/>: <Route key={index} path={route.path} element={route.element}/>
    ))}
  </Routes>
);

export default routes;
export { RouteConfig };
