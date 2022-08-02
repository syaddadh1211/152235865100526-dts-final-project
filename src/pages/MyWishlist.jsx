import React, { useEffect, useState } from "react";
import "./style.css";

import ListBooks from "../components/ListBooks";
import Footer from "../components/Footer";
import CardCategori from "../components/CardCategori";
import { Stack, Typography, Breadcrumbs } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { auth, firestore } from "../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, query, where, getDocs } from "firebase/firestore";

const MyWishlist = () => {
  const [books, setBooks] = useState([]);
  const [user] = useAuthState(auth);
  let bookWish = [];

  useEffect(() => {
    const queryForWishlist = async () => {
      const wishlistQuery = query(
        collection(firestore, "user_wishlist"),
        where("email", "==", user.email)
      );

      const querySnapshot = await getDocs(wishlistQuery);
      querySnapshot.forEach((book) => {
        bookWish.push(book.data());
      });

      setBooks(bookWish);
    };
    queryForWishlist();
    //cukup sekali dijalankan jadi dikasih array kosong, kalo ingin setiap kali reaktif saat ada perubahan state maka
    //array bisa diisi nama statenya
  }, [bookWish]);

  //   const breadcrumbs = [
  //     <Typography key="3" color="text.primary">
  //       My Total
  //     </Typography>,
  //     <Typography key="3" color="text.primary">
  //       Wish List
  //     </Typography>,
  //     <Typography key="3" color="text.primary">
  //       {books.length} {" book"}
  //     </Typography>,
  //   ];

  return (
    <div>
      <div className="left-right">
        <nav className="navigasi">
          <CardCategori />
        </nav>
        <section>
          {/* <Stack
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
          </Stack> */}
          <ListBooks
            propId="6"
            paramBooks={books}
            keyword={"There are " + books.length + " book in my wishlist"}
          />
        </section>
      </div>
      <Footer />
    </div>
  );
};
export default MyWishlist;
