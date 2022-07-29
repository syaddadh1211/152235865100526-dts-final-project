import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import { gramediaKeyword } from "../apis/gramedia";
import ListBooks from "../pages/ListBooks";
import Footer from "../components/Footer";
import CardCategori from "../components/CardCategori";
import { Stack, Typography, Breadcrumbs } from "@mui/material/Stack";

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

  return (
    <div>
      <div className="left-right">
        <nav className="navigasi">
          <CardCategori />
        </nav>
        <section>
          <ListBooks propId="2" paramBooks={books} keyword={params.keyword} />
        </section>
      </div>
      <Footer />
    </div>
  );
};
export default SearchResult;
