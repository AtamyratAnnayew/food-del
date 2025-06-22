import { useContext } from 'react';
import { StoreContext } from '../../context/storeContext';

const ModalForm = () => {
  const { isModalOpen, setIsModalOpen } = useContext(StoreContext);

  if (!isModalOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
      <div className="bg-white p-6 sm:p-8 rounded-xl w-full max-w-sm sm:max-w-md relative">

        {/* Close Button */}
        <button
          className="absolute top-2 right-3 text-gray-500 text-xl cursor-pointer hover:text-black"
          onClick={() => setIsModalOpen(false)}
        >
          ✖
        </button>

        {/* Title */}
        <h2 className="text-lg sm:text-xl font-semibold mb-4 text-center">Zakaz Formasy</h2>

        {/* Form */}
        <form className="flex flex-col gap-4">
          <input className="border p-3 rounded text-sm sm:text-base" placeholder="Adyňyz" />
          <input className="border p-3 rounded text-sm sm:text-base" placeholder="Familiýaňyz" />
          <input className="border p-3 rounded text-sm sm:text-base" placeholder="Fakultetiňiz" />
          <input className="border p-3 rounded text-sm sm:text-base" placeholder="Student ID" />
          <input className="border p-3 rounded text-sm sm:text-base" placeholder="Topar" />
          <button className="bg-black text-white py-2 rounded cursor-pointer hover:bg-gray-800 transition">
            Ugrat
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
