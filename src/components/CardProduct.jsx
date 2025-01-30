import { FaWhatsapp } from "react-icons/fa";
import handleWhatsApp from './RedirectWhats';

const CardProduct = ({ product, isAdmin, onEdit, onDelete }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden relative transform transition-transform hover:scale-105 w-60 h-80 m-2"
    >
      {isAdmin && (
        <div className="absolute top-2 right-2 flex space-x-2">
          <button onClick={() => onEdit(product)} className="text-gray-600">
            <FaEdit />
          </button>
          <button onClick={() => onDelete(product.id)} className="text-red-500">
            <FaTrash />
          </button>
        </div>
      )}
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-52 object-cover"
      />
      <div className="p-5">
        <h3 className="text-sm font-semibold">{product.title}</h3>
        <p className="text-xs text-gray-500">{product.category}</p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-base font-bold">
            ${product.price.toLocaleString()}
          </span>
          <button
            onClick={() => handleWhatsApp(product)}
            className="bg-green-500 text-white rounded-full p-3 hover:bg-green-600"
          >
            <FaWhatsapp />
          </button>
        </div>
      </div>
    </div>
  );
};
export default CardProduct;