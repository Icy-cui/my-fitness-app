import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import HeroBannerImg from "../assets/images/banner.png";

// example: filmpire.netlify.app
export default function HeroBanner() {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px" mt="30px"
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontWeight="22px" lineHeight={"35px"} mb={2}>
        Check out the most effective fitness
      </Typography>
      <Button variant="contained" color="error" href="#exercises"
      sx={{ backgroundColor: "#FF2625", padding:'10px' }}
      >
        Explore Exercise
      </Button>
      <Typography
        fontWeight={600}
        color="#FF2625"
        sx={{
          opacity: "0.1",
          display: { lg: "block", xs: "none" },
          fontSize: "180px",
        }}
      >
        Exercise
      </Typography>
      <img src={HeroBannerImg} alt="banner" className="hero-banner-img"></img>
    </Box>
  );
}
