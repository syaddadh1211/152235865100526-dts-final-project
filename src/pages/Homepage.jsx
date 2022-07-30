import React from "react";
import "./style.css";

import ListBooks from "../components/ListBooks";
import Footer from "../components/Footer";
import CardCategori from "../components/CardCategori";
import CardQuote from "../components/CardQuote";

const HomePage = () => {
  return (
    <div>
      <div className="left-right">
        <nav className="navigasi">
          <CardCategori />
        </nav>
        <section>
          <CardQuote quote="2" />
          <ListBooks propId="1" paramBooks="" keyword="" />
          <ListBooks propId="3" paramBooks="" keyword="" />
          <ListBooks propId="4" paramBooks="" keyword="" />
          <CardQuote quote="1" />
        </section>
      </div>
      <Footer />
    </div>
  );
};
export default HomePage;
