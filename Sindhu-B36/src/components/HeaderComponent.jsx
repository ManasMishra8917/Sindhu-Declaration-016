// HeaderComponent.jsx

import React from 'react';
import './HeaderComponent.css'; 
import { NavLink } from 'react-router-dom';

const HeaderComponent = () => {
  return (
    <div style={{zIndex:"-1"}}>
      <header className="header">
        <div className="list1">
             <NavLink to="/header1"><p> Office Chairs</p>   </NavLink> 
            <p>Dining Chairs</p>
            <p>Cocktail Chairs</p>
            <p>Living Chairs</p>
            <p>Bedside Tables</p>
            <p>Coffee Tables</p>
            <p>Office Desks</p>
            <p>Wall Lamps</p>
           
        </div>
        <div className='list2'>
        <p>Table Lamps</p>
            <p>Living Sofas</p>
            <p>Sofa Beds</p>
            <p>Chaises</p>
            <p>Bookcases</p>
            <p>Organises</p>
            <p>Bean Boxes</p>
            <p>Vases</p>
            <p>Clocks</p>
            <p>Wall Art</p>
        </div>




      </header>
    </div>
  );
}

export default HeaderComponent;