import React, { useState, useContext } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import {Link} from 'react-router-dom';
import {StoreContext} from '../../context/StoreContext'


const Navbar = ({setShowLogin}) => {

  const [menu, setMenu] = useState("Hoş geldiňiz")

  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <div className='navbar w-full h-[128px] pt-2'>
       <div className="mainContainer flex justify-around items-center ">
        <div className="menuItems text-white">
          <ul className='flex flex-row gap-4 text-[18px] cursor-pointer '>
            <Link to='/' onClick={()=> setMenu("Hoş geldiňiz")} className={menu === "Hoş geldiňiz" ? "border-b-2 hover:border-blue-500 transition-all duration-300 ease-in-out border-[#6B6B6B]  text-white" : "bg-transparent text-white"}>Hoş geldiňiz</Link>
            <a href="#menu" onClick={()=> setMenu("Menyu")} className={menu === "Menyu" ? "border-b-2  hover:border-blue-500 transition-all duration-300 ease-in-out border-[#6B6B6B] text-white" : "bg-transparent text-white"}>Menyu</a>
            <a href="#habarlasmak" onClick={()=> setMenu("habarlaşmak")} className={menu === "habarlaşmak" ? "border-b-2 hover:border-blue-500 transition-all duration-300 ease-in-out border-[#6B6B6B] text-white" : "bg-transparent text-white"}>Habarlaşmak</a>
          </ul>
        </div>
        <div className="logo"><img src={assets.logo} alt="logo" /></div>
        <div className="buttons flex flex-row gap-[35px] items-center">
          <div className="navbarSearch relative">
            <Link to='/cart'> <img className='cursor-pointer' src={assets.productTrash} alt="ProductTrash" /></Link>
            <div className={getTotalCartAmount() === 0 ? "" : "dot absolute bg-red-500 w-5 h-5 rounded-4xl top-[-8px] right-[-8px]"}></div>
          </div>
          <img className='cursor-pointer' src={assets.search} alt="search" />
          <button onClick={()=>setShowLogin(true)} className='font-bold text-[18px] leading-[28px] tracking-normal text-center text-black bg-white rounded-4xl w-[232px] h-[58px] cursor-pointer'>Agza boluň</button>
        </div>
       </div>
    </div>
  )
}

export default Navbar
