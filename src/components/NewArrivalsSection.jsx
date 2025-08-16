import Button from "./Button"
const NewArrivalsSection = () => {
  return (
    <section className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="flex-1 max-w-lg" >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">New Arrivals</h2>
        <p className="text-gray-600 text-lg mb-6">Fresh looks for a new season. Explore our latest drop of must-have styles and elevate your everyday fashion. Shop the collection now and find the perfect addition to your style.</p>
          <Button innerText="Shop Now"/>
      </div>

      <div className="flex-1 w-full">
        <div className="w-full h-80 sm:h-96 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500 text-lg">
            Placeholder za sliku
          </span>
        </div>
      </div>
    </section>

  )
}

export default NewArrivalsSection
