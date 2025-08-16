import { products } from "../api"
import Header from "../components/Header"
import ProductCard from "../components/ProductCard"
import Footer from "../components/Footer"

const Products = () => {
  return (
    <>
    <Header/>
    <section className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold mb-6">Our Products</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {products.map((product)=><ProductCard key={product.id} product={product}/>)}
    </div>
    </section>
    <Footer/>
    </>
  )
}

export default Products
