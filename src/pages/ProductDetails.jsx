import Header from '../components/Header'
import Button from '../components/Button'
import Footer from '../components/Footer'

const ProductDetails = () => {
  return (
    <>
    <Header/>
      <section className='container mx-auto px-4 py-16 flex flex-col md:flex-row gap-8'>
        <div className='flex-1 w-full h-96 bg-gray-200 flex items-center justify-center py-10'>
            <span className="text-gray-500">Product Image</span>
             <div className="flex-1 max-w-lg">
          <h2 className="text-4xl font-bold mb-4">Leather Jacket</h2>
          <p className="text-gray-600 mb-6">
            Premium quality leather jacket for your stylish look this season.
          </p>
          <p className="text-xl font-semibold mb-6">$120</p>
          <Button innerText="Add to Cart" />
</div>
        </div>
      </section>
            <Footer />

    </>
  )
}

export default ProductDetails
