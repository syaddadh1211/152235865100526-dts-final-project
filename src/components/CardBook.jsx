import React from "react";

import {
  IconButton,
  Box,
  Paper,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useNavigate } from "react-router-dom";

const CardBook = ({ propsBook }) => {
  let navigate = useNavigate();

  const handleBook = (event, book) => {
    navigate("selected/" + book.slug);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

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
            <CardMedia
              component="img"
              height="200px"
              sx={{ width: 121 }}
              image={`${propsBook.image}`}
              alt="green book"
              textAlign="center"
            />
            <div className="card-title">{propsBook.title}</div>
            <div className="card-author">{propsBook.author}</div>
            <div className="card-price">{propsBook.price}</div>
          </Grid>
        </Grid>
      </Box>

      {/* <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="200px"
          sx={{ width: 131 }}
          image={`${propsBook.image}`}
          alt="green book"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {propsBook.title}
          </Typography>
          <Typography variant="h6" color="text.secondary" component="div">
            {propsBook.author}
          </Typography>
          <Typography variant="h6" color="blue" component="div">
            {propsBook.price}
          </Typography>
        </CardContent>
      </Card> */}
    </>
  );
};

export default CardBook;
