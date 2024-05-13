import React from 'react'
import HeaderComponent from '../components/HeaderComponent';
import Carousel from '../components/Carousel';
import Offer from '../components/offer';
import MoveCarousel from '../components/MoveCarousel';
import ABFooter from '../components/abfooter';
import Footer from '../components/Footer';


export const Home = () => {
    const images = [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDrMrZtO1Bzm2fJ8rArubRQKjpSA9JQYd-14X9gouet7BsG5zo',
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQpUp-qRvff2-iXRTF_nt12C3RF2gFbZCZxt5bStHKE4c8SlTkI',
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcReQbQKhfSmzgE0R_RBqH-E6cKztn7aMdBWilBEESnz1mfkDeKX',
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRIrAvrp4FskAzYiv4Xcd0UYqkMvnl_xmpH4YXC8y5jc0CsTeUa'
         ];
    
         const image2 = [
          'data:image/jpeg;base64,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',
          'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTB88Yg4e0hfcDwMIA6kYs5qqKFcdUGxo4irTIl1WbChHxJMuTT',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSwBL8gex_H1wfZ-tGPV1zv-PrPdSy8tdPNTqd0uZfJbOGfK7m',
          'https://scontent.fpnq13-1.fna.fbcdn.net/v/t45.5328-4/425015487_949798886775609_7308032107663244153_n.jpg?stp=c0.0.261.261a_dst-jpg_p261x260&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=kM7ZVXhyMWsQ7kNvgF8pVx2&_nc_ht=scontent.fpnq13-1.fna&oh=00_AYCRcVnD3-iUQ-rck83AH4oe1K7eQnrXhjbkrkFzd_QErQ&oe=6646ABAA',
        ];
  return (
    <>
     <div style={{marginTop:"80px"}}>
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
