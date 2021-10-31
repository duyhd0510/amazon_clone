import React from 'react'
import "./Home.css";
import Product from './Product';
import { Slide } from 'react-slideshow-image';
import { Fade } from "react-slideshow-image";
import SildeShowImage from './SildeShowImage';

function Home() {

  return (
    <div className="home">
      <div className="home_container">
        {/* <div className="home_image">
          <SildeShowImage/>
        </div> */}
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg"
          alt=""
        />

        <div className="home_row">
          <Product
            id="12321341"
            title="The lean start up"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41pigC7Lq0L.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="SAMSUNG Galaxy Chromebook 4 11.6-inch 64GB eMMC, 4GB RAM, Gigabit Wi-Fi, Chrome OS, HD Intel Celeron Processor N4000"
            price={19.99}
            image="https://m.media-amazon.com/images/I/8172kS3Ec-L._AC_UL480_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id="3"
            title="Samsung Galaxy Tab A7 10.4 Wi-Fi 32GB Silver (SM-T500NZSAXAR)"
            price={194}
            image="https://m.media-amazon.com/images/I/71MvL2kCFCL._AC_UL480_FMwebp_QL65_.jpg"
            rating={4}
          />
          <Product
            id="4"
            title="Samsung Tab A7 Lite 8.7'' Gray 32GB (SM-T220NZAAXAR)"
            price={129}
            image="https://m.media-amazon.com/images/I/819hAP4xoGS._AC_UL480_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="5"
            title="Lenovo IdeaPad 1 14 14.0'' Laptop, 14.0'' HD (1366 x 768) Display, Intel Celeron N4020 Processor, 4GB DDR4 RAM, 64 GB SSD Storage, Intel UHD"
            price={255}
            image="https://m.media-amazon.com/images/I/71IVTMa5JQL._AC_UL480_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id="6"
            title="CyberpowerPC Gamer Supreme Liquid Cool Gaming PC, AMD Ryzen 7 3800X 3.9GHz, GeForce RTX 3060 12GB, 16GB DDR4, 1TB NVMe SSD,"
            price={1670}
            image="https://m.media-amazon.com/images/I/818SNa1ruZL._AC_UL480_FMwebp_QL65_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
