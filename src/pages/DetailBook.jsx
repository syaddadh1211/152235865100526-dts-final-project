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
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { auth, firestore } from "../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";

const DetailBook = () => {
  let params = useParams();
  const [user] = useAuthState(auth);
  const [book, setBook] = useState([]);
  const [detail, setDetail] = useState([]);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

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
  }, [params.bookSlug]);

  const user_wishlist = collection(firestore, "user_wishlist");

  const handleWish = async (event, book) => {
    let bookWish = [];
    const wishlistQuery = query(
      collection(firestore, "user_wishlist"),
      where("email", "==", user.email),
      where("slug", "==", book.slug)
    );

    const querySnapshot = await getDocs(wishlistQuery);
    querySnapshot.forEach((book) => {
      bookWish.push(book.data());
    });
    if (bookWish.length > 0) {
      setOpen(true);
      setMessage("Buku ini sudah ada dalam Wishlist kamu");
    } else {
      event.preventDefault();
      const newDoc = await addDoc(user_wishlist, {
        email: user.email,
        author: book.author,
        image: book.image,
        price: book.price,
        slug: book.slug,
        title: book.title,
      });
      setMessage("Berhasil ditambahkan ke Wishlist");
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

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
            <Button
              variant="contained"
              onClick={(event) => handleWish(event, book)}
            >
              Add to Wishlist
            </Button>

            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"User Wishlist"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  {message}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} autoFocus>
                  Tutup
                </Button>
              </DialogActions>
            </Dialog>
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
