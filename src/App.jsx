import './App.css'
import Home from './pages/Home'
import Loyalty from "./pages/Loyalty"
import Products  from './pages/Products'
import ProductDetails from "./pages/ProductDetails"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {

  return (
    <>
    <Loyalty/>
    </>
    // <Router>

    //   <Routes>
    //     <Route  path='/' element={<Home/>}/>
    //     <Route  path='/products' element={<Products/>} />
    //     <Route  path='/product/:id' element={<ProductDetails/>} />
    //     <Route  path='/loyalty' element={<Loyalty/>}/>
    //   </Routes>
   
    // </Router>
  )
}

export default App
