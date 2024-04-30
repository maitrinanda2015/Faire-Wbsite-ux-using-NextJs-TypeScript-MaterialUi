import React from "react";
import Typography from "@mui/material/Typography";
import { Stack, Grid, Button, Box } from "@mui/material";

const Sellonfairetwo: React.FC<any> = () => {
  return (
    <Stack sx={{marginTop:"80px",marginBottom:"50px",  backgroundImage:"url('beaulilux.jpeg')" }}>
      {/* <Grid container spacing={2}> */}
      {/* <Grid item xs={6} sm={3} > */}
      <Box
        sx={{
          //   bgcolor: "#F2F2F2",
          height: "70vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "normal",
          justifyContent: "center",
          //   gap: "8rem",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: "40px",
            color: "#ffffff",
            marginBottom: "20px",
          }}
        >
          Ready to start ordering wholesale <br /> online?
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: "17px",
            color: "#ffffff",
            margin: "8px",
          }}
        >
          Purchase wholesale merchandise <br /> your customers will love.
        </Typography>
        
        <Button
  sx={{
    margin: "0px",
    fontVariantNumeric: "lining-nums tabular-nums",
    fontFamily: "graphik, helvetica, sans-serif",
    fontWeight: 200,
    fontSize: "14px",
    lineHeight: "20px",
    letterSpacing: "0.15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // width: "auto",
    cursor: "pointer",
    position: "relative",
    height: "48px",
    padding: "0px 23px",
    border: "1px solid rgb(51, 51, 51)",
    backgroundColor: "rgb(255, 255, 255)",
    color: "rgb(51, 51, 51)",
    mt: "20px",
    bgcolor: "white",
    width: "200px",
    marginLeft: "570px",
    borderRadius: "0px",
    marginBottom:"30px",
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
    Join Today
  </Typography>

  
</Button>

<Typography
    sx={{
      fontSize: "17px",
      fontFamily: "Poppins",
      color: "white",
      textTransform: "capitalize", // Capitalize all letters
      textDecoration:"underline"
    }}
  >
    Sell On Faire
   </Typography>

      </Box>
      {/* </Grid> */}

      {/* </Grid> */}
    </Stack>
  );
};

export default Sellonfairetwo;
