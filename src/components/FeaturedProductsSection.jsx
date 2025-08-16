import ProductCard from "./ProductCard"
import {featuredProducts} from "../api"

const FeaturedProductsSection = () => {
  return (
    <section className="container mx-auto px-4 py-20 text-center bg-white">
       <h2 className="text-4xl font-bold text-gray-800 mb-12">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default FeaturedProductsSection
