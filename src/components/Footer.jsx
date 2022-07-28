import React from "react";
import "./footer.css";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { green, purple, blue } from "@mui/material/colors";

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
              <WhatsAppIcon fontSize="large" sx={{ color: green[200] }} />
            </p>
          </div>
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
          <p className="category-subtitle">Informasi</p>
          <div className="kontak">
            <p>Tentang Kami</p>
            <p>E-book FAQ</p>
            <p>Terms and Conditions</p>
          </div>
        </nav>
        <nav className="navigasi">
          <p className="category-subtitle">Ikuti Kami :</p>
          <div>
            <a href="https://www.linkedin.com/in/syaddad-hilmi-bahalwan-69b1a073/">
              <LinkedInIcon
                color="secondary"
                fontSize="large"
                sx={{ color: blue[200] }}
              />
            </a>
            <a
              href="https://www.instagram.com/freshbean.cafe/"
              alignItems="left"
            >
              <InstagramIcon fontSize="large" sx={{ color: purple[500] }} />
            </a>
            <a href="https://syaddadh1211.github.io/">
              <FacebookIcon fontSize="large" sx={{ color: blue[800] }} />
            </a>
          </div>
          <p>
            <a href="mailto:bahalwans@gmail.com">
              <MailOutlineIcon fontSize="medium" sx={{ color: purple[700] }} />
            </a>
          </p>
        </nav>
      </div>

      <section className="sect_foot">
        Copyright &copy; 2022, by Syaddad Hilmi Bahalwan
        -152235865100526-dts-final-project - All Right Reserved - DTS Jalur
        PROA, React Developer
      </section>
    </div>
  );
};

export default Footer;
