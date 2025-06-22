import { useState, useContext } from 'react';
import { StoreContext } from '../../context/storeContext';
import FoodItem from '../FoodItem/FoodItem';
import PropTypes from 'prop-types';


const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  // State to track the number of items to display
  const [visibleItems, setVisibleItems] = useState(6);

  // Function to handle the "Show More" button click
  const handleShowMore = () => {
    setVisibleItems(food_list.length); // Show all items
  };

  FoodDisplay.propTypes = {
  category: PropTypes.string.isRequired,
};

  return (
    <div className="food-display mt-8 px-4 sm:px-8 md:px-11">
  <div
    id="menu"
    className="food-display-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-[20px] mt-8"
  >
    {food_list.slice(0, visibleItems).map((item, index) => {
      if (category === "Hemmesi" || category === item.category) {
        return (
          <FoodItem
            key={index}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
            className="w-full h-[442px]"
          />
        );
      }
    })}
  </div>

  {/* Show More Button */}
  {visibleItems < food_list.length && (
    <div className="flex justify-center items-center mt-6">
      <button
        onClick={handleShowMore}
        className="show-more-btn w-full sm:w-[281px] h-[58px] py-2 px-4 bg-white text-black rounded-full font-inter font-semibold text-lg leading-7"
      >
        Hemmesine serediň
      </button>
    </div>
  )}
</div>

  );
};

export default FoodDisplay;
