import React, { useEffect, useState } from "react";
import { gramedia } from "../apis/gramedia";
import { Box, Stack, Typography, Breadcrumbs } from "@mui/material";
import CardBook from "../components/CardBook";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const ListBooks = ({ propId, paramBooks, keyword }) => {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (propId == 1) {
          const response = await gramedia.get(
            "/categories/science-fiction-fantasy/books"
          );
          setBooks(response.data.books);
          setTitle("10 Bulu Import Terlaris");
        } else if (propId == 2) {
          setBooks(paramBooks);
          setTitle("Hasil Pencarian dengan keyword : " + keyword);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [propId, paramBooks, keyword]);

  const breadcrumbs = [
    <Typography key="3" color="text.primary">
    MuI
  </Typography>
   <Typography key="3" color="text.primary">
      Core
    </Typography>
    <Typography key="3" color="text.primary">
      Breadcrumb
    </Typography>,
  ];

  return (
    <>
      <Stack spacing={2}>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <Breadcrumbs separator="-" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
      <div className="search-result">{title}</div>
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

export default ListBooks;
