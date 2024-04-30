import React from "react";
import Typography from "@mui/material/Typography";
import {
  Stack,
  Grid,
  Box,
  
} from "@mui/material";

const Threetermtwo: React.FC<any> = () => {
  return (
    <Stack>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} sm={12} lg={12}>
          <Box
            sx={{
              bgcolor: "#ffffff",
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
               FASTCOMPANY
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "15px",
                  marginTop: "20px",
                  color:"#817979"
                }}
              >
                “The 10 most innovative retail <br /> companies of 2020”
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "15px",
                  textDecoration: "underline",
                  marginTop: "15px",
                }}
              >
                Read Article{" "}
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "30px",
                  marginTop:"27px"
                }}
              >
                WWD
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "15px",
                  marginTop: "20px",
                  color:"#817979"

                }}
              >
                “Faire’s first online trade <br /> show could show how an <br /> online version could work.”
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "15px",
                  textDecoration: "underline",
                  marginTop: "15px",
                }}
              >
                Read Article
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
                FORBES
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "15px",
                  marginTop: "20px",
                  color:"#817979"

                }}
              >
                “A high-flying unicorn bet its <br /> business on local shops.”
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "15px",
                  textDecoration: "underline",
                  marginTop: "15px",
                }}
              >
                Read Article
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Threetermtwo;
