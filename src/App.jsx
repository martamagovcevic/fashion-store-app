import './App.css'
import Home from './pages/Home'
import Loyalty from "./pages/Loyalty"
import Products  from './pages/Products'
import ProductDetails from "./pages/ProductDetails"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import NotFoundPage from "./pages/NotFoundPage"
import SearchBar from './components/SearchBar'

function App() {

  return (
    <>
       <Router>

   <main>

    <Routes>
        <Route  path='/' element={<Home/>}/>
   <Route path="*" element={<NotFoundPage />} />

   <Route  path='/products' element={<Products/>} />
      <Route  path='/products/:id' element={<ProductDetails/>} />
   <Route  path='/loyalty' element={<Loyalty/>}/>
    </Routes>
    </main>
   
   </Router> 
  </>)
}
export default App
