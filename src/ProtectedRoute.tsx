import React from 'react'
import { Navigate, redirect, useNavigate } from 'react-router-dom'

const ProtectedRoute = ({children}:any) => {
  const navigate = useNavigate();
  if (localStorage.getItem("idToken")) {
    return children;
  }
  
  return <Navigate to="/login"/>;
  
}

export default ProtectedRoute