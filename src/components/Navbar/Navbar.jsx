// import { useState, useContext } from 'react'
// import './Navbar.css'
// import { assets } from '../../assets/assets'
// import {Link} from 'react-router-dom';
// import {StoreContext} from '../../context/StoreContext'


// const Navbar = ({setShowLogin}) => {

//   const [menu, setMenu] = useState("Hoş geldiňiz")

//   const {getTotalCartAmount} = useContext(StoreContext)
//   return (
//     <div className='navbar w-full h-[128px] pt-2'>
//        <div className="mainContainer flex justify-around items-center ">
//         <div className="menuItems text-white">
//           <ul className='flex flex-row gap-4 text-[18px] cursor-pointer '>
//             <Link to='/' onClick={()=> setMenu("Hoş geldiňiz")} className={menu === "Hoş geldiňiz" ? "border-b-2 hover:border-blue-500 transition-all duration-300 ease-in-out border-[#6B6B6B]  text-white" : "bg-transparent text-white"}>Hoş geldiňiz</Link>
//             <a href="#menu" onClick={()=> setMenu("Menyu")} className={menu === "Menyu" ? "border-b-2  hover:border-blue-500 transition-all duration-300 ease-in-out border-[#6B6B6B] text-white" : "bg-transparent text-white"}>Menyu</a>
//             <a href="#habarlasmak" onClick={()=> setMenu("habarlaşmak")} className={menu === "habarlaşmak" ? "border-b-2 hover:border-blue-500 transition-all duration-300 ease-in-out border-[#6B6B6B] text-white" : "bg-transparent text-white"}>Habarlaşmak</a>
//           </ul>
//         </div>
//         <div className="logo"><img src={assets.logo} alt="logo" /></div>
//         <div className="buttons flex flex-row gap-[35px] items-center">
//           <div className="navbarSearch relative">
//             <Link to='/cart'> <img className='cursor-pointer' src={assets.productTrash} alt="ProductTrash" /></Link>
//             <div className={getTotalCartAmount() === 0 ? "" : "dot absolute bg-red-500 w-5 h-5 rounded-4xl top-[-8px] right-[-8px]"}></div>
//           </div>
//           <img className='cursor-pointer' src={assets.search} alt="search" />
//           <button onClick={()=>setShowLogin(true)} className='font-bold text-[18px] leading-[28px] tracking-normal text-center text-black bg-white rounded-4xl w-[232px] h-[58px] cursor-pointer'>Agza boluň</button>
//         </div>
//        </div>
//     </div>
//   )
// }

// export default Navbar


// ===========================================
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Hoş geldiňiz")
  const [showSearchModal, setShowSearchModal] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const { getTotalCartAmount } = useContext(StoreContext)

  const foodItems = ['Burger', 'Pizza', 'Kebab', 'Fries', 'Salad']

  const handleSearch = () => {
    const results = foodItems.filter(item =>
      item.toLowerCase().includes(searchQuery.toLowerCase())
    )
    console.log("Search results:", results)
  }

  return (
    <div className='navbar w-full pt-2 bg-black text-white'>
      <div className="mainContainer flex flex-wrap justify-between items-center px-4 py-4">
        {/* Logo */}
        <div className="logo">
          <img src={assets.logo} alt="logo" className="w-[120px]" />
        </div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex flex-row gap-6 text-[18px] cursor-pointer text-center'>
          <Link to='/' onClick={() => setMenu("Hoş geldiňiz")} className={menu === "Hoş geldiňiz" ? "border-b-2 border-[#6B6B6B]" : ""}>Hoş geldiňiz</Link>
          <a href="#menu" onClick={() => setMenu("Menyu")} className={menu === "Menyu" ? "border-b-2 border-[#6B6B6B]" : ""}>Menyu</a>
          <a href="#habarlasmak" onClick={() => setMenu("habarlaşmak")} className={menu === "habarlaşmak" ? "border-b-2 border-[#6B6B6B]" : ""}>Habarlaşmak</a>
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          {/* Cart */}
          <div className="relative">
            <Link to='/cart'>
              <img className='cursor-pointer w-6 h-6' src={assets.productTrash} alt="ProductTrash" />
            </Link>
            {getTotalCartAmount() > 0 && (
              <div className="dot absolute bg-red-500 w-4 h-4 rounded-full top-[-6px] right-[-6px] border-2 border-white"></div>
            )}
          </div>

          {/* Search */}
          <img
            onClick={() => setShowSearchModal(true)}
            className='cursor-pointer w-6 h-6'
            src={assets.search}
            alt="search"
          />

          {/* Login */}
          <button
            onClick={() => setShowLogin(true)}
            className='hidden md:block font-bold text-[18px] text-black bg-white rounded-4xl w-[180px] h-[48px] cursor-pointer hover:bg-amber-50'
          >
            Agza boluň
          </button>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="block md:hidden focus:outline-none">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="flex flex-col items-center gap-4 py-4 text-[18px] md:hidden bg-black">
          <Link to='/' onClick={() => { setMenu("Hoş geldiňiz"); setIsMobileMenuOpen(false); }}>Hoş geldiňiz</Link>
          <a href="#menu" onClick={() => { setMenu("Menyu"); setIsMobileMenuOpen(false); }}>Menyu</a>
          <a href="#habarlasmak" onClick={() => { setMenu("habarlaşmak"); setIsMobileMenuOpen(false); }}>Habarlaşmak</a>
          <button
            onClick={() => { setShowLogin(true); setIsMobileMenuOpen(false); }}
            className='font-bold text-[16px] text-black bg-white rounded-4xl w-[160px] h-[42px] hover:bg-amber-50'
          >
            Agza boluň
          </button>
        </ul>
      )}

      {/* Search Modal */}
      {showSearchModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#00000090] grid z-50">
          <div className="place-self-center w-[90%] max-w-[400px] bg-white p-6 rounded-lg text-black">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Search Foods</h2>
              <button onClick={() => setShowSearchModal(false)}>
                <img className='w-5 h-5' src={assets.cross} alt="Close" />
              </button>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Enter food name"
              className="w-full px-4 py-2 border border-gray-300 rounded mb-4"
            />
            <button
              onClick={handleSearch}
              className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
