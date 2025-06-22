import { menu_list } from '../../assets/assets'
import PropTypes from 'prop-types';


const ExploreMenu = ({category, setCategory}) => {
  ExploreMenu.propTypes = {
  category: PropTypes.string.isRequired,      // assuming it's a required string
  setCategory: PropTypes.func.isRequired,     // assuming it's a required function
};

  return (
    <div className="explore-menu flex flex-col gap-10 text-white px-4 sm:px-6 md:px-12">
  <h2 className="font-inter font-medium text-3xl sm:text-4xl md:text-[50px] leading-snug text-center">
    Iň Oňat & Yakymly Menýu
  </h2>

  <div className="explore-menu-list flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-7 text-center font-inter text-base sm:text-lg cursor-pointer">
    {menu_list.map((item, index) => (
      <div
        key={index}
        onClick={() =>
          setCategory((prev) => (prev === item.menu_name ? "Hemmesi" : item.menu_name))
        }
        className={`explore-menu-list-item px-4 py-2 ${
          category === item.menu_name
            ? "border-b-white rounded-b-lg border-b-[4px] pb-[8px]"
            : ""
        }`}
      >
        <p>{item.menu_name}</p>
      </div>
    ))}
  </div>
</div>

  ) 
}

export default ExploreMenu
