import React from "react";
import Typography from "@mui/material/Typography";
import {
  Stack,
  Grid,
  Box,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Fairetop: React.FC<any> = () => {
  return (
    <Stack >
      <Grid container>
        <Grid item xs={12} md={12} sm={12} lg={12}>
          <Box
            sx={{
              bgcolor: "#F2F2F2",
              height: "8vh",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ color: "black", fontSize: "14px" }}>
              Shop wholesale online from over 1,00,000 brands.{" "}
              <span style={{ textDecoration: "underline" }}>Sign up</span>
            </Typography>
          </Box>
          <Box
            sx={{
              height: "10vh",
              position: "sticky",
              top: 0,
              zIndex: 1000, // Set a higher z-index to ensure it appears above other content

              width: "100%",
              //   border: "1px solid black",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "2rem", // Add gap between child components
              //   zIndex: 1000,
            }}
          >
            <Typography
              sx={{
                fontSize: "20px",
                fontFamily: "Poppins",
                letterSpacing: "0.9em",
              }}
            >
              FAIRE
            </Typography>

            <TextField
              variant="standard"
              placeholder="Search products or brands"
              InputProps={{
                disableUnderline: true,
                endAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "#C6C6C6" }} />
                  </InputAdornment>
                ),
                sx: {
                  height: "40px",
                  paddingLeft: "20px",
                  color: "#CBCBCB",
                  backgroundColor: "#FFFFFF",
                  width: "600px",
                  borderRadius: "20px",
                  border: "1px solid #C0BCBC",
                },
              }}
            />
            <Typography sx={{ fontSize: "15px", fontFamily: "Poppins" }}>
              EN-US
            </Typography>
            <Typography sx={{ fontSize: "15px", fontFamily: "Poppins" }}>
              |
            </Typography>
            <Typography sx={{ fontSize: "15px", fontFamily: "Poppins" }}>
              Blog
            </Typography>
            <Typography sx={{ fontSize: "15px", fontFamily: "Poppins" }}>
              Sell on Faire
            </Typography>
            <Typography sx={{ fontSize: "15px", fontFamily: "Poppins" }}>
              Sign In
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "black",
                borderRadius: "0px",
                "&:hover": {
                  backgroundColor: "black", // Keep the background color black on hover
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: "15px",
                  fontFamily: "Poppins",
                  //   color: "black",
                  textTransform: "capitalize", // Capitalize all letters
                }}
              >
                Sign Up to <span style={{ textTransform: "uppercase" }}>S</span>
                hop
              </Typography>
            </Button>
          </Box>
          <Box
            sx={{
              height: "10vh",
             
              width: "100%",
              //   border: "1px solid black",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
             
            }}
          >
            <Typography
              sx={{ color: "black", fontSize: "14px", padding: "10px" }}
            >
              Featured
            </Typography>
            <Typography
              sx={{ color: "black", fontSize: "14px", padding: "10px" }}
            >
              New
            </Typography>
            <Typography
              sx={{ color: "black", fontSize: "14px", padding: "10px" }}
            >
              Home decor
            </Typography>
            <Typography
              sx={{ color: "black", fontSize: "14px", padding: "10px" }}
            >
              Food & drink
            </Typography>
            <Typography
              sx={{ color: "black", fontSize: "14px", padding: "10px" }}
            >
              Women
            </Typography>
            <Typography
              sx={{ color: "black", fontSize: "14px", padding: "10px" }}
            >
              Beauty & wellness
            </Typography>
            <Typography
              sx={{ color: "black", fontSize: "14px", padding: "10px" }}
            >
              Jewelry
            </Typography>
            <Typography
              sx={{ color: "black", fontSize: "14px", padding: "10px" }}
            >
              Paper & novelty
            </Typography>
            <Typography
              sx={{ color: "black", fontSize: "14px", padding: "10px" }}
            >
              Kids & baby
            </Typography>
            <Typography
              sx={{ color: "black", fontSize: "14px", padding: "10px" }}
            >
              Pets
            </Typography>
            <Typography
              sx={{ color: "black", fontSize: "14px", padding: "10px" }}
            >
              Men
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Fairetop;
