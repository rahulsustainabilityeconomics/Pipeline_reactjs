import "./FinanceCards.scss";
import { Link } from "react-router-dom";
import Check from "../../../assets/svg/Check";

interface FinanceCards {
  logo?: string;
  title?: string;
  content: Array<string>;
  price?: string;
  color?:string;
}

const FinanceCards: React.FC<FinanceCards> = ({
  logo,
  title,
  content,
  price,
  color
}) => {
  return (
   <div className="Finance">
     <div className="moduleFinance">
      <div className="logoPart">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="cardtitle">{title}</div>
      <div className="contentpart">
        {content.map((item, index) => {
          return (
            <div key={index} className="contentrow">
              <Check color={color}/>
              <div className="content">{item}</div>
            </div>
          );
        })}
      </div>
      
    </div>
    <div className="buttonContainer" style={{backgroundColor:color}}>
        <Link
          to="/product-platform"
          state={{ title: title }}
          className="selectButton"
          style={{backgroundColor:color}}
        >
          Select
        </Link>
      </div>
   </div>
  );
};

export default FinanceCards;
