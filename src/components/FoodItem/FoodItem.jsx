import { useContext} from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({id, name, price, description, image}) => {

 
  const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);

  return (
    <div className='food-item w-100% m-auto rounded-md shadow-[0px_0px_10px_#000000] bg-[#191919]'>
      <div className="food-item-img-container flex justify-center">
        <img className='food-item-image w-100% rounded-md' src={image} alt="" />
        
      </div>
      <div className="food-item-info text-white p-[20px]">
        <div className="food-item-name-rating text-[24px] font-medium flex justify-between items-center mb-[10px]">
            <p>{name}</p>
            {/* <img src={assets.eclair} alt="eclair" /> */}
        </div>
        <p className="food-item-desc text-[16px] font-normal">{description}</p>
        <div className="flex justify-between items-center flex-row">
          <p className="food-item-price font-inter font-bold text-[24px] leading-[34px] text-yellow-600">{price} TMT</p>
          {
            !cartItems[id]
            ? <img className='add' onClick={()=>addToCart(id)} src={assets.addButton}/>
            : <div className="food-item-counter flex flex-row">
              <img className='text-2xl w-10 h-10' onClick={()=>removeFromCart(id)} src={assets.minusButton} alt="" />
              <p className='text-2xl w-10 h-10 flex justify-center' >{cartItems[id]}</p>
              <img className='text-2xl w-10 h-10' onClick={()=>addToCart(id)} src={assets.plusButton} alt="" />
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default FoodItem
