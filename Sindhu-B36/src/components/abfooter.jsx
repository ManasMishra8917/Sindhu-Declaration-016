// abfooter.jsx

import React from 'react';
import './abfooter.css';

const ABFooter = () => {
  return (
    <div className="footer-container">
      <div className="box">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-XwtnfOAZm3aG67edxSABUNm_WDTt6SCpujt5WT2GgK2p38KZ" alt="Clock Logo" className="logo" />
        <p>Working every day, 24/7</p>
      </div>
      <div className="box">
        <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRN-q6-uNIzhENMkt7F7rm8FzxP2Hsxt1c81AbyYxUJthfpYzer" alt="Delivery Logo" className="logo" />
        <p>Free delivery worldwide</p>
      </div>
      <div className="box">
        <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSCNJ_U1txqgLxtiWteo5Et_2p9ixZAJIkoDQNwflJUtAG7W1W3" alt="Document Logo" className="logo" />
        <p>Support documents available</p>
      </div>
    </div>
  );
};

export default ABFooter;
