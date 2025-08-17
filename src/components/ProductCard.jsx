import Button from "./Button"
import { priceFormat } from "../utils/priceFormat";
import { Link } from "react-router-dom";
import { useHighlightOnHover } from "../hooks/useHighlightOnHover";


const ProductCard = ({ product }) => {
    const { eventHandlers, style } = useHighlightOnHover();

  return (
    <div {...eventHandlers} style={style} className="flex flex-col items-center text-center border p-4 rounded hover:shadow-lg transition">
      <div className="w-full h-80 flex items-center justify-center mb-4">
        <img src={product.image} alt={product.title} className="max-h-full object-contain"/>
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
      <p className="text-gray-600 mt-1 mb-3">{priceFormat(product.price)}</p>
     <Link to={`/products/${product.id}`}>
        <Button innerText="View Details" />
      </Link>
    </div>
  )
}

export default ProductCard;
