import "./PlanCard.scss";
import { addPlan, addToCart } from "../../redux/slice/cartSlice/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { insertCartDetails } from "../../redux/slice/cartSlice/cartApiSlice";
import { AppDispatch } from "../../redux/store";
import Check from "../../assets/svg/Check";
import Banks from "../../assets/svg/Banks";
import Insurer from "../../assets/svg/Insurer";
import AssetManager from "../../assets/svg/AssetManager";
import AssetOwner from "../../assets/svg/AssetOwner";
import { useState } from "react";

interface Cart {
  moduleName: string;
  modulePlan: string;
}

interface PlanCard {
  index: number;
  sector: string;
  mainHeading: string;
  setSelectedCard: any;
  logo?: any;
  title: string;
  content: Array<string>;
  price?: string;
  onClose?: any;
  handleCartbutton?: any;
  color: any;
  theme?: string;
  editplan?: boolean;
  editcart?:any;
}
const PlanCard: React.FC<PlanCard> = ({
  index,
  sector,
  mainHeading,
  setSelectedCard,
  logo,
  title,
  content,
  price,
  onClose,
  handleCartbutton,
  color,
  theme,
  editplan,
  editcart
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleSelectClick = () => {
   
      setSelectedCard(index);
      handleCartbutton();
      setSelectedCard(-1);
      const data: any = {
        sector: sector,
        items: [{ moduleName: mainHeading, modulePlan: title }],
      };
      dispatch(addToCart(data));
      dispatch(insertCartDetails(data));
      onClose();
  };
  const logos = [
    <Banks color={color} />,
    <Insurer color={color} />,
    <AssetManager color={color} />,
    <AssetOwner color={color} />,
  ];
  const [hovered, setHovered] = useState(false);
  return (
  <div className="SelectPlan" style={{ backgroundColor: `${hovered ? theme : "white"}` }}
  onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => setHovered(false)}>
     <div className="PlanCard" >
     
      <div className="logoPart">
        {logos[index]}
        {/* <img src={logo} alt="logo" className="logo"/> */}
      </div>
      <div className="cardTitle">{title}</div>
      <div className="contentpart">
        {content.map((item, index) => {
          return (
            <div key={index} className="contentrow">
              <Check color={color} />
              <div className="content">{item}</div>
            </div>
          );
        })}
      </div>
      </div>
      <div
        className="buttonContainer"
        style={{ backgroundColor: color, color: "white" }}
      >
        <button
          className="selectButton"
          onClick={handleSelectClick}
          style={{ backgroundColor: color, color: "white" }}
        >
          Add to Cart
        </button>
      </div>
   
  
  </div>
  );
};

export default PlanCard;
