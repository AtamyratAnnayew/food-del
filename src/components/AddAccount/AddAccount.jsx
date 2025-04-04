import { useState } from 'react';

const AddAccount = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  // Function to handle input change
  const handleChange = (e) => {
    setEmail(e.target.value);
    setError(''); // Clear error when typing
  };

  // Function to validate and submit email
  const handleSubmit = () => {
    if (!email) {
      setError('E-poçta giriziň!');
      return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Dogry e-poçta giriziň!');
      return;
    }

    alert(`E-poçta üstünlikli girizildi: ${email}`);
    setEmail(''); // Clear input field after submission
  };

  return (
    <div className="addAccount bg-white my-20 h-[358px] pt-10">
      <div className="addAccountMain text-center flex flex-col gap-10 justify-center items-center ">
        <h1 className=" font-inter font-bold text-[70px] leading-[90px]">Has giňişleýin goldaw üçin</h1>
        
        <div className="emailInput w-[779px] flex flex-row gap-[20px]">
          <div className=" flex flex-col gap-5">
            <input
                className="w-[561px] h-[68px] rounded-[40px] border-[1px] border-black  p-3 text-[18px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="E-poçta giriziň"
            />
            {error && <p className="text-red-500 text-xl">{error}</p>}
            
          </div>
          <button
            className="bg-black text-white font-semibold w-[198px] h-[68px] cursor-pointer rounded-[40px] hover:bg-blue-700 transition"
            onClick={handleSubmit}
          >
            Girizmek
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddAccount;
