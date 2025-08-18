import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          "https://api.escuelajs.co/api/v1/products?offset=1&limit=40"
        );
        const data = await res.json();
        const filteredData = data.filter((item) => {
          const cat = item?.category?.name?.toLowerCase() || "";
          return ["clothes", "shoes", "accessories"].includes(cat);
        });

        setProducts(filteredData);
        setFilteredProducts(filteredData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = (query) => {
    const filtered = products.filter((p) =>
      p.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <>
      <Header onSearch={handleSearch} />

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Products</h2>
        {loading && (
          <div className="flex justify-center items-center py-6">
            <div className="w-8 h-8 border-4 border-gray-300 border-t-[#e75480] rounded-full animate-spin"></div>
          </div>
        )}
        {error && <p className="text-red-500 text-center">{error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={{
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.images?.[0] || "",
              }}
              source="escuelajs"
            />
          ))}
        </div>
        {!loading && filteredProducts.length === 0 && (
          <p className="text-center mt-6">No products found.</p>
        )}
      </section>

      <Footer />
    </>
  );
};

export default Products;
