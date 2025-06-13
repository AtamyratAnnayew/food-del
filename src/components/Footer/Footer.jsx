import { useState } from 'react';
import { assets } from '../../assets/assets';

const Footer = () => {
  const [selectedSocial, setSelectedSocial] = useState(null);

  const handleSocialClick = (social) => {
    setSelectedSocial(social);
  };

  const closeModal = () => {
    setSelectedSocial(null);
  };

  return (
    <div className="footer bg-[#191919] text-white" id="habarlasmak">
      <div className="footerContent px-6 md:px-20 pt-16 pb-8">
        <div className="footerMenu flex flex-col md:flex-row justify-between gap-10">
          {/* Section 1 */}
          <div className="flex flex-col gap-4">
            <h1 className="font-semibold text-xl md:text-2xl">Önümlerimiz</h1>
            <div className="flex flex-col gap-2 text-base md:text-lg">
              <span>Menýularymyz</span>
              <span>Döwrümiziň taraplary</span>
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col gap-4">
            <h1 className="font-semibold text-xl md:text-2xl">Hukuk maglumatlary</h1>
            <span className="text-base md:text-lg">Hukuk habarnamasy</span>
          </div>

          {/* Section 3 */}
          <div className="flex flex-col gap-4">
            <h1 className="font-semibold text-xl md:text-2xl">Biz bilen habarlaşyň</h1>
            <div className="flex flex-col gap-2 text-base md:text-lg">
              <span>Aragatnaşyklar</span>
              <span>Salgylarymyz</span>
            </div>
          </div>
        </div>

        {/* Social Section */}
        <div className="footerSocial flex flex-col items-center mt-12 gap-6">
          <hr className="w-full max-w-4xl border-t border-[#4F4F4F]" />
          <div className="flex gap-6 cursor-pointer">
            <img src={assets.facebook} alt="Facebook" onClick={() => handleSocialClick('facebook')} />
            <img src={assets.twitter} alt="Twitter" onClick={() => handleSocialClick('twitter')} />
            <img src={assets.instagram} alt="Instagram" onClick={() => handleSocialClick('instagram')} />
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedSocial && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white text-black rounded-xl p-6 w-80 relative">
            <button
              className="absolute top-2 right-4 text-xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">Bizim {selectedSocial.charAt(0).toUpperCase() + selectedSocial.slice(1)} sahypamyz</h2>
            <p className="text-sm">
              {selectedSocial === 'facebook' && 'https://facebook.com/youraccount'}
              {selectedSocial === 'twitter' && 'https://twitter.com/youraccount'}
              {selectedSocial === 'instagram' && 'https://instagram.com/youraccount'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
