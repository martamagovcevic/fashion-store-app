import Header from "../components/Header"
import ProductCard from "../components/ProductCard"
import Footer from "../components/Footer"
import { useState, useEffect } from "react"

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products/category/women's clothing");
      if (!response.ok) throw new Error("Error fetching products");
      const data = await response.json();
      setProducts(data);        
      setFilteredProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  fetchProducts();
}, []);



  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-6">Our Products</h2>
        {loading && <p>Loading products...</p>}
        {error && <p className="text-red-500">{error}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {filteredProducts.length === 0 && !loading && <p>No products found.</p>}
      </section>
      <Footer/>
    </>
  )
}

export default Products;
