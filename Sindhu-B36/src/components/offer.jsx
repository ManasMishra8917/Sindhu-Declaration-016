import React from 'react';
import './offer.css';

const Offer = () => {
  return (
    <div className="offer-container">
        <h2 className='offerr'>What's New?</h2>
        <p className='offerr'>This season's latest news and interior inspiration</p>
      <div className="box" style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
      <div className="offer-box">
        <p className='tag'>New Collection</p>
        <img className='oimg' src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTxydjUGSGbd2UFQU65FaLaIxXwlWvRt7NyeDNX3BTW7P31eYS9" alt="" />
      </div>
      <div className="offer-box">
        <p>Top Sell</p>
        <img className='oimg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7YhtT64jB_Pvs5PR5LjzIYfvUySJaNfmA9D6YBGj_OwLN4Ce8" alt="" />
      </div>
      </div>
    </div>
  );
}

export default Offer;