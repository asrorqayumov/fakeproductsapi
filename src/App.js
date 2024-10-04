
import './App.css';
import { Navigate, Route, Routes } from 'react-router';
import Products from './pages/products/products';
import Cart from './pages/cart/cart';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
        <Navbar />
      <Routes>
       <Route path='/'  element={<Navigate to="/home" />}  />
       <Route path='/home' element={<Products />}  />
       <Route path='/cart' element={<Cart />}  />
      </Routes>
    </div>
  );
}

export default App;
