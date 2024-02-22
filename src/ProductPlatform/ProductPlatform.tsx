import { useEffect, useState, useRef } from "react";
import CompanyLogo from "../assets/svg/CompanyLogo";
import Card from "./Card/Card";
import arrowbackward from "../assets/svg/arrow-backward.svg";
import arrow from "../assets/svg/arrow-left.svg";
import Popup from "./Popup/Popup";
import BackgroundScreen from "./BackgroundScreen/BackgroundScreen";
import { cardData } from "./Card/CardObject";
import Addcart from "./Addcart/Addcart";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  updateCart,
} from "../redux/slice/cartSlice/cartSlice";
import {
  getCartDetails,
  getModuleDetails,
  removeCartDetails,
} from "../redux/slice/cartSlice/cartApiSlice";
import { AppDispatch } from "../redux/store";
import { GhgItems } from "../components/GhgAccounting/gfgjson";
import { Link, useLocation } from "react-router-dom";
import breadcrumbarrow from "../assets/svg/breadcrumb-right.svg";
import "./ProductPlatform.scss";

// defining the cart module colors
type cartcolors = {
  title: string;
  text: string;
  background: string;
};
interface Module {
  moduleName: string;
  modulePlan: string;
}
interface Cart {
  sector: string;
  items: Module[];
}
interface RemoveFromCartData {
  sector: string;
  moduleNames: string[];
}

const ProductPlatform = () => {
  //variables and hooks declaration
  const initialColors = [
    "#EAEAEA",
    "#EAEAEA",
    "#EAEAEA",
    "#EAEAEA",
    "#EAEAEA",
    "#EAEAEA",
    "#EAEAEA",
    "#EAEAEA",
    "#EAEAEA",
    "#EAEAEA",
  ];
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const [showPopup, setShowPopup] = useState(false);
  const [editCart, setEditCart] = useState<Module[]>([]);
  const popupRef = useRef<HTMLDivElement>(null);
  // from home we get the header title as banks, insurer, etc in our state.
  const headingTitle = location.state?.title ? location.state.title : "Bank";

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

  const addedcartredux = useSelector(
    (state: any) =>
      state.cart.sectorcart?.filter(
        (cart: any) => cart.sector === headingTitle
      )[0]
  );
  // from continue you journey section choosing the module which needs to edit plan
  const [editElement, setEditElement] = useState(
    location.state?.id ? location.state.id : 0
  );

  // all the products list that are bought
  const boughtProduct = location.state?.userData ? location.state.userData : [];
  const updateColor: any = [];
  const categoryTagColor = [
    "#A9BDEC",
    "#FABE9C",
    "#6DC5E1",
    "#77E7E2",
    "#FF9898",
    "#B2A9EC",
    "#B2A9EC",
  ];

  // get the already bought products from the get modules api
  useEffect(() => {
    dispatch(getModuleDetails(null)).then((result: any) => {
      setEditCart(
        result.payload?.data.filter(
          (cart: any) => cart.sector == headingTitle
        )[0]?.items
      );
    });
  }, []);

  // get the current items already added to the cart
  useEffect(() => {
    dispatch(getCartDetails(null)).then((result: any) => {
      dispatch(updateCart(result.payload.data));
      const getSectorCart: any = result.payload.data.filter(
        (item: any) => item.sector === headingTitle
      )[0];
      const updatedCartColors = [...cartcolors];
      for (let i = 0; i < getSectorCart?.items.length; i++) {
        let index = initialcard.indexOf(getSectorCart.items[i].moduleName);
        updatedCartColors[index].text = "#049573";
        updatedCartColors[index].background = "#D5F4ED";
      }
      setCartColors(updatedCartColors);
    });
  }, []);

  // if editing element then populate color till that module
  const initialCartColors: cartcolors[] = [
    {
      title: "GHG Accounting",
      text: "#0C81A8",
      background: "#FFF",
    },
    {
      title: "Target Setting",
      text: "#0C81A8",
      background: "#FFF",
    },
    {
      title: "Climate Scenario",
      text: "#0C81A8",
      background: "#FFF",
    },
    {
      title: "Decarbonisation Pathways",
      text: "#0C81A8",
      background: "#FFF",
    },
    {
      title: "Transition Financing",
      text: "#0C81A8",
      background: "#FFF",
    },
    {
      title: "MarketPlace",
      text: "#0C81A8",
      background: "#FFF",
    },
    {
      title: "Reporting",
      text: "#0C81A8",
      background: "#FFF",
    },
  ];

  // hooks and variable declaration
  const [cartcolors, setCartColors] = useState<cartcolors[]>(initialCartColors);
  const [isAddedToCart, setIsAddedToCart] = useState<boolean>(false);
  const [selectedCard, setSelectedCard] = useState(-1);
  const [colors, setColors] = useState(updateColor);
  const [nextClickCount, setNextClickCount] = useState(editElement);
  const [carddata, setCardData] = useState(cardData[editElement]);
  const [videoUrl, setvideoUrl] = useState("");
  const [heading, setHeading] = useState(`${headingTitle}`);
  // if any element is already bought
  useEffect(() => {
    for (let i = 0; i <= 7; ++i) {
      if (i < nextClickCount) {
        updateColor.push(categoryTagColor[i]);
      } else if (nextClickCount == 6) {
        updateColor.push(categoryTagColor[i]);
      } else {
        updateColor.push("#EAEAEA");
      }
      setColors(updateColor);
    }
    setCardData(cardData[nextClickCount]);
  }, [editElement, nextClickCount]);

  const changeHeading = () => {
    setHeading("Build your Custom Solution Journey");
  };

  // handler for product overview section
  const handleButtonClick = (text: any) => {
    setvideoUrl(text);
    setShowPopup(true);
  };
  // close the popup
  const closePopup = () => {
    setShowPopup(false);
  };
  // handler for visiting next product
  const handleClickNext = () => {
    const updatedColors = [...colors];
    if (nextClickCount === 0) {
      updatedColors[0] = "#A9BDEC";
    } else if (nextClickCount === 1) {
      updatedColors[1] = "#FABE9C";
    } else if (nextClickCount === 2) {
      updatedColors[2] = "#6DC5E1";
    } else if (nextClickCount === 3) {
      updatedColors[3] = "#77E7E2";
    } else if (nextClickCount === 4) {
      updatedColors[4] = "#FF9898";
    } else if (nextClickCount === 5) {
      updatedColors[5] = "#B2A9EC";
      updatedColors[6] = "#B2A9EC";
    }

    setColors(updatedColors);
    setNextClickCount((prev: any) => prev + 1);
    setCardData(cardData[nextClickCount + 1]);
  };
  // handler for previous object
  const handleClickPrevious = () => {
    const updatedColors = [...colors];
    if (nextClickCount === 1) {
      updatedColors[0] = initialColors[0];
    } else if (nextClickCount === 2) {
      updatedColors[1] = initialColors[1];
    } else if (nextClickCount === 3) {
      updatedColors[2] = initialColors[2];
    } else if (nextClickCount === 4) {
      updatedColors[3] = initialColors[3];
    } else if (nextClickCount === 5) {
      updatedColors[4] = initialColors[4];
    } else if (nextClickCount === 6) {
      updatedColors[5] = initialColors[11];
      updatedColors[6] = initialColors[12];
    }
    setColors(updatedColors);
    setCardData(cardData[nextClickCount - 1]);
    setNextClickCount((prev: any) => prev - 1);
  };

  const initialcard: string[] = [
    "GHG Accounting",
    "Target Setting",
    "Climate Scenario Analysis",
    "Decarbonisation Pathways",
    "Transition Financing",
    "Marketplace (Carbon Market)",
    "Reporting",
  ];
  // useEffect to check if the selected product is already bought or not
  useEffect(() => {
    let selectedTitle = initialcard[nextClickCount];
    const check = addedcartredux?.items?.some((item: any) => {
      return item.moduleName === selectedTitle;
    });
    if (check) {
      setIsAddedToCart(true);
    } else {
      setIsAddedToCart(false);
    }
  }, [nextClickCount, addedcartredux]);

  useEffect(() => {
    if (editCart && editCart.length > 0) {
      const updatedCartColors = [...cartcolors];
      for (let i = 0; i < editCart?.length; i++) {
        let index = initialcard.indexOf(editCart[i].moduleName);
        updatedCartColors[index].text = "#049573";
        updatedCartColors[index].background = "#D5F4ED";
      }
      setCartColors(updatedCartColors);
    }
  }, [editCart]);

  //useEffect to update the cart colors for the items bought and stored in redux store
  useEffect(() => {
    if (editCart.length == 0) {
      const updatedCartColors = [...cartcolors];
      for (let i = 0; i < addedcartredux?.items.length; i++) {
        let index = initialcard.indexOf(addedcartredux?.items[i].moduleName);
        updatedCartColors[index].text = "#049573";
        updatedCartColors[index].background = "#D5F4ED";
      }
      setCartColors(updatedCartColors);
    }
  }, []);
  // handle for add to cart funcitonality
  const handleCartbutton = () => {
    const updatedCartColors = [...cartcolors];
    for (let i = 0; i <= initialcard.length; i++) {
      const index = i;
      if (nextClickCount === index) {
        const selectedTitle = initialcard[index];
        const check = addedcartredux?.items.some((item: any) => {
          return item.moduleName === selectedTitle;
        });
        if (!check) {
          updatedCartColors[index].text = "#049573";
          updatedCartColors[index].background = "#D5F4ED";
          // const data: Cart = {
          //   sector: headingTitle,
          //   items: [{ moduleName: selectedTitle, modulePlan: "dummy" }],
          // };
          // console.log(data);
          // dispatch(addToCart(data));
        }
        // else {
        //   updatedCartColors[index].text = "#0C81A8";
        //   updatedCartColors[index].background = "#FFF";
        //   const data: Cart = {
        //     sector: headingTitle,
        //     items: [{ moduleName: selectedTitle, modulePlan: "dummy" }],
        //   };
        //   console.log("removing from cart")
        //   dispatch(removeFromCart(data));
        //   const removeCartItem: object = { moduleId: selectedTitle };
        //   dispatch(removeCartDetails(removeCartItem));
        // }
        // break;
      }
    }
    setCartColors(updatedCartColors);
    setIsAddedToCart((prev) => !prev);
  };

  const handleCartDelete = (item: any) => {
    const data: RemoveFromCartData = {
      sector: headingTitle,
      moduleNames: [item.moduleName],
    };
    dispatch(removeFromCart(data));
    dispatch(removeCartDetails(data));
    const index = initialcard.indexOf(item.moduleName);
    const updatedCartColors = [...cartcolors];
    updatedCartColors[index].text = "#0C81A8";
    updatedCartColors[index].background = "#FFF";
    setCartColors(updatedCartColors);
  };

  return (
    <div className="ProductPlatform">
      <div className="breadcrumb">
        <li>
          <Link
            to={{
              pathname: "/home",
            }}
          >
            Home
          </Link>
        </li>
        <img src={breadcrumbarrow} alt="" />
        <li>
          {" "}
          <Link
            to={{
              pathname: "/persona",
            }}
          >
            Persona
          </Link>
        </li>
        <img src={breadcrumbarrow} alt="" />
        <li>
          <Link to={{ pathname: "/product-platform" }} className="bank">
            {headingTitle}
          </Link>
        </li>
      </div>
      <div className="main-heading">
        Welcome to Net Zero{" "}
        <span className="colorHeading">{heading} Platform</span>
      </div>
      <div className="sub-heading">
        Enable the end-to-end transition towards sustainable business with
        specialized products designed for your specific needs.
      </div>
      <div className="Product-details">
        <div className="company-logo">
          <CompanyLogo
            colors={colors}
            cartcolors={cartcolors}
            nextClickCount={nextClickCount}
            setNextClickCount={setNextClickCount}
            setEditElement={setEditElement}
          />
        </div>
        <div className="card-detail">
          <div className="card-data">
            <Card
              index={nextClickCount}
              sector={headingTitle}
              cardData={carddata}
              onButtonClick={() => handleButtonClick(carddata.videoUrl)}
              handleCartbutton={handleCartbutton}
              isAddedToCart={isAddedToCart}
              boughtProduct={boughtProduct}
              setSelectedCard={setSelectedCard}
              editcart={editCart}
            />
            {showPopup && (
              <BackgroundScreen>
                <div ref={popupRef} className="dialogue">
                  <Popup content={videoUrl} onClose={closePopup} />
                </div>
              </BackgroundScreen>
            )}
          </div>
          <div className="button-container">
            <div className="buttons">
              {nextClickCount != 0 && (
                <button className="Previous" onClick={handleClickPrevious}>
                  <img src={arrowbackward} alt="" />
                  Previous
                </button>
              )}
              <button
                className="Next"
                onClick={() => {
                  handleClickNext();
                }}
                disabled={nextClickCount === 6}
              >
                Next
                <img src={arrow} alt="" />
              </button>
            </div>
            <div className="complete-journey">
              <Link
                className="my-cart"
                to={{
                  pathname: "/submission",
                }}
                state={{ sector: headingTitle }}
              >
                {nextClickCount == 6 && (
                  <button type="button" className="submit">
                    Your Final Journey
                  </button>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="buttonPart">
        <div className="add-cart">
          <div className="selected-product">Selected products:</div>

          <Addcart
            addedcart={addedcartredux}
            editcart={editCart}
            handleCartDelete={handleCartDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductPlatform;
