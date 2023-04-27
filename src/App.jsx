import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Button from './components/Button';
import SingleProduct from './components/SingleProduct';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/button' element={<Button />} />
        <Route exact path='/singleproduct/:id' element={<SingleProduct />} />
      </Routes>

    </div>
  );
}

export default App;
