import React, { useEffect, useState } from "react";
import "./Sectors.scss"; // Create a CSS file for styling the popup.
import FirstSector from "../../assets/svg/firstSector.svg";
import SecondSector from "../../assets/svg/secondSector.svg";
import Arrow from "../../assets/svg/arrow-right.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartDetails, getModuleDetails } from "../../redux/slice/cartSlice/cartApiSlice";
import { AppDispatch } from "../../redux/store";
interface Module {
  moduleName: string;
  modulePlan: string;
}
interface Cart {
  sector: string;
  items: Module[];
}
const Sectors = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [sector, setSector] = useState([]);
  //get the cart details for the particular sector
  useEffect(() => {
    dispatch(getModuleDetails(null)).then((result: any) => {
      setSector(result.payload?.data.map((cart: Cart) => cart.sector));
    });
  }, []);

  return (
    <div className="sectorContainer">
      {sector.map((sector: any, index: number) => {
        return (
          sector && (
            <Link
              key={index}
              className="manage-users"
              to={{
                pathname: "/continueyourjouney",
              }}
              state={{ sector: sector }}
            >
              <div className="cardContainer">
                <img src={FirstSector} alt="x" />
                <div className="sectorName">Net Zero {sector}</div>
                <div className="sectorDescription">
                  Prevent or reduce carbon from being emitted into the
                  atmosphere
                </div>
                <img className="arrow" src={Arrow} alt="x" />
              </div>
            </Link>
          )
        );
      })}
    </div>
  );
};

export default Sectors;
