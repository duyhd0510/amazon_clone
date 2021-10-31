import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import './SlideShowImage.css';
import SimpleImageSlider from "react-simple-image-slider";
import Carousel from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function SildeShowImage() {

    const images = [
        { url: "https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg" },
        { url: "https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg" },
        { url: "https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg" },
        { url: "https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg" },
        { url: "https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg" },
      ];

    return (
        <div>
            <Carousel
                
            >
                <img src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg" />
                <img src="https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg"/>
                <img src= "https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg" />
            </Carousel>
        </div>
    )
}

export default SildeShowImage
