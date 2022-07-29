import React from "react";
import { Box, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import quote1 from "../images/pre-order.jpg";
import quote2 from "../images/promo.jpeg";

const CardQuote = ({ quote }) => {
  let navigate = useNavigate();
  if (quote == 2) {
    quote = quote2;
  } else if (quote == 1) {
    quote = quote1;
  }

  const handleBook = (event, book) => {
    navigate("selected/" + book.slug);
  };

  return (
    <>
      <Container
        sx={{
          backgroundColor: "inherit",
          marginTop: "20px",
          marginBottom: "5px",
          marginLeft: "0px",
          width: "6vw",
        }}
      >
        <Box
          sx={{
            width: "50vw",
            height: "auto",
            marginRight: "5px",
            marginTop: "1vh",
          }}
        >
          <img
            src={quote}
            alt="quote"
            style={{
              maxHeight: "50%",
              maxWidth: "140%",
              marginLeft: "0.2em",
            }}
          />
        </Box>
      </Container>
    </>
  );
};

export default CardQuote;
