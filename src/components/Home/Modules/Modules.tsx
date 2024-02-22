// import statements
import Cards from "../../CommonCards/Cards/Cards";
import { useState } from "react";
import { ModuleItems } from "../ModulesContent";
import "./Modules.scss";


// Module component containing all the persona cards
const Modules = () => {
  // defining the state for card selection
  const [selectedCard, setSelectedCard] = useState<number>(0);
  return (
    <>
      <div className="parentModule">
        <div className="headingModule">Chart your climate course</div>
        <div className="subHeadingModule">
          Create your unique climate solution, encompassing all your
          requirements, right here.
        </div>

        <div className="cardDiv">
          <div className="carditems">
            {ModuleItems.slice(0, 6).map((item, index) => {
              return (
                <Cards
                  key={item.id}
                  title={item.title}
                  content={item.content}
                  image={item.url}
                  setSelectedCard={setSelectedCard}
                  selectedCard={selectedCard}
                  id={item.id}
             
             
                />
              );
            })}
          </div>
          <div className="carditemsSecond">
            <div className="secondRow">
              {ModuleItems.slice(6).map((item, index) => {
                return (
                  <Cards
                    key={item.id}
                    title={item.title}
                    content={item.content}
                    image={item.url}
                    setSelectedCard={setSelectedCard}
                    id={item.id}
                    selectedCard={selectedCard}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modules;
