import React from "react";

import {
  IconButton,
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";

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
  const theme = useTheme();
  return (
    <>
      {/* <Card
        sx={{
          minWidth: 275,
          height: 340,
          marginRight: "2em",
          marginBottom: "2em",
        }}
        variant="outlined"
      >
        <Box
          sx={{
            display: "flex",
            marginTop: "2em",
            width: "auto",
            height: 240,
          }}
        >
          <CardMedia
            component="img"
            image={`${propsBook.image}`}
            alt="book"
            onClick={(event) => handleBook(event, propsBook)}
            sx={{ width: 150, height: 250 }}
          ></CardMedia>

          <CardContent
            sx={{
              textAlign: "left",
              width: 150,
              height: 150,
            }}
          >
            <Typography variant="body1">{propsBook.title}</Typography>
            <Typography variant="body1">{propsBook.price}</Typography>
            <Typography variant="h6">Author :{propsBook.author}</Typography>
          </CardContent>
        </Box>
      </Card> */}
      <Card
        sx={{
          display: "flex",
          marginTop: "2em",
          marginRight: "2em",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", width: "200" }}>
          <CardContent sx={{ flex: "1 1 auto", width: "200" }}>
            <Typography component="div" variant="h5">
              {propsBook.title}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.primary"
              component="div"
            >
              {propsBook.author}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {propsBook.price}
            </Typography>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={`${propsBook.image}`}
          alt="Live from space album cover"
        />
      </Card>
    </>
  );
};

export default CardBook;
