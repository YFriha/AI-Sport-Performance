import { useParams } from 'react-router-dom';

const FoodDetails = () => {
  const { imageSrc, title, description } = useParams();

  return (
    <div className="food-details">
      <img src={imageSrc} alt={title} />
      <div className="details-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FoodDetails;
