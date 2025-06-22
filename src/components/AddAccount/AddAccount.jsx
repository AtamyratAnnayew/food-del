import { useState } from 'react';
import { FiMail } from 'react-icons/fi';

const AddAccount = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Function to handle input change
  const handleChange = (e) => {
    setEmail(e.target.value);
    setError('');
    setSuccess(false); // reset success on new input
  };

  // Function to validate and submit email
  const handleSubmit = () => {
    if (!email) {
      setError('E-poçta giriziň!');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Dogry e-poçta giriziň!');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      alert(`E-poçta üstünlikli girizildi: ${email}`);
      setEmail('');
    }, 1500);
  };

  return (
    <div className="addAccount bg-white my-20 py-10 px-4">
      <div className="addAccountMain text-center flex flex-col gap-10 justify-center items-center max-w-4xl mx-auto">
        <h1 className="font-inter font-bold text-3xl sm:text-5xl lg:text-[70px] leading-tight sm:leading-[70px] lg:leading-[90px]">
          Has giňişleýin goldaw üçin
        </h1>

        <div className="emailInput w-full flex flex-col sm:flex-row gap-4 sm:gap-5 items-center">
          {/* Email Input with Icon */}
          <div className="relative w-full sm:w-2/3">
            <FiMail className="absolute top-6 left-4 text-gray-500 text-xl" />
            <input
              className="w-full h-[58px] sm:h-[68px] pl-12 pr-4 rounded-full border border-black text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="E-poçta giriziň"
            />
            {error && (
              <p className="text-red-500 text-sm sm:text-base mt-1 text-left">
                {error}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            className={`w-full sm:w-[198px] h-[58px] sm:h-[68px] bg-black text-white font-semibold rounded-full transition duration-300 ${
              loading ? 'opacity-60 cursor-not-allowed' : 'hover:bg-blue-700'
            }`}
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? 'Ugradylýar...' : 'Girizmek'}
          </button>
        </div>

        {/* Success Message */}
        {success && (
          <p className="text-green-600 text-lg animate-bounce font-inter font-medium">
            E-poçta üstünlikli ugradyldy! ✅
          </p>
        )}
      </div>
    </div>
  );
};

export default AddAccount;
