import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

export default function Footer() {
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img src={Logo} alt="logo" style={{ width: "200px", height: "41px" }} />
    </Stack>
    <Typography sx={{ color: "gray" }} mt="30px" textAlign="center" pb="20px">
      &copy; Copyright Red Black Tree .Co
    </Typography>
  </Box>;
}
