import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box } from "@mui/material";

const Twocar: React.FC<any> = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const images = [
    { src: "Brands with free shipping1.webp", name: "Brands with free shipping" },
    { src: "Eco-friendly brands.jpeg", name: "Eco-friendly brands" },
    { src: "Brands with short lead times.jpeg", name: "Brands with short lead times" },
    { src: "Brands based in USA.webp", name: "Brands based in USA " },
    { src: "Brands not sold on Amazon.webp", name: "Brands not sold on Amazon" },
    { src: "Women-owned businesses.webp", name: "Women-owned business" },
    { src: "Brands with no minimum1.jpeg", name: "Brands with no minimums" },
    { src: "shop greeting cards.webp", name: "Brands with free shipping" },
    ,
  ];

  return (
    <Box sx={{ margin: "auto", paddingTop: "80px", maxWidth: "60%" }}>
      <Carousel
        responsive={responsive}
        infinite={true}
        showDots={false}
        renderButtonGroupOutside={true}
        renderDotsOutside={false}
        swipeable={true}
        draggable={true}
      >
        {images.map((item, index) => (
          <Box key={index} sx={{  textAlign: "center" }}>
            <img
              src={item.src}
              alt={`Image ${index}`}
              style={{ maxWidth: "70%", height: "auto" }}
            />
            <p style={{ marginTop: "30px", textDecoration: "underline" }}>
              {item.name}
            </p>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Twocar;