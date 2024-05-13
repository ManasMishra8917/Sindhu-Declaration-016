import React,{useState} from 'react';
import { useEffect } from 'react';
import "../styles/Navbar.css";
import Cart from './Cart';
import { NavLink } from 'react-router-dom';
import { Button, ButtonGroup } from '@chakra-ui/react'

const Navbar = ({size, setShow, cart, setCart}) => {
  return (
    <nav style={{position:"fixed",top:"0px",zIndex:"5"}}>
        <div className="nav_box" style={{display:"flex",justifyContent:"space-between"}}>
            <NavLink to="/">
            <span className="my_shop" onClick={()=>setShow(true)}>
                <img style={{width:"70px"}} src="./public/logo.jpg" alt="" />
            </span>
            </NavLink>
            <NavLink to="/chairs">
            <div>
                Chairs
            </div>
            </NavLink>
            <NavLink to="/sofas">
            <div>Sofas</div>
            </NavLink>
            <NavLink to="/lights">
            <div>Lights</div>
            </NavLink>
            <div style={{display:"flex",gap:"15px",alignItems:"center"}}>
            <NavLink to="/cart"> {/* Wrap the cart icon with NavLink */}
          <div className="cart">
            <span>
              <i className="fa-solid fa-cart-shopping"></i> {/* Corrected class attribute */}
            </span>
            <span>{size}</span>
          </div>
        </NavLink>
        <NavLink to="/login">
            <span>
            <Button colorScheme='blue'>SiGN IN</Button>
            </span>
        </NavLink>
        </div>
            {/* {cart.length > 0 && <Cart cart={cart} setCart={setCart} />} */}
        </div>
    </nav>
  )
}

export default Navbar;