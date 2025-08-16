import Button from "./Button"

const ProductCard = ({product}) => {
  return (
    <div  className="flex flex-col items-center text-center">
      <div className="w-full h-80 bg-gray-200 flex items-center justify-center mb-4">
        <span className="text-gray-500">
          Placeholder za sliku
        </span>
        </div>
        <h3 className="text-lg font-semibold text-gray-800">
        {product.name}
      </h3>
            <p className="text-gray-600 mt-1 mb-3">
        {product.price}
  
      </p>
      <Button innerText="Buy Now"/>

    </div>
  )
}

export default ProductCard
