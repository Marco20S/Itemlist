import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

import Card from './component/card';
import Navbar from './component/navbar';
import Home from './component/home';


function App() {

  function addItem(id,Item,Quantity){
    console.log(addItem)
  }
    
  


  return (
    <>
    <Router>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />} />

      </Routes>

    </Router>
      
      {/* <Card /> */}
      {/* <Home/> */}
      

    </>
  );
}

export default App;
