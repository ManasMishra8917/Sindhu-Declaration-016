import React, { useState } from 'react'
import Cart from '../components/Cart'
import Sofas from './Sofas'
import Chairs from './Chairs'
import Lights from './Lights'

const ProductList = ({ type, handleClick }) => {
  const [show, setShow] = useState(true)
  const [cart, setCart] = useState([])
  const [warning, setWarning] = useState(false)
  

  const handleChange = (item, d) => {
    const index = cart.findIndex((data) => data.id === item.id)
    if (index !== -1) {
      cart[index].amount += d
      if (cart[index].amount === 0) cart[index].amount = 1
      setCart([...cart])
    }
  }

  

  return (
    <>
    
    
    <div>
  {show ? (
    type === "sofas" ? (
      <Sofas handleClick={handleClick} />
    ) : (
      type === "chairs" ? (
        <Chairs handleClick={handleClick} />
      ) : (
        <Lights handleClick={handleClick} />
      )
    )
  ) : (
    <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
  )}
  {warning && <div className="warning">Item is already added to your cart</div>}
</div>
    </>
  )
}

export default ProductList