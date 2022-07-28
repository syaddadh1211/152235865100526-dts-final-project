import React, { useEffect, useState } from "react";
import { gramediaLokal } from "../apis/gramedia";

import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

import CardBook from "../components/CardBook";

const ListBooksPopular = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await gramediaLokal.get("/categories/islam/books");

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
      <div className="category-title"> 10 Bulu Religi Terlaris</div>
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

export default ListBooksPopular;
