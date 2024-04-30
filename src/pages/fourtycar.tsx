import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box } from "@mui/material";

const Fourtycar: React.FC<any> = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
      slidesToSlide: 7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const images = [
    { 
      src: "earrring.webp", 
      name:"earring"
    },
    { 
      src: "potsplant.webp", 
      name:"potplant"
    },
    { 
      src: "printedtees4.webp", 
      name:"printedtees"
    },
    { 
      src: "shophome.webp", 
      name: "shophome"
    },
    { 
      src: "earrring.webp", 
      name:"earring"
    },
    { 
      src: "potsplant.webp", 
      name:"potplant"
    },
    { 
      src: "printedtees4.webp", 
      name:"printedtees"
    },
    { 
      src: "shophome.webp", 
      name: "shophome"
    },
    { 
      src: "earrring.webp", 
      name:"earring"
    },
    { 
      src: "potsplant.webp", 
      name:"potplant"
    },
    { 
      src: "printedtees4.webp", 
      name:"printedtees"
    },
    { 
      src: "shophome.webp", 
      name: "shophome"
    },
    { 
      src: "earrring.webp", 
      name:"earring"
    },
    { 
      src: "potsplant.webp", 
      name:"potplant"
    },
    { 
      src: "printedtees4.webp", 
      name:"printedtees"
    },
    { 
      src: "shophome.webp", 
      name: "shophome"
    },
    { 
      src: "earrring.webp", 
      name:"earring"
    },
    { 
      src: "potsplant.webp", 
      name:"potplant"
    },
    { 
      src: "printedtees4.webp", 
      name:"printedtees"
    },
    { 
      src: "shophome.webp", 
      name: "shophome"
    },
    { 
      src: "printedtees4.webp", 
      name:"printedtees"
    },
  ];

  return (
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
        <Box
          key={index}
          sx={{
            textAlign: "center",
            // paddingBottom: "15px",
            // paddingTop: "15px",
            // padding: "15px",
            // bgcolor: "#DCDCDC",
          }}
        >
          <img
            src={item.src}
            alt={item.name}
            style={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: "50%", // Make the image circular
              maxHeight: "100px", // Adjust the max height as needed
            }}
          />
          <p>{item.name}</p>
        </Box>
      ))}
    </Carousel>
  );
};

export default Fourtycar;
