import React, { useEffect, useState } from "react";
import { gramedia } from "../apis/gramedia";
import { Box } from "@mui/material";
import CardBook from "./CardBook";

const ListBooks = ({ propId, paramBooks, keyword }) => {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let response;
      try {
        switch (propId) {
          case "1":
            response = await gramedia.get(
              "/categories/science-fiction-fantasy/books"
            );
            setBooks(response.data.books);
            setTitle("10 Buku Import Terlaris");
            break;
          case "2": // dari SearchResult component
            setBooks(paramBooks);
            setTitle("");
            break;
          case "3":
            response = await gramedia.get("/categories/classics/books");
            setBooks(response.data.books);
            setTitle("10 Buku Import Classic Terbaru");
            break;
          case "4":
            response = await gramedia.get("/categories/islam/books");
            setBooks(response.data.books);
            setTitle("10 Bulu Religi Terlaris");
            break;
          default:
            setBooks([]);
            setTitle("");
            break;
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [propId, paramBooks, keyword]);

  return (
    <>
      <div className="category-title">{title}</div>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "row",
          backgroundColor: "white",
          flexWrap: "wrap",
          width: "76vw",
        }}
      >
        {books.slice(0, 10).map((book, index) => {
          return (
            <div>
              <CardBook key={index + 1} propsBook={book} />
            </div>
          );
        })}
      </Box>
    </>
  );
};

export default ListBooks;
