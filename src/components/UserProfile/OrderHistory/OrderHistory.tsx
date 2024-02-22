import { useEffect, useState } from "react";
import "./OrderHistory.scss";
import { getModuleDetails } from "../../../redux/slice/cartSlice/cartApiSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";

const UserProfile = () => {
  const [orders, setOrders] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);
  const [selectedSector, setSelectedSector] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getModuleDetails(null)).then((result: any) => {
      setOrders(result.payload?.data);
      
    });
  }, []);

  const handleSectorClick = (sector: string) => {
    setSelectedSector(sector);
    const currentOrder: any = orders.find((item: any) => item.sector == sector);
    console.log(currentOrder?.items);
    setOrderHistory(currentOrder?.items);
  };
  console.log(orders)
  return (
    <div className="orderHistory">
      <div className="heading">Your Purchases</div>
      <div className="subheadingrow">
      <div className="subheading">
        <div className="sector">
          {orders?.map((item: any, index) => (
            <div
              className="sectorName"
              onClick={() => handleSectorClick(item.sector)}
            >
              Net-Zero {item.sector}
            </div>
          ))}
        </div>
       
      </div>
      <div className="contact">
        <button>Contact Support</button>
      </div>
      </div>
      <div className="orders">
        {
            orderHistory.map((item:any,index) => <div className="order"><div className="moduleName">{item.moduleName}</div><div className="modulePlan">{item.modulePlan}</div></div>)
        }
      </div>
    </div>
  );
};

export default UserProfile;
