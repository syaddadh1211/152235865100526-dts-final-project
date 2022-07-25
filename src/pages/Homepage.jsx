import React from "react";
import "./style.css";

import ListBooks from "../pages/ListBooks";
import ListBookPopular from "../pages/LisbBookPopular";
import Footer from "../components/Footer";
import Image from "../../src/images/recom.png";
import CardCategori from "../components/CardCategori";

const HomePage = () => {
  return (
    <div className="bg">
      <div className="left-right">
        <nav className="navigasi">
          <CardCategori />
        </nav>
        <section class="konten1">
          <ListBooks />
          {/* <p className="bg_sect">
          <h2 className="sect_foot">
            <img
              src={Image}
              alt="buku_rekomendasi"
              width="44px"
              height="44px"
              float="right"
              className="book_icon"
            />
            E-Book Terlaris
          </h2>
          </p> */}
        </section>
        {/* <section>
          <ListBookPopular />
        </section> */}
      </div>
      <Footer classname="bg_foot" />
    </div>
  );
};
export default HomePage;
