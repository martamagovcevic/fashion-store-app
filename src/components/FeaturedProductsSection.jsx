import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const FeaturedProductsSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=12")
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(4, 8)))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return <p className="text-center py-12">Loading featured products...</p>;

  return (
    <section className="container mx-auto px-4 py-20 text-center bg-white">
      <h2 className="text-4xl font-bold text-gray-800 mb-12">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} source="fakestore" />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
