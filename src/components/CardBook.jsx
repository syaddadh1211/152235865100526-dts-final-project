import React from "react";

import { Box, Grid, CardMedia } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { doc, deleteDoc, getFirestore } from "firebase/firestore";

const CardBook = ({ propsBook, remark }) => {
  let navigate = useNavigate();

  const handleBook = (event, book) => {
    navigate("/selected/" + book.slug);
  };

  const btnOnClickHandler = async (event, book) => {
    event.preventDefault();
    const db = getFirestore();
    const docRef = doc(db, "user_wishlist", book);
    deleteDoc(docRef)
      .then(() => {
        console.log("Entire Document has been deleted successfully.");
      })
      .catch((error) => {
        console.log(error);
      });
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
            <a href="#">
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

            <div>
              {remark.slice(0, 5) !== "There" ? (
                ""
              ) : (
                <button
                  onClick={(event) => btnOnClickHandler(event, propsBook.id)}
                >
                  Delete
                </button>
              )}
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CardBook;
