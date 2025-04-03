// import React, { useContext } from 'react'
// import { StoreContext } from '../../context/StoreContext'

// const Cart = () => {

//   const { cartItems, food_list, removeFormCart } = useContext(StoreContext);

//   return (
//     <div className='cart mt-100px px-25 mb-20'>
//       <div className="cart-items">
//         <div className="cart-items-title text-white grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-[max(1ve,12px)]">
//           <p>Items</p>
//           <p>Title</p>
//           <p>Price</p>
//           <p>Quantity</p>
//           <p>Total</p>
//           <p>Remove</p>
//         </div>
//         <br />
//         <hr className='bg-white w-[1140px] h-[2px]' />
//         {food_list.map((item, index) => {
//           if (cartItems[item._id] > 0) {
//             return (
//               <div className="">
//                 <div className="cart-items-title cart-items-item text-white my-[10px] grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-[max(1ve,12px)]">
//                   <img className='w-[50px] h-[50px]' src={item.image} alt="" />
//                   <p>{item.name}</p>
//                   <p>{item.price} TMT</p>
//                   <p>{cartItems[item._id]}</p>
//                   <p>{item.price * cartItems[item._id]} TMT</p>
//                   <p onClick={() => removeFormCart(item._id)} className='cursor-pointer'>X</p>
//                 </div>
//                 <hr className='bg-[#e2e2e2e2] w-[1140px] h-[2px]' />
//               </div>

//             )
//           }
//         })}
//       </div>
//       <div className="cart-bottom text-white mt-[80px] flex justify-between gap-[max(12vw,20px)]">
//         <div className="cart-total flex flex-1 flex-col gap-[20px]">
//           <h2>Cart Totals</h2>
//           <div>
//             <div className="cart-total-details flex justify-between">
//               <p>Subtotal
//               <p>{0}</p>
//               </p>
//             </div>

//             <hr className='my-[10px] mx-[0px] '/>

//             <div className="cart-total-details">
//               <p>Delivery Free</p>
//               <p>{2}</p>
//             </div>

//             <hr />

//             <div className="cart-total-details">
//               <p>Total</p>
//               <p>{0}</p>
//             </div>
//           </div>
//           <button className='border-none bg-red-500 w-[max(15vw,200px)] py-[20px] px-[0px] rounded-[40px] cursor-pointer'>PROCEED TO CHECKOUT</button>
//         </div>
//         <div className="cart-promocode flex-1">
//           <div className="">
//             <p className='text-[#555]'>If you have a promo code, Enter it here</p>
//             <div className="cart-promocode-input mt-[10px] flex justify-between items-center bg-[#eaeaea] rounded-[4px]">
//               <input type="text" placeholder='promo code' className='bg-transparent text-black border-none outline-none pl-[10px]'/>
//               <button className='w-[max(10vw,150px)] py-[12px] px-[5px] border-none bg-white text-black rounded-[4px]'>Submit</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Cart;

import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFormCart, getTotalCartAmount } = useContext(StoreContext);

  const navigate =useNavigate();

  return (
    <div className="cart mt-[100px] px-[20px] md:px-[25px] mb-20">
      {/* Cart Items */}
      <div className="cart-items">
        <div className="cart-items-title text-white grid grid-cols-2 md:grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-sm md:text-base lg:text-lg gap-2 md:gap-4">
          <p>Items</p>
          <p>Title</p>
          <p className="hidden md:block">Price</p>
          <p>Quantity</p>
          <p className="hidden md:block">Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr className="bg-white w-full h-[2px]" />
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id}>
                <div className="cart-items-title cart-items-item text-white my-[10px] grid grid-cols-2 md:grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-sm md:text-base lg:text-lg gap-2 md:gap-4">
                  <img className="w-[40px] md:w-[50px] h-[40px] md:h-[50px]" src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p className="hidden md:block">{item.price} TMT</p>
                  <p>{cartItems[item._id]}</p>
                  <p className="hidden md:block">{item.price * cartItems[item._id]} TMT</p>
                  <p onClick={() => removeFormCart(item._id)} className="cursor-pointer text-red-500 font-bold">X</p>
                </div>
                <hr className="bg-gray-300 w-full h-[2px]" />
              </div>
            );
          }
        })}
      </div>

      {/* Cart Bottom */}
      <div className="cart-bottom text-white mt-[40px] md:mt-[80px] flex flex-col md:flex-row justify-between gap-8">
        
        {/* Cart Total */}
        <div className="cart-total flex flex-1 flex-col gap-[20px]">
          <h2 className="text-lg md:text-xl font-bold">Cart Totals</h2>
          <div>
            <div className="cart-total-details flex justify-between">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()} TMT</p>
            </div>
            <hr className="my-[10px]" />
            <div className="cart-total-details flex justify-between">
              <p>Delivery Fee</p>
              <p>{getTotalCartAmount()===0?0:2} TMT</p>
            </div>
            <hr />
            <div className="cart-total-details flex justify-between font-bold">
              <p>Total</p>
              <p>{getTotalCartAmount()===0?0:getTotalCartAmount()+2} TMT</p>
            </div>
          </div>
          <button onClick={()=> navigate('/order')} className="border-none bg-red-500 w-full md:w-[200px] py-[12px] md:py-[20px] rounded-[40px] cursor-pointer text-white text-lg">
            PROCEED TO CHECKOUT
          </button>
        </div>

        {/* Promo Code */}
        <div className="cart-promocode flex-1">
          <p className="text-gray-400">If you have a promo code, enter it here</p>
          <div className="cart-promocode-input mt-[10px] flex justify-between items-center bg-gray-200 rounded-[4px] p-2">
            <input type="text" placeholder="Promo code" className="bg-transparent text-black border-none outline-none pl-[10px] w-full" />
            <button className="w-[100px] cursor-pointer md:w-[150px] py-[8px] md:py-[12px] border-none bg-white text-black rounded-[4px]">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
