import React, { useEffect, useState } from "react";
import "./ClimateJourney.scss";
import { Link, useLocation } from "react-router-dom";
import Plans from "./Plans";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { getModuleDetails } from "../../redux/slice/cartSlice/cartApiSlice";

const ClimateJourney = () => {
  const location = useLocation();
  const sector = location.state.sector;
  const dispatch = useDispatch<AppDispatch>();
  const [cart, setCart] = useState([]);
  useEffect(() => {
    dispatch(getModuleDetails(null)).then((result: any) => {
      setCart(
        result.payload?.data.filter((cart: any) => cart.sector == sector)[0]
      );
    });
  }, []);
  return (
    <div className="container">
      <div className="content">
        <h3> Your Climate Journey</h3>
        <div>
          <Link
            className="manage-users"
            to={{
              pathname: "/manageusers",
            }}
            state={{ sector: sector, cart: cart }}
          >
            <button>Manage Users</button>
          </Link>
        </div>
      </div>
      <div className="sub-container">
        <Plans sector={sector} cart={cart} />
      </div>
    </div>
  );
};

export default ClimateJourney;
