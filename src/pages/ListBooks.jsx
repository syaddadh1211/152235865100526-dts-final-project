import React, { useEffect, useState } from "react";
import axios from "axios";
import gramedia from "../apis/gramedia";
import CardBook from "../components/CardBook";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { EffectFade, Pagination, Navigation } from "swiper";

const ListBooks = () => {
  const [books, setBooks] = useState([]);

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

  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        {books.map((book) => {
          return (
            // <Box className="boxy">

            <SwiperSlide>
              <CardBook key={book.id} propsBook={book} />
            </SwiperSlide>
            // </Box>
          );
        })}
      </Swiper>
    </>
  );
};

export default ListBooks;
