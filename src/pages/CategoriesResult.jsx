import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import { gramediaAll } from "../apis/gramedia";
import ListBooks from "../components/ListBooks";
import Footer from "../components/Footer";
import CardCategori from "../components/CardCategori";
import { Typography } from "@mui/material";

const CategoriesResult = () => {
  let params = useParams();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await gramediaAll.get(
          "/categories/" + params.jenis + "/books"
        );

        setBooks(response.data.books);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [params.jenis]);

  const breadcrumbs = [
    <Typography key="3" color="text.primary">
      Hasil Pencarian
    </Typography>,
    <Typography key="3" color="text.primary">
      Kategori
    </Typography>,
    <Typography key="3" color="text.primary">
      {params.jenis}
    </Typography>,
  ];

  return (
    <div>
      <div className="left-right">
        <nav className="navigasi">
          <CardCategori />
        </nav>
        <section>
          <ListBooks propId="5" paramBooks={books} keyword={params.jenis} />
        </section>
      </div>
      <Footer />
    </div>
  );
};
export default CategoriesResult;
