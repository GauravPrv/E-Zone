import React from "react";

import { Product, FooterBanner, HeroBanner } from "../components";
import { client } from "../lib/client";

const Home = () => {
  return (
    <div>
      HeroBanner
      <div className="products-heading">
        <h2>Best Selling Product</h2>
        <p>Many Headphones</p>
      </div>
      <div className="products-container">
        {["Product 1", "Product 2"].map((product) => product)}
      </div>
      <FooterBanner />
    </div>
  );
};

export default Home;
