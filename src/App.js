import logo from './logo.svg';
import './App.css';
import Login from './Login/Login';
import Register from './Login/Register';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar } from './Components/Navbar/Navbar';
import Shopping from './Pages/Shopping';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'

function App() {
  return (
      <div>
        <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Shopping></Shopping>}></Route>
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />}></Route>
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}></Route>
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}></Route>
          <Route path='/product' element={<Product />}></Route>
          <Route path="/product/:productId" element={<Product />} />
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>

        </Routes>
        <Footer />
        </Router>

      </div>
  );
}



export default App;
