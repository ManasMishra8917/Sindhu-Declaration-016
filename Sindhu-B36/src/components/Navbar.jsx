import React from 'react'
import "../styles/Navbar.css"
import HeaderComponent from './HeaderComponent'

export const Navbar = ({size, setShow}) => {
  return (
    <nav>
        <div className="nav_box">
            <span className="my_shop" onClick={()=>setShow(true)}>
                <img style={{width:"60px"}} src="./public/logo.jpg" alt="" />
            </span>
            <div className="cart" onClick={()=>setShow(false)}>
                <span>
                <i class="fa-solid fa-cart-shopping"></i>
                </span>
                <span>{size}</span>
            </div>
        </div>
        
    </nav>
   
  )
}
