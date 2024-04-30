import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Typography } from "@mui/material";

const Photocar: React.FC<any> = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
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
      testimonial: "“We’ve had such a successful experience with Faire, bringing in new artists and connecting with Shopify;<br> it’s probably the most flawless system we’ve used.”",
      author: "Kelly Marie Thompson, Fleur Inc."
    },
    { 
      src: "potsplant.webp", 
      testimonial: "“I love Faire because I don’t have to go to trade shows. Faire’s website is 100% more user-friendly and better <br> designed than other wholesale sites;”",
      author: "John Frechette, MADE"
    },
    { 
      src: "printedtees4.webp", 
      testimonial: "“Faire makes things way simpler. We’ve migrated a number of our producers to the platform and discovered <br> a bunch of new brands that are a great fit for our store;”",
      author: "Mat Pond, The Epicurean Trader"
    },
    { 
      src: "shophome.webp", 
      testimonial: "“If you aren’t using Faire, you’re missing a great opportunity. Start today and deal with a very professional <br>  company helping all shopkeepers buy quality products from independent makers and artisans.”",
      author: "Cindy Davenport, Cinport Floral Studio & Gift Designs by Cinport"
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
            paddingBottom: "150px",
            paddingTop: "150px",
            bgcolor: "#DCDCDC",
          }}
        >
          <img
            src={item.src}
            alt={`Image ${index}`}
            style={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: "50%", // Make the image circular
              maxHeight: "100px", // Adjust the max height as needed
            }}
          />
          <Typography variant="subtitle1">{item.name}</Typography>
          <Typography sx={{ fontFamily: "Poppins", fontSize: "20px", paddingBottom: "20px" }}>
            <span dangerouslySetInnerHTML={{ __html: item.testimonial }} />
          </Typography>
          <Typography sx={{ fontFamily: "Poppins", fontSize: "15px" }}>
            {item.author}
          </Typography>
        </Box>
      ))}
    </Carousel>
  );
};

export default Photocar;
