import Header from "../components/Header";
import Button from "../components/Button";
import Footer from "../components/Footer";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { priceFormat } from "../utils/priceFormat";
import Modal from "../components/Modal";

const ProductDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const source = searchParams.get("source") || "fakestore";

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        let data = null;

        if (source === "fakestore") {
          const res = await fetch(`https://fakestoreapi.com/products/${id}`);
          if (!res.ok) throw new Error("Product not found");
          const d = await res.json();
          data = {
            id: d.id,
            title: d.title,
            description: d.description,
            price: d.price,
            image: d.image,
            category: d.category,
          };
        } else if (source === "escuelajs") {
          const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
          if (!res.ok) throw new Error("Product not found");
          const d = await res.json();
          data = {
            id: d.id,
            title: d.title,
            description: d.description,
            price: d.price,
            image: Array.isArray(d.images) ? d.images[0] : d.images,
            category: d.category?.name || "",
          };
        } else {
          throw new Error("Unknown source");
        }

        setProduct(data);
      } catch (err) {
        console.error(err);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id, source]);

  const handleOrder = () => {
    setIsModalOpen(true);
  };

  if (loading)
    return <p className="text-center py-20">Loading product details...</p>;
  if (!product) return <p className="text-center py-20">Product not found.</p>;

  return (
    <>
      <Header />

      <section className="container mx-auto px-4 py-16">
        <div className="text-gray-500 text-sm mb-6">
          <Link to="/" className="hover:underline">Home</Link>{" "}
          <Link to="/products" className="hover:underline">Products</Link>{" "}
         <span>{product.title}</span>
        </div>

        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="flex-1 relative w-full h-96 bg-gray-100 flex items-center justify-center rounded-lg overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-50"></div>
            <img
              src={product.image}
              alt={product.title}
              className="h-full object-contain z-10"
            />
          </div>

          <div
            className="flex-1 max-w-lg bg-white p-6 rounded-lg shadow-md transform transition-opacity duration-700 opacity-0"
            style={{ animation: "fadeIn 0.6s forwards" }}
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              {product.title}
            </h2>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <p className="text-2xl font-semibold mb-6 text-gray-900">
              {priceFormat(product.price)}
            </p>
            <Button
              innerText="Order Now"
              className="bg-black text-white px-6 py-3 rounded-lg w-full md:w-auto 
                         transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onClick={handleOrder}
            />
            <Button
              innerText="Go back"
              className="bg-black text-white px-6 py-3 rounded-lg w-full md:w-auto 
                         transform transition-all duration-300 hover:scale-105 hover:shadow-xl ml-10"
              onClick={() => navigate(-1)}
            />
          </div>
        </div>
      </section>

      <Footer />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Congratulations!"
        message="You have successfully placed your order."
        btnText="Close"
      />

      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </>
  );
};

export default ProductDetails;
