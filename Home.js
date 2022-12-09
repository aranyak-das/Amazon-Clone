import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_Image"
          src="https://m.media-amazon.com/images/I/71zekbjVqRL._SX3000_.jpg"
        />

        <div className="home_row">
          <Product
            title="ZEBRONICS Zeb-Duke Bluetooth Wireless Over Ear Headphone with Mic (Black)"
            price="1,299"
            rating={3}
            image="https://m.media-amazon.com/images/I/71p1qpkQy4L._SL1500_.jpg"
          />
          <Product
            title="2022 Apple MacBook Air M2"
            price="1,11,490"
            rating={5}
            image="https://m.media-amazon.com/images/I/719C6bJv8jL._SL1500_.jpg"
          />
        </div>

        <div className="home_row">
          <Product
            title="Amazon Echo (3rd generation) Smart speaker with Alexa, Charcoal Fabric"
            price="7,870"
            rating={4}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            title="ANDUNE Men's Barefoot & Minimalist Cross Training Shoes - Grey Bolts "
            price="2,499"
            rating={2}
            image="https://m.media-amazon.com/images/I/41NmsWUUIpS.jpg"
          />
          <Product
            title="Sapiens: A Brief History Of Humankind by Yuval Noah Harari"
            price="236"
            rating={4}
            image="https://rukminim1.flixcart.com/image/416/416/l4bn5ow0/regionalbooks/r/0/h/yuval-noah-harari-sapiens-a-brief-history-of-humankind-paperback-original-imagf8xfbdfz7hjk.jpeg?q=70"
          />
        </div>

        <div className="home_row">
          <Product
            title="SAMSUNG Crystal 4K Pro 108 cm (43 inch) Ultra HD (4K) LED Smart TV"
            price="31,990"
            rating={5}
            image="https://rukminim1.flixcart.com/image/416/416/l3nco7k0/television/v/h/5/-original-imageq5euy3ymznz.jpeg?q=70"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
