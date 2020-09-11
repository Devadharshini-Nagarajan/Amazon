import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_img"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="1"
          title="Introducing Echo Show 5 - Smart display with Alexa - 5.5 screen & crisp sound (White)"
          price={29.99}
          image="https://images-na.ssl-images-amazon.com/images/I/51gxWE7MiXL._SY300_.jpg"
          rating={4}
        />
        <Product
          id="2"
          title="Amazon Echo (3rd Gen) – Improved sound, powered by Dolby (Grey)"
          price={60.99}
          image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
          rating={4}
        />
      </div>
      <div className="home_row">
        <Product
          id="3"
          title="Roll over image to zoom in Aatiutik Magic Crystal Ball Night Lamp Wall Light Home Decoration Light (White)  "
          price={29.99}
          image="https://images-na.ssl-images-amazon.com/images/I/71K0L9KpokL._SL1100_.jpg"
          rating={4}
        />
        <Product
          id="4"
          title="ChefWave Air Fryer Oven - 16 Quart Air Fryer, Rotisserie, Dehydrator Combo Oven - Deluxe Countertop Cooker with 10 Skewers, Baking Steak and Fish"
          price={55.99}
          image="https://images-na.ssl-images-amazon.com/images/I/71aVv2NYXgL._AC_SX679_.jpg"
          rating={3}
        />
        <Product
          id="5"
          title="Ecovacs DEEBOT OZMO 950 Robotic Vacuum Cleaner 2-in-1 Vacuuming & Mopping with Smart Navi 3.0 Laser Technology Custom Cleaning Multi-Floor Mapping Virtual Wall Works on Carpets & Hard Floors"
          price={70.99}
          image="https://images-na.ssl-images-amazon.com/images/I/51oJ63OHnbL._SL1000_.jpg"
          rating={4}
        />
      </div>
      <div className="home_row">
        <Product
          id="6"
          title="Best Choice Products 6-Piece 55in Modern Home Dining Set w/Storage Racks, Rectangular Table, Bench, 4 Chairs - Brown"
          price={299.99}
          image="https://images-na.ssl-images-amazon.com/images/I/81Nyo7isqcL._AC_SL1500_.jpg"
          rating={4}
        />
      </div>
    </div>
  );
}

export default Home;
