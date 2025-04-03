import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'

const LogIn = ({ setShowLogin }) => {
  
  const [currState, setCurrState] = useState("Login")
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const onChangeHandler = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  // useEffect(()=>{
  //   console.log(data)
  // },[data])


  return (
    <div className='logIn absolute z-1 w-full h-full bg-[#00000090] grid'>
      <form className="logInContainer place-self-center w-[max(23vw,_330px)] text-[#808080] bg-stone-800 flex flex-col gap-[25px] p-[25px_30px] rounded-[8px] text-[14px]">
        <div className="logInTitle flex flex-row justify-between items-center">
          <h2 className='text-2xl text-black font-bold'>{currState}</h2>
          <img onClick={() => setShowLogin(false)} className='w-[20px] h-[20px] cursor-pointer' src={assets.cross} alt="" />
        </div>
        <div className="logInInputs w-32 h-28 flex flex-col gap-2">
          {currState === "Login" ? <></> : <input name='name' onChange={onChangeHandler} value={data.name} type="text " placeholder='name' className='border-1 border-black w-68 h-8 rounded-2xl pl-4' required />}
          <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='email' className='border-1 border-black w-68 h-8 rounded-2xl pl-4' required />
          <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='password' className='border-1 border-black w-68 h-8 rounded-2xl pl-4' required />
        </div>
        <button className='bg-[#000000] h-10 text-xl rounded-[30px]'>{currState === "Sign up" ? "Create Account" : "Login"}</button>
        <div className="logInCondition flex flex-row gap-4">
          <input type="checkbox" required />
          <p>By continuingm i agree to the term of use & privacy policy.</p>
        </div>
        {currState === "Login" ? <p>Create a new account? <span onClick={() => setCurrState("Sign up")} className='text-red-700 cursor-pointer'>Click here</span></p>
          : <p>Already have an account? <span onClick={() => setCurrState("Login")} className='text-blue-700 cursor-pointer'>Login here</span></p>}
      </form>
    </div>
  )
}

export default LogIn
