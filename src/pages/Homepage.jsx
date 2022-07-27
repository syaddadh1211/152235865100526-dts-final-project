import React from "react";
import "./style.css";

import ListBooks from "../pages/ListBooks";
import ListBooksBaru from "../pages/ListBooksBaru";
import ListBooksPopular from "./LisbBooksPopular";
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
          <ListBooks />
          <ListBooksBaru />
          <ListBooksPopular />
          <CardQuote />
        </section>
      </div>
      <Footer />
    </div>
  );
};
export default HomePage;
