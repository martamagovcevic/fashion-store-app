const Modal = ({ isOpen, onClose, title, message, btnText }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <p className="mb-6">{message}</p>
        <button
          onClick={onClose}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
        >
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default Modal;
