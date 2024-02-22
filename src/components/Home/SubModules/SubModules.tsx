import React, { useState } from "react";
import Cards from "../../CommonCards/Cards/Cards";
import FinanceCards from "../../CommonCards/FinanceCards/FinanceCards";
import FinanceLogo from "../../../assets/financeAnimation/financeLogo.svg";
import { ModuleItems } from "../ModulesContent";
import { FinanceCardsItem } from "../ModulesContent";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import breadcrumbarrow from "../../../assets/svg/breadcrumb-right.svg";
import "./SubModules.scss";
const SubModules = () => {
  const location = useLocation();
  const selectedCard = location.state ? location.state.selectedCard : 1;
  const [chosenCard, setChosenCard] = useState(selectedCard);

  return (
    <div className="parentsubmaincontainer">
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
          <Link
            to={{
              pathname: "/persona",
            }}
            className="persona"
          >
            Persona
          </Link>
        </li>
      </div>
      <div className="parentSubModule">
        <div className="headingModule">Chart your climate course</div>
        <div className="subHeadingModule">
          Create your unique climate solution, encompassing all your
          requirements, right here.
        </div>
        <div className="details">
          <div className="leftColumn">
            {ModuleItems.filter((card: any) => card.id !== chosenCard).map(
              (item: any, index: number) => {
                return (
                  <Cards
                    key={item.id}
                    title={item.title}
                    content={item.content}
                    image={item.url}
                    setSelectedCard={setChosenCard}
                    selectedCard={chosenCard}
                    id={item.id}
                  />
                );
              }
            )}
          </div>

          <div
            className="rightColumn"
            style={{
              backgroundImage: `url(${ModuleItems[chosenCard - 1].background})`,
            }}
          >
            <img src={FinanceLogo} alt="FinanceLogo" className="categoryLogo" />
            <div className="fintext">{ModuleItems[chosenCard - 1].title}</div>
            <div
              className="rightcolumncards"
              style={{
                gridTemplateColumns: `repeat(${
                  FinanceCardsItem[chosenCard - 1].length
                }, 1fr)`,
              }}
            >
              {FinanceCardsItem[chosenCard - 1].map(
                (item: any, index: number) => {
                  return (
                    <FinanceCards
                      key={item.id}
                      logo={item.logo}
                      title={item.title}
                      content={item.content}
                      color={ModuleItems[chosenCard - 1].color}
                    />
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubModules;
