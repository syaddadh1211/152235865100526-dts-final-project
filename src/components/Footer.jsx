import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <div className="left-right">
        <nav className="navigasi">
          <p>Layanan Pelanggan</p>
          <p>Cara Belanja</p>
        </nav>
        <nav className="navigasi">
          <p>Kontak Kami</p>
          <p>Cara Belanja</p>
        </nav>
        <nav className="navigasi">
          <p>Kebijakan Toko</p>
          <p>Cara Belanja</p>
        </nav>
      </div>
      <div className="left-right">
        <h3 className="sect_foot">
          Copyright &copy; 2022 Syaddad Hilmi Bahalwan -152235865100-526 - All
          Right Reserved - DTS Jalur PROA, React Developer
        </h3>
      </div>
    </div>
  );
};

export default Footer;
