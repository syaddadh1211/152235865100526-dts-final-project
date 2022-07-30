import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import { gramediaKeyword } from "../apis/gramedia";
import ListBooks from "../components/ListBooks";
import Footer from "../components/Footer";
import CardCategori from "../components/CardCategori";
import { Stack, Typography, Breadcrumbs } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const SearchResult = () => {
  let params = useParams();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await gramediaKeyword.get("/books/search", {
          params: { keyword: params.keyword },
        });
        setBooks(response.data.books);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [params.keyword]);

  const breadcrumbs = [
    <Typography key="3" color="text.primary">
      Hasil Pencarian
    </Typography>,
    <Typography key="3" color="text.primary">
      Kata Kunci
    </Typography>,
    <Typography key="3" color="text.primary">
      {params.keyword}
    </Typography>,
  ];

  return (
    <div>
      <div className="left-right">
        <nav className="navigasi">
          <CardCategori />
        </nav>
        <section>
          <Stack
            spacing={2}
            sx={{
              marginTop: "1em",
              marginBottom: "2em",
              marginLeft: "2em",
            }}
          >
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" font />}
              aria-label="breadcrumb"
            >
              {breadcrumbs}
            </Breadcrumbs>
          </Stack>
          <ListBooks propId="2" paramBooks={books} keyword={params.keyword} />
        </section>
      </div>
      <Footer />
    </div>
  );
};
export default SearchResult;
