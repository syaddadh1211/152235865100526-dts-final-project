import React from "react";

import { Box, Grid, CardMedia } from "@mui/material";

import { useNavigate } from "react-router-dom";

const CardBook = ({ propsBook }) => {
  let navigate = useNavigate();

  const handleBook = (event, book) => {
    navigate("selected/" + book.slug);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          columns={4}
          paddingTop="10px"
          marginRight="10px"
          marginLeft="10px"
          maxWidth="138px"
        >
          <Grid item xs={8}>
            <a href={"#"}>
              <CardMedia
                component="img"
                height="200px"
                sx={{ width: 121 }}
                image={`${propsBook.image}`}
                alt="green book"
                textAlign="center"
                onClick={(event) => handleBook(event, propsBook)}
              />
            </a>
            <div className="card-title">{propsBook.title}</div>
            <div className="card-author">{propsBook.author}</div>
            <div className="card-price">{propsBook.price}</div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CardBook;
