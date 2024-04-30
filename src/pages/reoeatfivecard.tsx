import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Card, CardContent, Typography, Grid } from "@mui/material";

const Reoeatfivecard: React.FC<any> = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5, // optional, default to 1.
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
    { src: "Faye1.webp", name: "Faye" },
    { src: "WGV International.jpeg", name: "WGV International" },
    { src: "Barski.webp", name: "Barski" },
    { src: "makesy.jpeg", name: "Makesy " },
    { src: "Popshots studios.webp", name: "Popshots Studios" },
    { src: "California seashell fish.jpeg", name: "California seashell " },
    { src: "Gdeco1.jpeg", name: "Gdeco" },
    { src: "Fo linen work.webp", name: "Fog linen work" },
    { src: "Tasha apparel whole.webp", name: "Tasha apparel work" },
    { src: "Garaffeo cravate.jpeg", name: "Garaffeo cravate" },
    { src: "British Fossils.jpeg", name: "British fossils" },
    { src: "Warm glow candle.webp", name: "Warm glow candle " },
    { src: "dresses.jpeg", name: "Aurobele Elbiza" },
    { src: "fun usual suspects.webp", name: "Fun usual suspect" },
    { src: "beaulilux.jpeg", name: "Beautilux" },
    { src: "viai beauty.webp", name: "Viai beauty" },
    { src: "styles.webp", name: "Allinstyles" },
    { src: "ZKB(zylis,cole.jpeg", name: "ZKB[Zyliss,cole&.." },
    { src: "Alice cottage.webp", name: "Alice cottage" },
    { src: "Wax design.webp", name: "Wax design" },
  ];

  return (
    <Box
      sx={{
        margin: "auto",
        paddingTop: "80px",
        paddingBottom: "100px",
        maxWidth: "75%",
      }}
    >
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{ marginBottom: "20px" }}
      >
        <Grid item>
          <Typography
            sx={{
              fontSize: "25px",
              fontFamily: "Poppins",
              color: "#585353",
            }}
          >
            More to Explore
          </Typography>
          <Typography
            sx={{
              fontSize: "17px",
              fontFamily: "Poppins",
              color: "#585353",
              paddingTop:"5px"
            }}
          >
            Shop over 1,00,000 independent wholesale suppliers
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            sx={{
              fontSize: "17px",
              fontFamily: "Poppins",
              color: "#585353",
              textDecoration: "underline",
              paddingBottom: "20px",
            }}
          >
            All Brand
          </Typography>
        </Grid>
      </Grid>
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
          <Grid key={index} item xs={12} md={3} sx={{ margin: "10px" }}>
            <Card sx={{ textAlign: "center", marginBottom: "20px" }}>
              <img
                src={item.src}
                alt={`Image ${index}`}
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <CardContent>
                <Typography variant="body1" component="p">
                  {item.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Carousel>
    </Box>
  );
};

export default Reoeatfivecard;
