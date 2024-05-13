import React, { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import ProductList from '../pages/ProductList'
import CartPage from '../pages/CartPage'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'

import { SignUp } from '../pages/SignUp'
import { FilterPage } from '../pages/FilterPage'
// import SimpleCard from '../Authentication/LoginCard'

export const AllRoutes = ({ handleClick,cart, setCart }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track user's login status

  const handleSignIn = () => {
    
    setIsLoggedIn(true);
  };

  return (
    <Routes>
        <Route path='/' element={<Home/>} />
      <Route path="/chairs" element={<ProductList type="chairs" handleClick={handleClick} />} />
      <Route path="/sofas" element={<ProductList type="sofas" handleClick={handleClick} />} />
      <Route path="/lights" element={<ProductList type="lights" handleClick={handleClick} />} />
      <Route path="/cart" element={<CartPage cart={cart} setCart={setCart}/>} />
      <Route path="/login" element={<Login onSignIn={handleSignIn} />}/>
      <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/header1" element={<FilterPage/>} />
      {/* <Route path="/login" element={<Login onSignIn={handleSignIn}  />} /> */}
    </Routes>
    
  )
}