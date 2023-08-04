import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './component/redux/items/store';

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
    <Provider store={store}>
    <Router>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />} />

      </Routes>

    </Router>
    </Provider>
      
      {/* <Card /> */}
      {/* <Home/> */}
      

    </>
  );
}

export default App;
