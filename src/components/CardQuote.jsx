import React from "react";
import { Box, Container } from "@mui/material";
import quote1 from "../images/pre-order.jpg";
import quote2 from "../images/promo.jpeg";
import quote3 from "../images/login-cover1.jpg";

const CardQuote = ({ quote }) => {
  if (quote == 2) {
    quote = quote2;
  } else if (quote == 1) {
    quote = quote1;
  } else if (quote == 3) {
    quote = quote3;
  }
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
