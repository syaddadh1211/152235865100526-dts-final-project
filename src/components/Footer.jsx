import React from "react";
import "./footer.css";
import fb from "../images/facebook.png";
import ig from "../images/instagram.png";
import whatsapp from "../images/whatsapp.png";
import twitter from "../images/twitter.png";

const Footer = () => {
  return (
    <div>
      <div className="left-right">
        <nav className="navigasi">
          <p className="category-subtitle">Layanan Pelanggan</p>
          <div className="kontak">
            <p>Cara Belanja</p>
            <p>Pembayaran</p>
            <p>Deposit</p>
          </div>
        </nav>
        <nav className="navigasi">
          <p className="category-subtitle">Kontak Kami</p>
          <div className="kontak">
            <p>Senin - Jum'at (08:00 - 17.00) </p>
            <p>Customer Care : (+62) 21 1234 56677</p>
            <p>
              Product Related : 6287784963509{" "}
              <span>
                <img src={whatsapp} alt="wa" width="26" height="26" />{" "}
              </span>
            </p>
            <p>
              Order Related :{" "}
              <a href="mailto:bahalwans@gmail.com">bahalwans@gmail.com</a>
            </p>
          </div>
          <p className="category-subtitle">Ikuti Kami :</p>
          <a href="https://www.linkedin.com/in/syaddad-hilmi-bahalwan-69b1a073/">
            <img src={whatsapp} alt="linkedin" width="46" height="46" />
          </a>
          <a href="https://www.instagram.com/freshbean.cafe/">
            <img src={ig} alt="instagram" width="46" height="46" />
          </a>
          <a href="https://syaddadh1211.github.io/">
            <img src={fb} alt="fb" width="46" height="46" />
          </a>
        </nav>
        <nav className="navigasi">
          <p className="category-subtitle">Kebijakan Toko</p>
          <div className="kontak">
            <p>Kebijakan Pengiriman</p>
            <p>Kebijakan Pengembalian Barang</p>
            <p>Kebijakan Pengembalian Uang</p>
          </div>
        </nav>
        <nav className="navigasi">
          <p className="category-subtitle">Jasa Pengiriman</p>
          <div className="kontak">
            <p>Cara Belanja</p>
          </div>
        </nav>
        <nav className="navigasi">
          <p className="category-subtitle">Metode Pembayaran</p>
          <div className="kontak">
            <p>Cara Belanja</p>
          </div>
        </nav>
      </div>
      <div className="sect_foot">
        <h3>
          Copyright &copy; 2022, by Syaddad Hilmi Bahalwan
          -152235865100526-dts-final-project - All Right Reserved - DTS Jalur
          PROA, React Developer
        </h3>
      </div>
    </div>
  );
};

export default Footer;
