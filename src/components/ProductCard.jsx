import Button from "./Button"

const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col items-center text-center border p-4 rounded hover:shadow-lg transition">
      <div className="w-full h-80 flex items-center justify-center mb-4">
        <img src={product.image} alt={product.title} className="max-h-full object-contain"/>
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
      <p className="text-gray-600 mt-1 mb-3">${product.price}</p>
      <Button innerText="Buy Now" />
    </div>
  )
}

export default ProductCard;
