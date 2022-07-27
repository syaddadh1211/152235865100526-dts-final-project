import React, { useEffect, useState } from "react";
import gramedia from "../apis/gramedia";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Container, ButtonBase } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import fb from "../images/facebook.png";
import ig from "../images/instagram.png";
import whatsapp from "../images/whatsapp.png";
import twitter from "../images/twitter.png";
import CardBook from "../components/CardBook";

const ListBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await gramedia.get(
          "/categories/science-fiction-fantasy/books"
        );

        setBooks(response.data.books);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    //cukup sekali dijalankan jadi dikasih array kosong, kalo ingin setiap kali reaktif saat ada perubahan state maka
    //array bisa diisi nama statenya
  }, []);

  return (
    <>
      {/* <Card
              sx={{
                maxWidth: 345,
              }}
            > */}

      {/* <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over
                    6,000 species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea> */}
      {/* <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over
                    6,000 species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea> */}

      {/* </Grid>
              </Grid>
              </Card>
          </Box> */}
      {/* <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        > */}
      {/* {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Item>xs=2</Item> */}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "row",
          backgroundColor: "white",
          flexWrap: "wrap",
        }}
      >
        {books.map((book) => {
          return (
            <div>
              <CardBook key={book.slug} propsBook={book} />
            </div>
          );
        })}
        {/* </Grid> */}
      </Box>
    </>
  );
};

// const Img = styled("img")({
//   margin: "auto",
//   display: "block",
//   maxWidth: "100%",
//   maxHeight: "100%",
// });

// return (
//   <Paper
//     sx={{
//       p: 2,
//       margin: "auto",
//       maxWidth: 400,
//       flexGrow: 1,
//       backgroundColor: (theme) =>
//         theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//       direction: "row",
//     }}
//   >
//     {books.map((book) => {
//       return (
//         <Grid
//           container
//           spacing={{ xs: 2, md: 3 }}
//           columns={{ xs: 4, sm: 8, md: 12 }}
//         >
//           <Grid item>
//             <ButtonBase sx={{ width: 128, height: 128 }}>
//               <Img alt="complex" src={book.image} />
//             </ButtonBase>
//           </Grid>
//           <Grid item xs={12} sm container>
//             {/* <Grid item xs container direction="row" spacing={2}> */}
//             <Grid item xs md={4} container>
//               <Grid item xs>
//                 <Typography gutterBottom variant="subtitle1" component="div">
//                   Standard license
//                 </Typography>
//                 <Typography variant="body2" gutterBottom>
//                   Full resolution 1920x1080 • JPEG
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   ID: 1030114
//                 </Typography>
//               </Grid>
//             </Grid>
//             <Grid item>
//               <Typography variant="subtitle1" component="div">
//                 $19.00
//               </Typography>
//             </Grid>
//           </Grid>
//         </Grid>
//       );
//     })}
//   </Paper>
// );

export default ListBooks;
