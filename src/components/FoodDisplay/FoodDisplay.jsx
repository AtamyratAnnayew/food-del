

import { useState, useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  // State to track the number of items to display
  const [visibleItems, setVisibleItems] = useState(6);

  // Function to handle the "Show More" button click
  const handleShowMore = () => {
    setVisibleItems(food_list.length); // Show all items
  };

  return (
    <div className="food-display mt-[30px] px-11">
      <div id="menu" className="food-display-list  grid grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))] mt-[30px] gap-[20px] gap-y-[50px]">
        {food_list.slice(0, visibleItems).map((item, index) => {
          if (category === 'Hemmesi' || category === item.category) {
            return (
              <FoodItem
                className='w-[370px] h-[442px]'
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>

      {/* Show More button */}
      {visibleItems < food_list.length && (
        <div className="flex justify-center items-center"><button
        onClick={handleShowMore}
        className="show-more-btn w-[281px] h-[58px] cursor-pointer mt-5 py-2 px-4 bg-white text-black rounded-[40px] font-inter font-semibold text-[18px] leading-[28px]"
      >
        Hemmesine serediň
      </button></div>
      )}
    </div>
  );
};

export default FoodDisplay;
