import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import quaitho_banner from './Components/Assets/quaitho.jpg';
import quaibup_banner from './Components/Assets/quaibup.jpg';
import CheckOut from './Pages/CheckOut';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/quaitho' element={<ShopCategory banner={quaitho_banner} category="quaitho" />} />
        <Route path='/quaibup' element={<ShopCategory banner={quaibup_banner} category="quaibup" />} />
        <Route path='/product' element={<Product />} >
           <Route path=":productId" element={<Product />} />
        </Route>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/checkout' element={<CheckOut/>} />
        <Route path='/login' element={<LoginSignup/>} />
      </Routes>
      <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
