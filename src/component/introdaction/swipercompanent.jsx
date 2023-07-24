import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import axios from "axios";
import { Autoplay } from "swiper/modules";

const swipercompanent = () => {
  const [sirketlerlogo, setSirketlerlogo] = useState([]);
  useEffect(() => {
    axios
      .get("https://64b929f879b7c9def6c0ad9a.mockapi.io/companies/img/nebi")
      .then((melumat) => setSirketlerlogo(melumat.data))
      .catch((error) => {
        console.error("api isdeyi basarisiz", error);
      });
  }, []);
  const bizimlogo = [
    "https://res.cloudinary.com/dviivhiqd/image/upload/v1690030520/l_ket0k5.png",
    "https://res.cloudinary.com/dviivhiqd/image/upload/v1690030721/l-1_knq0tj.png",
    "https://res.cloudinary.com/dviivhiqd/image/upload/v1690030721/l_oxjail.png",
    "https://res.cloudinary.com/dviivhiqd/image/upload/v1690030721/l-1-2_ncmxtj.png",
  ];
  useEffect(() => {
    if (sirketlerlogo.length > 0) {
      const yenilogo = sirketlerlogo.map((logo, index) => {
        const imgindex = index % bizimlogo.length;
        const indexlog = bizimlogo[imgindex];
        return {
          ...logo,
          imgs: indexlog,
        };
      });
      setSirketlerlogo(yenilogo);
    }
  }, [sirketlerlogo]);

  return (
    <div className="container">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        slidesPerView={4}
        spaceBetween={30}
        className="mySwiper"
      >
        {sirketlerlogo &&
          sirketlerlogo.map((birsirketlogosu) => (
            <SwiperSlide className="siperclass col-lg-3">
              <img src={birsirketlogosu.imgs} alt="" />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default swipercompanent;
