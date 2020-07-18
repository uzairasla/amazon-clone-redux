import React from "react";
import ProductCard from "./ProductCard";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="home">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/PVD4719_GWMultititleJune2020/BRND_MTH20_00000_GWBleedingHero_1500x600_Final_en-US_PVD4719_Multi2._CB431171960_.jpg"
          alt="banner"
          className=" homepage-banner"
        />
        <div className="container-fluid productAlignment d-flex justify-content-around">
          <ProductCard
            imgSrc="https://images-na.ssl-images-amazon.com/images/I/81vs5TXBrlL._AC_SL1500_.jpg"
            cardTitle="Apple Macbook Pro 16 inch"
            cardText="amazing laptop"
            urlText="Add to Cart"
          />
          <ProductCard
            imgSrc="https://m.media-amazon.com/images/I/51ak5UUMBKL._AC_SY240_.jpg"
            cardTitle="Norton 360"
            cardText="Delete any malware from your PC"
            urlText="Add to Cart"
          />
          <ProductCard
            imgSrc="https://images-na.ssl-images-amazon.com/images/I/81vs5TXBrlL._AC_SL1500_.jpg"
            cardTitle="Apple Macbook Pro 16 inch"
            cardText="amazing laptop"
            urlText="Add to Cart"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
