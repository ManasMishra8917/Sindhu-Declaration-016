import React from 'react';
import './Footer.css'; // Importing the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="ft1">
          <div className="f1">
              <p>0333 242 0688</p>
              <p>Online Store Helpline</p>
          </div>
          <div className="f2">
          <p className='f2p'>Delivery Informations</p>
          <p className='f2p'>Refunds & Exchanges</p>
          <p className='f2p'>Privacy Policy</p>
          <p className='f2p'>Terms & Conditions</p>
          </div>
      </div>
      <div className="ft2">
        {/* 1 */}
        <div className="f3">
             <p>© 2021 Musdect All Rights Reserved</p>
        </div>
        {/* 2 */}
        <div className="box2" >
        <div className="logo1">
          <i className="fab fa-facebook"></i> {/* Facebook icon */}
        </div>
        <div className="logo2">
          <i className="fab fa-linkedin"></i> {/* LinkedIn icon */}
        </div>
        <div className="logo3">
          <i className="fab fa-youtube"></i> {/* YouTube icon */}
        </div>
        <div className="logo4">
          <i className="fab fa-twitter"></i> {/* Twitter icon */}
        </div>
      </div>
    <div className="box3">
          <span>Accepted payment Methods</span>
          <i className="fab fa-cc-visa"></i> {/* Visa icon */}
          <i className="fab fa-cc-paypal"></i> {/* PayPal icon */}
      </div>  
        
    </div>
    </footer>
  );
};

export default Footer;


