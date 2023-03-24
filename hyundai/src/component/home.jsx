/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import { Link } from "react-router-dom";
import '../styles/home.css';
import ReactPlayer from 'react-player';


const Home= () =>{

    return (
        <div>
  <div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="./Assets/cimage1.jpg" class="d-block w-100" alt="..." height="550px" width="100%"/>
      </div>
      <div class="carousel-item">
        <img src="./Assets/cimage2.jpg" class="d-block w-100" alt="..." height="550px" width="100%"/>
      </div>
      <div class="carousel-item">
        <img src="./Assets/cimage3.jpg" class="d-block w-100" alt="..." height="550px" width="100%"/>
      </div>
      <div class="carousel-item">
        <img src="./Assets/images5.jpeg" class="d-block w-100" alt="..." height="550px" width="100%"/>
      </div>
      <div class="carousel-item">
        <img src="./Assets/cimage4.jpg" class="d-block w-100" alt="..."  height="550px" width="100%"/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  <div>
    <br/>
 <h1 className="heading">  About us</h1>
 <p className="aboutcontent"> As a global auto parts vendor, we focus on autonomous driving, connectivity and electrification to be a leader in the era of smart mobility. Based on three modular auto components (i.e. chassis, cockpit and front-end), we work to make driving safer and easier and also offer service parts that can best serve the purpose. In addition, we are the first global vendor to adopt a massive flow production line for the key components of hydrogen-fueled vehicles, playing a leading role in the development of the technology towards full production.

Our vision is to be a provider of differentiated mobility solutions that combine software and hardware in the upcoming mobility industry. To make this vision a reality, we have expanded our business areas to include smart mobility, UAM and robotics based on our R&D capability and production capacity.


Mobis India supplies After-sales Parts and accessories, through a network of its own Parts Distribution Centers (PDCs) operating in various Metropolitan cities and Hyundai Authorized Dealers/Mobis Authorized Distributors spread across the length and breadth of India.


<br/>Mobis India’s presence is not just limited to domestic market but is spread across the overseas market as well. It exports After-sales Parts and accessories through its wide network of Overseas Distributors.


MOBIS India’s strength in the After-Sales Parts business lies in the strong bond between its fully integrated (forward & backward) supply chain solutions, vendor base, Pan-India Dealers & Distributors Network and its end customers. With its global expertise, MOBIS has upgraded the Dealers & Distributors network to a highly efficient and sustainable B2B network, with the aim to provide World-class Service quality to the Hyundai Customers.
<img src="./Assets/nimage1.jpg" className="sideimg" alt="..." height="200px" width="190px"/></p>

  <h1 className="heading">  Special Offers</h1>
  <p className="aboutcontent"> <img src="./Assets/nimage2.jpg" className="sideimg1" alt="..." height="230px" width="190px"/>The Automotive Parts Market is full of alternatives. As inexpensive as possible, fitting non-Genuine or refurbished Parts to your Hyundai will affect the warranty of your vehicle. Those Parts are not manufactured under such stringent standards as Hyundai Genuine Parts. Get latest offers and discounts on Hyundai Genuine Parts.
  <br/>Hyundai Genuine Parts are designed and engineered specifically for delivering performance and longevity of your Hyundai cars, all Hyundai Genuine Parts are made to the highest standards.
Hyundai Genuine Parts are tested under various simulated extreme conditions to ensure Quality, Reliability and Durability. Over the years, significant investments in R&D have been made to study the design, material selection and internal construction of Hyundai Genuine Parts. They are also backed by a 6 month/10,000km warranty.
<br/>
Hyundai MOBIS is an exclusive and official partner of Hyundai Motors in India as well as globally. Hyundai Mobis is leading the trend of change and strives to become a leading company in automotive future technology.

We promise to realize the ultimate value that Hyundai Mobis pursues as 'Safety and Happiness of our customers' by steadily advancing into the global market as well as providing fast and accurate as parts .

The Automotive Parts Market is full of cheap alternatives. As inexpensive as possible, fitting non-Genuine or refurbished Parts to your Hyundai will affect the warranty of your vehicle. Those Parts are not manufactured under such stringent standards as Hyundai Genuine Parts.

Fitting such Parts will not only hamper the quality of your car, but will also affect other parts and cause more problems, leading to more repairs, or worse, an accident.So your family’s safety and peace of mind, always insist on Hyundai Genuine Parts.

For peace of mind, always insist on Hyundai Genuine Parts</p>
<br/><br/>
<div className="videogroup"> 
<ReactPlayer controls url="https://youtu.be/LOik_9vGe7I" className="video"/><br/>
<ReactPlayer controls url="https://youtu.be/bCyRnDiTZYc" className="video"/>
</div>
<br/><br/>
  </div>
 <div className="footer">
  <ul className="footul">
   <li className="foothead">About Mobis</li> 
   <li>Who are we</li>
   <li>What we do</li>
   <li>Message from MD</li>
   <li>Vision and Philosophy</li>
   <li>CSR</li>
  </ul>
  <ul className="footul">
   <li className="foothead">Media</li> 
   <li>Print Ads</li>
   <li>Video Ads</li>
   <li>Radio Ads</li>
   <li>Magazine</li>
  </ul>
  <ul className="footul">
  <li className="foothead">Locate Us</li> 
   <li>Find a Dealer</li>
   <li>Find a Distributor</li>
  </ul>
  <ul className="footul">
  <li className="foothead">Offers & Promotions</li> 
   <li>Offers</li>
  </ul>
  <ul className="footul1">
  <li className="foothead">Follow Us On</li> 
    <i class="uil uil-instagram"></i> 
   <i class="uil uil-facebook-f"></i> 
    <i class="uil uil-twitter-alt"></i> 
   <i class="uil uil-linkedin-alt"></i>
  </ul>
 </div>
  </div>
       
    

    )
}
export default Home;
