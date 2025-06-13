import { useContext } from 'react';
import { StoreContext } from '../../context/storeContext';

const ModalForm = () => {
  const { isModalOpen, setIsModalOpen } = useContext(StoreContext);

  if (!isModalOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-xl w-full max-w-md relative">
        <button
          className="absolute top-2 right-3 text-gray-500 text-xl cursor-pointer"
          onClick={() => setIsModalOpen(false)}
        >
          ✖
        </button>
        <h2 className="text-xl font-semibold mb-4 text-center">Zakaz Formasy</h2>
        <form className="flex flex-col gap-4">
          <input className="border p-2 rounded" placeholder="Adyňyz" />
          <input className="border p-2 rounded" placeholder="Familiýaňyz" />
          <input className="border p-2 rounded" placeholder="Fakultetiňiz" />
          <input className="border p-2 rounded" placeholder="Student ID" />
          <input className="border p-2 rounded" placeholder="Topar" />
          <button className="bg-black text-white py-2 rounded cursor-pointer hover:bg-gray-800">Ugrat</button>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
