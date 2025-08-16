import Header from "../components/Header"
import Footer from "../components/Footer"
import Button from "../components/Button"

const Loyalty = () => {
  return (
    <div>
        <Header/>
        <section className="container mx-auto px-4 py-16 flex flex-col items-center gap-6">
              <h2 className="text-3xl font-bold">Your Loyalty Points</h2>
        <p className="text-gray-700 text-xl">120 points</p>
        <Button innerText="Earn More Points" />
        </section>
            <Footer />
      
    </div>
  )
}

export default Loyalty
