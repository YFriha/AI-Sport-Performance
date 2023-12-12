import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const FoodCard = ({ imageSrc, title, description }) => {
  const navigate = useNavigate();

  const routeChange = () => {
    const path = `/fooddetails/${encodeURIComponent(
      imageSrc
    )}/${encodeURIComponent(title)}/${encodeURIComponent(description)}`;
    navigate(path);
  };
  return (
    <div className="card">
      <img src={imageSrc} alt={title} className="card-image img-responsive" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <Button
          className="card-button"
          
          onClick={routeChange}
          style={{
            backgroundColor:"white",
            color: "black",
            border: "2px solid #9cd6d1",
            borderRadius: " 4px",
            padding: " 8px 16px",
            cursor: "pointer",
            transition: "transform 0.6s ease-in-out",
            marginTop: "20px",
          }}
        >
          More details
        </Button>
      </div>
    </div>
  );
};

export default FoodCard;
