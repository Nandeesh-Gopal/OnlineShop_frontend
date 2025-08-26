import './App.css';
import Login from './components/Login'
import Home from './components/Home'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Signup from './components/Signup';
import Product from './components/Product';
import Cart from './components/Cart'
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/cart'element={<Cart/>}/>
        <Route path='/partner' element={<Product/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </Router>
  );
}

export default App;
