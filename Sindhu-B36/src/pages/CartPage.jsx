import React from 'react'
import Cart from '../components/Cart'

const CartPage = ({ cart, setCart }) => {
  return (
    <div>
      <Cart cart={cart} setCart={setCart} />
    </div>
  )
}

export default CartPage