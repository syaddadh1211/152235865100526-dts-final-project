import React from "react";

import { Box, Card, CardMedia, CardContent, Typography } from "@mui/material";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useNavigate } from "react-router-dom";

// const urlDepan = "https://ebooks.gramedia.com/ebook-covers";

const CardBook = ({ propsBook }) => {
  let navigate = useNavigate();

  const handleBook = (event, book) => {
    navigate("selected/" + book.slug);
  };

  return (
    <>
      <Card
        className="boxy"
        sx={{
          width: 1400,
          height: 540,
        }}
        variant="outlined"
      >
        <Box
          className="boxy"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: 440,
          }}
        >
          <CardMedia
            variant="outlined"
            component="img"
            image={`${propsBook.image}`}
            alt="Kucing"
            onClick={(event) => handleBook(event, propsBook)}
            sx={{ width: 300 }}
          ></CardMedia>

          <CardContent
            sx={{
              textAlign: "center",
              width: 400,
            }}
          >
            <Typography variant="body1">{propsBook.title}</Typography>
            <Typography variant="body1">{propsBook.price}</Typography>
            <Typography variant="body1">{propsBook.author}</Typography>
          </CardContent>
        </Box>
      </Card>
    </>
  );
};

export default CardBook;
