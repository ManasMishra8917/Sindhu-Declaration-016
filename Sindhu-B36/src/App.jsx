

import React, { useState } from 'react';
import { AllRoutes } from './components/AllRoutes';
import  Navbar from './components/Navbar';

function App() {
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);
  const [show, setShow] = useState(true);
  

  const handleClick = (item) => {
    const isPresent = cart.find((product) => product.id === item.id);
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, { ...item, amount: 1 }]);
  };

  return (
    <>
      <Navbar size={cart.length}  setShow={setShow} cart={cart} setCart={setCart} /> 
      <AllRoutes handleClick={handleClick} cart={cart} setCart={setCart}/>
  
      {warning && <div className="warning">Item is already added to your cart</div>}
    </>
  );
}

export default App;