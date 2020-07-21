import React from "react";
import ProductCard from "./ProductCard";
import "./Home.css";
import { data } from "../data/data";

function Home() {
  return (
    <>
      <div className="home">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/PVD4719_GWMultititleJune2020/BRND_MTH20_00000_GWBleedingHero_1500x600_Final_en-US_PVD4719_Multi2._CB431171960_.jpg"
          alt="banner"
          className=" homepage-banner"
        />
        <div className="container-fluid productAlignment d-flex flex-wrap justify-content-around">
          {data.map((item) => {
            return (
              <ProductCard
                id={item.id}
                price={item.price}
                desc={item.desc}
                img={item.img}
                title={item.title}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
