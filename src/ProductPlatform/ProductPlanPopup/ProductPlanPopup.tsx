import React, { useState } from "react";
import "./ProductPlanPopup.scss";
import { GhgItems } from "../../components/GhgAccounting/gfgjson";
import GhgBackground from "../../assets/animations/ghgaccounting.gif";
import TargetSetting from "../../assets/animations/targetsetting.gif";
import ClimateScenario from "../../assets/animations/climatescenario.gif";
import PlanCard from "../../ProductPlatform/PlanCard/PlanCard";
import DecarbonizationPathway from "../../assets/animations/decarbonization.gif";
import TransitionFinancing from "../../assets/animations/transition.gif";
import Marketplace from "../../assets/animations/marketplace.gif";
import Reporting from "../../assets/animations/reporting.gif";
import Close from "../../assets/svg/Close";
const ProductPlanPopup = ({
  index,
  sector,
  mainHeading,
  setSelectedCard,
  onClose,
  handleCartbutton,
  editplan,
  editcart
}: {
  index: any;
  sector:string;
  mainHeading: any;
  setSelectedCard: any;
  onClose: any;
  handleCartbutton: any;
  editplan?:any;
  editcart?:any;
}) => {
  const [indexNumber, setIndexNumber] = useState<number>(index);
  const backgroundGif = [
    GhgBackground,
    TargetSetting,
    ClimateScenario,
    DecarbonizationPathway,
    TransitionFinancing,
    Marketplace,
    Reporting,
  ];
  const colors = [
    "#7B5ECA",
    "#499F3A",
    "#407EB7",
    "#D17B4A",
    "#3A8D4D",
    "#D266CE",
    "#AC5252",
  ];
  const hovercolor = [
    "#F2EDFF",
    "#EBFFEC",
    "#E1F1FF",
    "#FFF3EC",
    "#F0FFF4",
    "#FFEFFE",
    "#FFE5E5",
  ];
  return (
    <div className="addToCartPopup">
      <div
        className="productplanContainer"
        style={{ backgroundImage: `url(${backgroundGif[index]})` }}
      >
        <div className="headerContainer">
          <div></div>
          <button className="popup-closeButton" onClick={onClose}>
            <div className="popup-cross">
              {" "}
              <Close color={colors[indexNumber]} />
            </div>
          </button>
        </div>

        <div className="fintext" style={{ color: colors[index] }}>
          {mainHeading}
        </div>
        <div className="card-part">
          <div className="rightcolumncards mt-1">
            {GhgItems[indexNumber].details.map((item, xandex) => {
              return (
                <PlanCard
                  key={xandex}
                  theme={hovercolor[index]}
                  onClose={onClose}
                  sector={sector}
                  mainHeading={mainHeading}
                  index={xandex}
                  setSelectedCard={setSelectedCard}
                  logo={item.logo}
                  title={item.title}
                  content={item.content}
                  price={item.price}
                  handleCartbutton={handleCartbutton}
                  color={colors[indexNumber]}
                  editplan={editplan}
                  editcart={editcart}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPlanPopup;
