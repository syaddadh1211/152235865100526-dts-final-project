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
          <ListBooks propId="1" paramBooks="" keyword="Buku Import Terlaris" />
          <ListBooks
            propId="3"
            paramBooks=""
            keyword="Buku Import Classic Terbaru"
          />
          <ListBooks propId="4" paramBooks="" keyword="Buku Religi Terlaris" />
          <CardQuote quote="1" />
        </section>
      </div>
      <Footer />
    </div>
  );
};
export default HomePage;
