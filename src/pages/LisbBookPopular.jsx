import React, { useEffect, useState } from "react";

import gramedia from "../apis/gramedia";
import CardBook from "../components/CardBook";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
import { useNavigate } from "react-router-dom";

const ListBookPopular = () => {
  const [books, setBooks] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await gramedia.get(
          "/categories/science-fiction-fantasy/books"
        );
        setBooks(response.data.books);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    //cukup sekali dijalankan jadi dikasih array kosong, kalo ingin setiap kali reaktif saat ada perubahan state maka
    //array bisa diisi nama statenya
  }, []);

  const handleMovie = (event, book) => {
    navigate("selected/" + book.slug);
  };

  return (
    <div>
      <Swiper
        slidesPerView={6}
        spaceBetween={0}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {books.map((book) => {
          return (
            // <Box className="boxy">
            <SwiperSlide>
              {/* <a href={`${book.url}`}>
                <img
                  key={book.id}
                  src={`${book.image}`}
                  onClick={(event) => handleMovie(event, book)}
                  alt="buku"
                ></img>
              </a> */}
              <CardBook key={book.id} propsBook={book} />
            </SwiperSlide>
            // </Box>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ListBookPopular;
