import React, { useState, useEffect, useRef } from "react";
import "./Card.scss";
import plusblue from "../../assets/svg/plus.svg";
import plusgreen from "../../assets/svg/plus-green.svg";
import arrowforward from "../../assets/svg/arrow-left.svg";
import BackgroundScreen from "../BackgroundScreen/BackgroundScreen";
import ProductPlanPopup from "../ProductPlanPopup/ProductPlanPopup";
import { Link } from "react-router-dom";
const Card = ({
  index,
  sector,
  cardData,
  onButtonClick,
  handleCartbutton,
  isAddedToCart,
  boughtProduct,
  setSelectedCard,
  editcart
}: {
  index: any;
  sector: string;
  cardData: any;
  onButtonClick: any;
  handleCartbutton: any;
  isAddedToCart: boolean;
  boughtProduct: any;
  setSelectedCard: any;
  editcart:any
}): JSX.Element => {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const handleshareclick = () => {
    setShowPopup(true);
  };
  const outsidepopup = (event: any) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setShowPopup(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", outsidepopup);
    return () => {
      document.removeEventListener("mousedown", outsidepopup);
    };
  }, []);
  const boughtModuleNames = boughtProduct.items?.map(
    (item: any) => item.moduleName
  );
  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    }
  };

  const handleAddToCartClick = () => {
    if (!isAddedToCart) setShowPopup(true);
  };
  const handleEditClick = () => {
    setShowPopup(true);
  };
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="card">
      {showPopup && !isAddedToCart && (
        <BackgroundScreen>
          <ProductPlanPopup
            index={index}
            sector={sector}
            mainHeading={cardData.mainheading}
            setSelectedCard={setSelectedCard}
            onClose={closePopup}
            handleCartbutton={handleCartbutton}
          />
        </BackgroundScreen>
      )}
      <div className="card-content-data">
        <h1 className="main-heading1">{cardData.mainheading}</h1>
        <h2 className="subheading">{cardData.subheading1}</h2>

        <h2 className="content1">{cardData.content1}</h2>
        <h2 className="subheading2">{cardData.subheading2}</h2>

        <h2 className="content2">{cardData.content2}</h2>
        <h2 className="subheading3">{cardData.subheading3}</h2>

        <h2 className="content3">{cardData.content3}</h2>
      </div>

      {/* <button onClick={handleButtonClick}>{button1}</button> */}
      {!boughtModuleNames?.includes(cardData.mainheading) ? (
        <div className="card-buttons">
          <Link className="Read-more" to={"/readmore"} state={index}>
            Read More
            <img src={arrowforward} alt="" />
          </Link>
          <button className="product-overview" onClick={handleButtonClick}>
            {cardData.button1}
            <img src={plusgreen} alt="" />
          </button>
          <button className="add-to-cart" onClick={handleAddToCartClick}>
            {isAddedToCart ? "Added to Cart" : "Select Plan"}
            <img src={plusblue} alt="" />
          </button>
        </div>
      ) : (
        <div className="card-buttons">
          {showPopup && (
            <BackgroundScreen>
              <ProductPlanPopup
                index={index}
                sector={sector}
                mainHeading={cardData.mainheading}
                setSelectedCard={setSelectedCard}
                onClose={closePopup}
                handleCartbutton={handleCartbutton}
                editplan={true}
                editcart={editcart}
              />
            </BackgroundScreen>
          )}
          <button className="add-to-cart" onClick={handleEditClick}>
            Edit plan
            <img src={plusblue} alt="" />
          </button>
        </div>
      )}
    </div>
  );
};
export default Card;
