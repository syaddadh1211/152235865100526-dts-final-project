import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import Footer from "../components/Footer";
import "./style.css";
import { gramediaAll } from "../apis/gramedia";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

const DetailBook = () => {
  let params = useParams();

  const [book, setBook] = useState([]);
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await gramediaAll.get(
          "/books/" + params.bookSlug + "/detail"
        );
        setBook(response.data.book);
        setDetail(response.data.book.detail);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    //cukup sekali dijalankan jadi dikasih array kosong, kalo ingin setiap kali reaktif saat ada perubahan state maka
    //array bisa diisi nama statenya
  }, []);

  return (
    <div>
      <Card
        sx={{
          display: "flex",
          justifyContent: "left",
          marginLeft: "4px",
          marginTop: "4px",
          width: "99%",
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: 251, margin: "24px 24px 24px 24px" }}
          image={book.image}
          alt={book.slug}
        />

        <Box
          sx={{
            display: "flex",
          }}
        >
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h6" className="category-title">
              {book.title}
            </Typography>
            <Divider />
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              className="card-author"
            >
              {book.author} {" (Author)"}
            </Typography>

            <Typography component="div" variant="h6" className="card-title">
              Detail Buku
            </Typography>
            <Divider />
            <Typography component="div" variant="body1">
              {/* Penerbit : {book.detail} */}
            </Typography>
            <Typography component="div" variant="body1">
              Tgl. Terbit : {detail.release_date}
            </Typography>
            <Typography component="div" variant="body1">
              Bahasa : {detail.language}
            </Typography>
            <Typography component="div" variant="body1">
              Jumlah Halaman : {detail.page_count}
            </Typography>
            <Typography component="div" variant="h6" className="card-price">
              {book.price}
            </Typography>
          </CardContent>
        </Box>
      </Card>
      <Accordion
        sx={{
          marginTop: "15px",
          marginBottom: "15px",
          marginLeft: "15px",
          maxWidth: "75%",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Deskripsi</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ width: "100%", flexShrink: 0 }} variant="body2">
            {detail.description}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Footer />
    </div>
  );
};

export default DetailBook;
