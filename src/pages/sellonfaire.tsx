import React from "react";
import Typography from "@mui/material/Typography";
import { Stack, Grid, Button, Box } from "@mui/material";

const Sellonfaire: React.FC<any> = () => {
  return (
    <Stack sx={{marginTop:"80px", bgcolor: "rgb(89, 85, 64);  " }}>
      {/* <Grid container spacing={2}> */}
      {/* <Grid item xs={6} sm={3} > */}
      <Box
        sx={{
          //   bgcolor: "#F2F2F2",
          height: "55vh",
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
          Sell on Faire
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: "17px",
            color: "#ffffff",
            margin: "8px",
          }}
        >
          Exposure in the world’s largest B2B marketplace
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: "17px",
            color: "#ffffff",
            paddingRight: "50px",
            margin: "8px",
          }}
        >
          Orders from verified independent retailers
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: "17px",
            color: "#ffffff",
            paddingRight: "90px",
            margin: "8px",
          }}
        >
          Guaranteed payment on every order
        </Typography>
        <Button
          sx={{
            mt: "20px",
            bgcolor: "white",
            width: "270px",
            marginLeft:"500px",

            borderRadius: "0px",
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
            Learn about selling 
          </Typography>
        </Button>
      </Box>
      {/* </Grid> */}

      {/* </Grid> */}
    </Stack>
  );
};

export default Sellonfaire;
