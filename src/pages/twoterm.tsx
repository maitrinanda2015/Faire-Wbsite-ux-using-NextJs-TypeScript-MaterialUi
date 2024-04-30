import React from "react";
import Typography from "@mui/material/Typography";
import { Stack, Grid, Box } from "@mui/material";

const Twoterm: React.FC<any> = () => {
  return (
    <Stack sx={{ bgcolor: "#F2F2F2" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              //   bgcolor: "#F2F2F2",
              height: "70vh",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8rem",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "40px",
                marginBottom: "20px",
              }}
            >
              We believe the future <br /> of retail is local.{" "}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Box
  sx={{
    // bgcolor: "#F2F2F2",
    height: "70vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start", // Align content to the left
    gap: "8rem",
    textAlign: "center",
  }}
>
  <div>
  <Typography
  sx={{
    fontFamily: "Poppins",
    fontSize: "20px",
    marginBottom: "20px",
  }}
>
  Our mission is to empower independent entrepreneurs<br/>
  to chase their dreams. By simplifying the wholesale<br/>
  buying process and bringing together independent<br/>
  brands and retailers from around the world, we strive to<br/>
  level the playing field for small businesses everywhere.
</Typography>
    <Typography
      sx={{
        fontFamily: "Poppins",
        fontSize: "15px",
        textDecoration: "underline",
        textAlign:"left"
      }}
    >
      Aboutus
    </Typography>
  </div>
</Box>

        </Grid>
      </Grid>
    </Stack>
  );
};

export default Twoterm;
