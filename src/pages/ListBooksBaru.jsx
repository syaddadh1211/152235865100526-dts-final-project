import React, { useEffect, useState } from "react";
import gramedia from "../apis/gramedia";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Container, ButtonBase } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";

import CardBook from "../components/CardBook";

const ListBooksBaru = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await gramedia.get("/categories/classics/books");

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
      <div className="category-title"> 10 Bulu Baru</div>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "row",
          backgroundColor: "white",
          flexWrap: "wrap",
          width: "76vw",
          marginTop: "20px",
        }}
      >
        {books.slice(0, 10).map((book) => {
          return (
            <div>
              <CardBook key={book.slug} propsBook={book} />
            </div>
          );
        })}
      </Box>
    </>
  );
};

export default ListBooksBaru;
