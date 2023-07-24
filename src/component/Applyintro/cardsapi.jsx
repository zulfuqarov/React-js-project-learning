import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import axios from "axios";
import { Autoplay } from "swiper/modules";
import Cards from "./cards";
import "./Cardapi.css"
const cardsapi = () => {
  const [sirketler, setsirketler] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?sort=desc")
      .then((melumat) => setsirketler(melumat.data))
      .catch((err) => {
        console.error("apidan gelen isdey ugursuz oldu", err);
      });
  }, []);

const myimgs = [
  "https://res.cloudinary.com/dviivhiqd/image/upload/v1690123608/tt_nr2v6o.png",
  "https://res.cloudinary.com/dviivhiqd/image/upload/v1690123608/bb_xs3kxh.png",
  "https://res.cloudinary.com/dviivhiqd/image/upload/v1690123608/cc_fhclmz.png",
  "https://res.cloudinary.com/dviivhiqd/image/upload/v1690123608/dd_tewrdx.png",
  "https://res.cloudinary.com/dviivhiqd/image/upload/v1690123608/imgaes_oe43nl.png",
]
useEffect(() =>{
  if(sirketler.length > 0){
    const yenisekil = sirketler.map((sirketleryenisekil, index)=>{
      const yeniimg = index % myimgs.length
      	const indexlogo = myimgs[yeniimg]
        return{
          ...sirketleryenisekil,
          image: indexlogo,
        }
      })
      setsirketler(yenisekil)
  }
},[sirketler])


  return (
    <div className="cardapi-backfon">
      <div>
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
          {sirketler &&
            sirketler.map((birsitketler) => (
              <SwiperSlide className="siperclass col-lg-3">
                <Cards
                  imagesler={birsitketler.image}
                  siranom={birsitketler.price}
                  melumat={birsitketler.title}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default cardsapi;
