import FoodCard from './FoodCard'; // Adjust the path as needed


const App = () => {

  const cardData = [
    {
      imageSrc: '/src/assets/food1.jpg',
      title: 'Card Title 1',
      description: 'This is the card description 1.'
    },
    {
      imageSrc: '/src/assets/food2.jpeg',
      title: 'Card Title 2',
      description: 'This is the card description 2.'
    },
    {
      imageSrc: '/src/assets/food4.jpg',
      title: 'Card Title 3',
      description: 'This is the card description 3.'
    },
    {
      imageSrc: '/src/assets/food3.jpg',
      title: 'Card Title 4',
      description: 'This is the card description 4.'
    }
  ];


  return (
    <div className="app">

      {cardData.map((card, index) => (
        <div key={index} className="my-food">
          <FoodCard
            imageSrc={card.imageSrc}
            title={card.title}
            description={card.description}
          />
        </div>
      ))}
    </div>
  );
};

export default App;
