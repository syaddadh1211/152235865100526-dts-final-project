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
import quote1 from "../images/pre-order.jpg";
import quote2 from "../images/promo.jpeg";
import quote3 from "../images/Fantastic-Beasts.jpg";
import quote4 from "../images/majalah.jpg";

const CardQuote = () => {
  let navigate = useNavigate();

  const handleBook = (event, book) => {
    navigate("selected/" + book.slug);
  };

  return (
    <>
      <Container
        sx={{
          backgroundColor: "inherit",
          marginTop: "-20px",
          marginBottom: "5px",
          marginLeft: "0px",
          width: "6vw",
        }}
      >
        <Box
          sx={{
            width: "50vw",
            height: "28vw",
            marginRight: "14px",
          }}
        >
          <img src={quote1} alt="quote1" width="800vw" height="350vw" />
          <img src={quote2} alt="quote2" width="800vw" height="250vw" />
          {/* <Swiper
            spaceBetween={30}
            slidesPerView={"auto"}
            // centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
            marginTop="5px"
          >
            <SwiperSlide>
              <img src={quote1} alt="quote1" width="1030vw" height="400vw" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={quote2} alt="quote2" width="1030vw" height="400vw" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={quote3} alt="quote3" width="1030vw" height="400vw" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={quote4} alt="quote4" width="1030vw" height="400vw" />
            </SwiperSlide>
          </Swiper> */}
        </Box>
      </Container>
    </>
  );
};

export default CardQuote;
