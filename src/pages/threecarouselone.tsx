import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box } from "@mui/material";

const Threecarouselone: React.FC<any> = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const images = [
    { src: "earrring.webp", name: "Earring" },
    { src: "potsplant.webp", name: "Potted Plant" },
    { src: "printedtees4.webp", name: "Printed Tees" },
    { src: "shophome.webp", name: "Home Decor" },
    { src: "shopdresses.webp", name: "Dresses" },
    { src: "shopcandles.webp", name: "Candles" },
    { src: "shopblanket.jpeg", name: "Blanket" },
    { src: "shop greeting cards.webp", name: "Greeting Cards" },
    { src: "jk2.jpeg", name: "JK2" }
  ];

  return (
    <Box sx={{ margin: "auto", paddingTop: "80px", maxWidth: "70%" }}>
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
          <Box key={index} sx={{ margin: "0 10px", textAlign: "center" }}>
            <img src={item.src} alt={`Image ${index}`} style={{ maxWidth: "100%", height: "auto" }} />
            <p style={{ marginTop: "30px",textDecoration:"underline" }}>{item.name}</p>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Threecarouselone;
