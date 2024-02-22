// import statements
import { useNavigate } from "react-router-dom";
import "./Cards.scss";

// specifing the props interface datatype
interface cardprops {
  title: string;
  content: string;
  image: string;
  setSelectedCard: any;
  id: number;
  selectedCard?: number;
  index?: number;
}

// cards component for module section
const Cards: React.FC<cardprops> = ({
  title,
  content,
  image,
  setSelectedCard,
  id,
  selectedCard,
  index,
}) => {
  // defining state and hooks
  const navigate = useNavigate();

  // Card click handler to select the card and navigate to submodules
  const handleCardClick = (id: number, indexNumber: any) => {
    setSelectedCard(id);
    navigate("/persona", { state: { selectedCard: id } });
  };
  return (
    <div
      className={`ModuleCards ${selectedCard === id ? "active" : ""}`}
      style={{ backgroundImage: `url(${image})` }}
      onClick={() => handleCardClick(id, index)}
    >
      <div className="cardContent">
        <div className="title">{title}</div>
        <div className="content">{content}</div>
      </div>
    </div>
  );
};

export default Cards;
