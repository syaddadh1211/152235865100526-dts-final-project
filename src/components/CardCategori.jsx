import React from "react";

import { Box, Card, CardMedia, CardContent, Typography } from "@mui/material";

// import { useNavigate } from "react-router-dom";

const CardCategori = () => {
  //   let navigate = useNavigate();

  //   const handleBook = (event, book) => {
  //     navigate("selected/" + book.slug);
  //   };

  return (
    <>
      <Card
        className="boxy"
        sx={{
          width: 300,
          height: 540,
        }}
        variant="elevation"
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
          {/* <CardMedia
            variant="outlined"
            component="img"
            image={`${propsBook.image}`}
            alt="Kucing"
            onClick={(event) => handleBook(event, propsBook)}
            sx={{ width: 300 }}
          ></CardMedia> */}

          <CardContent
            sx={{
              width: 200,
            }}
          >
            <Typography variant="h5" marginBottom={"1em"}>
              Kategori Buku
            </Typography>
            <Typography variant="body1" align="left">
              test1
            </Typography>
            <Typography variant="body1" align="left">
              test2
            </Typography>
            <Typography variant="body1" align="left">
              test3
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </>
  );
};

export default CardCategori;
