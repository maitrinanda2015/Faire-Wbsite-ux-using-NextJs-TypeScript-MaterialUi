import React from "react";
import Typography from "@mui/material/Typography";
import {
  Stack,
  Grid,
  Box,
  
} from "@mui/material";

const Threeterm: React.FC<any> = () => {
  return (
    <Stack>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} sm={12} lg={12}>
          <Box
            sx={{
              bgcolor: "#F2F2F2",
              height: "70vh",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8rem",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "30px",
                  marginBottom: "20px",
                }}
              >
                Flexible payment terms
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "15px",
                  marginTop: "20px",
                  color:"#817979"
                }}
              >
                Buy now, pay up to 60 days later—interest-
                <br />
                free.
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "15px",
                  textDecoration: "underline",
                  marginTop: "15px",
                }}
              >
                Learn More{" "}
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "30px",
                }}
              >
                Unique products <br />
                curated for your store
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "15px",
                  marginTop: "20px",
                  color:"#817979"

                }}
              >
                The more you shop our wholesale website, <br /> the better
                recommendations you’ll get.
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "15px",
                  textDecoration: "underline",
                  marginTop: "15px",
                }}
              >
                Shop Bestsellers
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "30px",
                  marginBottom: "20px",
                }}
              >
                Free returns <br /> on opening orders
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "15px",
                  marginTop: "20px",
                  color:"#817979"

                }}
              >
                We'll give you a prepaid shipping label in <br /> case you'd
                like to send products back.{" "}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "15px",
                  textDecoration: "underline",
                  marginTop: "15px",
                }}
              >
                Shop New arrivals
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Threeterm;
