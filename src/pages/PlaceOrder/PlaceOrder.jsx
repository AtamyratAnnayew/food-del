import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <from className='place-order text-white flex items-start justify-between gap-[50px] mt-[100px]'>
      <div className="place-oreder-left w-full ">
        <p className="title text-[30px] font-normal mb-[50px]">Delivery Infromation</p>
        <div className="multi-fields  flex gap-[10px]">
          <input type="text" placeholder='First name' className='mb-[15px] w-full p-[10px] border-1 border-[#c5c5c5] rounded-[4px] outline-red-500 '/>
          <input type="text" placeholder='Last name' className='mb-[15px] w-full p-[10px] border-1 border-[#c5c5c5] rounded-[4px] outline-red-500'/>
        </div>
        <input type="text" placeholder='Email address' className='mb-[15px] w-full p-[10px] border-1 border-[#c5c5c5] rounded-[4px] outline-red-500'/>
        <input type="text" placeholder='Faculty' className='mb-[15px] w-full p-[10px] border-1 border-[#c5c5c5] rounded-[4px] outline-red-500 '/>
        <div className="multi-fields flex gap-[10px]">
          <input type="text" placeholder='Student ID' className='mb-[15px] w-full p-[10px] border-1 border-[#c5c5c5] rounded-[4px] outline-red-500 '/>
          <input type="text" placeholder='Group' className='mb-[15px] w-full p-[10px] border-1 border-[#c5c5c5] rounded-[4px] outline-red-500'/>
        </div>
        <div className="multi-fields flex gap-[10px]">
          <input type="text" placeholder='zip code' className='mb-[15px] w-full p-[10px] border-1 border-[#c5c5c5] rounded-[4px] outline-red-500 '/>
          <input type="text" placeholder='country' className='mb-[15px] w-full p-[10px] border-1 border-[#c5c5c5] rounded-[4px] outline-red-500'/>
        </div>
        <input type="text" placeholder='Phone' className='mb-[15px] w-full p-[10px] border-1 border-[#c5c5c5] rounded-[4px] outline-red-500'/>
      </div>
      {/* ************************************************ */}
      <div className="place-oreder-right w-full max-w-[40%,500px]">
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
              <p>{2} TMT</p>
            </div>
            <hr />
            <div className="cart-total-details flex justify-between font-bold">
              <p>Total</p>
              <p>{getTotalCartAmount()+2} TMT</p>
            </div>
          </div>
          <button className="border-none bg-red-500 w-full md:w-[200px] py-[12px] md:py-[20px] rounded-[40px] cursor-pointer text-white text-lg">
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </from>
  )
}

export default PlaceOrder
