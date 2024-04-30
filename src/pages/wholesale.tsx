import React from "react";
import Typography from "@mui/material/Typography";
import { Stack, Grid, Box, TextField, Button } from "@mui/material";

const Wholesale: React.FC<any> = () => {
  return (
    <Stack>
      <Grid container>
        <Grid item xs={12} md={12} sm={12} lg={12}>
          <Box
            sx={{
              //   position: "relative",
              bgcolor: "red",
              height: "100vh",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="woodshop1.webp"
              alt="woodshop"
              style={{ width: "100%", height: "100vh" }}
            />
            {/* Typography and Button over the image */}
            <Box
              sx={{
                position: "absolute",
                top: "80%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "60px",
                  fontFamily: "Poppins",
                  color: "#ffffff",
                }}
                noWrap
              >
                Your one-stop shop for wholesale
              </Typography>
              <Typography
                sx={{
                  fontSize: "25px",
                  fontFamily: "Poppins",
                  color: "#ffffff",
                }}
                noWrap
              >
                Shop over 100,000 independent brands, all in one place.
              </Typography>
              
              <Button

                sx={{
                    mt:"30px",
                  bgcolor: "white",
                  width:"220px",

                  borderRadius:"0px",
                  "&:hover": {
                    bgcolor: "white", // Keep the background color the same on hover
                  },
                }}
              >
                <Typography
                    sx={{
                      fontSize: "17px",
                      fontFamily: "Poppins",
                      color: "black",
                      textTransform: "capitalize", // Capitalize all letters
                    }}
                  >
                    Sign Up to{" "}
                    <span style={{ textTransform: "uppercase" }}>S</span>hop
                  </Typography>
              </Button>

              <Box spacing={2} sx={{ mt: 2 }}>
                <Button
                  variant="contained" // Using a contained variant to control width
                  sx={{
                    borderRadius:"0px",
                    width:"220px",
                    bgcolor: "white",
                    "&:hover": {
                      bgcolor: "white", // Keeping the background color the same on hover
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "17px",
                      fontFamily: "Poppins",
                      color: "black",
                      textTransform: "capitalize", // Capitalize all letters
                    }}
                  >
                    Sell on{" "}
                    <span style={{ textTransform: "uppercase" }}>F</span>aire
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Wholesale;
