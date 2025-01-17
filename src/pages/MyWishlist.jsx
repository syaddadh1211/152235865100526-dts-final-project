import React, { useEffect, useState } from "react";
import "./style.css";

import ListBooks from "../components/ListBooks";
import Footer from "../components/Footer";
import CardCategori from "../components/CardCategori";
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
        const buku = {
          id: book.id,
          ...book.data(),
        };
        bookWish.push(buku);
      });

      setBooks(bookWish);
    };
    queryForWishlist();
  }, [books]);

  return (
    <div>
      <div className="left-right">
        <nav className="navigasi">
          <CardCategori />
        </nav>
        <section>
          <ListBooks propId="6" paramBooks={books} keyword={"My Wishlist"} />
        </section>
      </div>
      <Footer />
    </div>
  );
};
export default MyWishlist;
