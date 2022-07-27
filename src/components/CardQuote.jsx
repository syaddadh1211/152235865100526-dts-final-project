import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { EffectFade, Pagination, Navigation, Autoplay } from "swiper";
import { Box, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import quote1 from "../images/quote1.jpg";
import quote2 from "../images/quote2.jpg";
import quote3 from "../images/quote3.jpg";
import quote4 from "../images/quote4.jpg";

const CardQuote = () => {
  let navigate = useNavigate();

  const handleBook = (event, book) => {
    navigate("selected/" + book.slug);
  };

  return (
    <>
      <Container
        maxWidth="m"
        sx={{
          backgroundColor: "white",
          marginTop: "-20px",
        }}
      >
        <Box>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={quote1} alt="quote1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={quote2} alt="quote2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={quote3} alt="quote3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={quote4} alt="quote4" />
            </SwiperSlide>
          </Swiper>
        </Box>
      </Container>
    </>
  );
};

export default CardQuote;
