import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Chairs } from './pages/Chairs'
import { Navbar } from './components/Navbar'
import Cart from './components/Cart'
import HeaderComponent from './components/HeaderComponent'
import Footer from './components/Footer'
import ABFooter from './components/abfooter'
import MoveCarousel from './components/MoveCarousel';
import Offer from './components/offer'
import Carousel from './components/carousel'


function App() {
  const [show, setShow] = useState(true);
	const [cart , setCart] = useState([]);
	const [warning, setWarning] = useState(false);

	const handleClick = (item)=>{
    const isPresent = cart.find(product => product.id === item.id);
    if (isPresent) {
        setWarning(true);
        setTimeout(() => {
            setWarning(false);
        }, 2000);
        return;
    }
    setCart([...cart, { ...item, amount: 1 }]);
  }

	const handleChange = (item, d) =>{
		let ind = -1;
		cart.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = cart;
		tempArr[ind].amount += d;
		
		if (tempArr[ind].amount === 0)
			tempArr[ind].amount = 1;
		setCart([...tempArr])
	}
  const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDrMrZtO1Bzm2fJ8rArubRQKjpSA9JQYd-14X9gouet7BsG5zo',
    'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQpUp-qRvff2-iXRTF_nt12C3RF2gFbZCZxt5bStHKE4c8SlTkI',
    'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcReQbQKhfSmzgE0R_RBqH-E6cKztn7aMdBWilBEESnz1mfkDeKX',
    'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRIrAvrp4FskAzYiv4Xcd0UYqkMvnl_xmpH4YXC8y5jc0CsTeUa'
     ];

     const image2 = [
      'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQgkweJCA_Vn-vqH0O9DrE_Z0XwmWnuuTxvJSuX64npLZf22II2',
      'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTB88Yg4e0hfcDwMIA6kYs5qqKFcdUGxo4irTIl1WbChHxJMuTT',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSwBL8gex_H1wfZ-tGPV1zv-PrPdSy8tdPNTqd0uZfJbOGfK7m',
      'https://scontent.fpnq13-1.fna.fbcdn.net/v/t45.5328-4/425015487_949798886775609_7308032107663244153_n.jpg?stp=c0.0.261.261a_dst-jpg_p261x260&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=kM7ZVXhyMWsQ7kNvgF8pVx2&_nc_ht=scontent.fpnq13-1.fna&oh=00_AYCRcVnD3-iUQ-rck83AH4oe1K7eQnrXhjbkrkFzd_QErQ&oe=6646ABAA',
    ];
  return (
    <>
    <Navbar size={cart.length} setShow={setShow} />
    <div>
      <HeaderComponent />
      {}
    </div>
    <div>
      <Carousel images={image2} />
    </div>
    {/* offer  */}
    <div className="App">
      <Offer />
    </div>

    {/* movec  */}
    <div>
      <MoveCarousel images={images} interval={3000} />
    </div>

    {/* above footer  */}
    <div>
      <ABFooter />
    </div>

    {/* footer  */}
	<div>
      {/* Your main content */}
      <Footer />
    </div>
		
    </>
  )
}

export default App


